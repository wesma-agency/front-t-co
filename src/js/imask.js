import IMask from "imask";

const $inputs = document.querySelectorAll(".js-imask");
$inputs.forEach(($input) => {
    const mask = $input.dataset.mask;
    let imask = null;

    if (mask === "int" || mask === "float") {
        const min = $input.dataset.maskMin ? parseFloat($input.dataset.maskMin) : null;
        const max = $input.dataset.maskMax ? parseFloat($input.dataset.maskMax) : null;

        imask = IMask($input, {
            mask: Number,
            lazy: false,
            signed: false,
            min,
            max,
            thousandsSeparator: " ",
            radix: ".",
            scale: mask === "float" ? 2 : 0,
        });
    } else {
        imask = IMask($input, { mask });
    }

    $input.imask = imask;
});
