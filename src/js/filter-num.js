import noUiSlider from "nouislider";
import { extractNumber } from "./utils";

const $priceFilters = document.querySelectorAll(".filter-num");
$priceFilters.forEach(($filter) => {
    const $slider = $filter.querySelector(".filter-num__slider");
    const data = {
        min: +$slider.dataset.min,
        max: +$slider.dataset.max,
        startMin: +$slider.dataset.startMin,
        startMax: +$slider.dataset.startMax,
        step: +$slider.dataset.step,
        maxPercent: +$slider.dataset.maxPercent,
    };

    const sliderStart = [];
    if (data.startMin || data.startMin === 0) sliderStart.push(data.startMin);
    if (data.startMax || data.startMax === 0) sliderStart.push(data.startMax);

    noUiSlider.create($slider, {
        start: sliderStart,
        connect: sliderStart.length === 1 ? "lower" : true,
        step: data.step,
        range: {
            min: data.min,
            max: data.max,
        },
        format: {
            from: (value) => parseFloat(value),
            to: (value) => parseFloat(value),
        },
    });

    const $minInput = $filter.querySelector(".filter-num__input--min");
    const $maxInput = $filter.querySelector(".filter-num__input--max");
    $minInput?.addEventListener("blur", () => {
        $slider.noUiSlider.set(extractNumber($minInput.value));
    });

    $maxInput?.addEventListener("blur", () => {
        $slider?.noUiSlider.set([null, extractNumber($maxInput.value)]);
    });

    $slider.noUiSlider.on("update", (values) => {
        const minValue = `${values[0]}`;
        const maxValue = `${values[1]}`;

        if ($minInput) {
            $minInput.imask ? ($minInput.imask.value = minValue) : ($minInput.value = minValue);
        }

        if ($maxInput) {
            $maxInput.imask ? ($maxInput.imask.value = maxValue) : ($maxInput.value = maxValue);
        }
    });
});

const $updateInputs = document.querySelectorAll("[data-filter-num-name]");
$updateInputs.forEach(($updateInput) => {
    $updateInput.addEventListener("change", () => {
        const filterPriceName = $updateInput.dataset.filterPriceName;
        const $filterPrice = document.querySelector(`[data-name="${filterPriceName}"]`);
        const $slider = $filterPrice.querySelector(".filter-num__slider");
        const minValue = $updateInput.dataset.filterPriceMin;
        const maxValue = $updateInput.dataset.filterPriceMax;

        $slider?.noUiSlider.set([minValue, maxValue]);
    });
});
