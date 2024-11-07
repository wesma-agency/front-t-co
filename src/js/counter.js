const $counters = document.querySelectorAll(".counter");
$counters.forEach(($counter) => {
    const $minus = $counter.querySelector(".counter__minus");
    const $plus = $counter.querySelector(".counter__plus");
    const $input = $counter.querySelector(".counter__input");

    const changeEvent = new Event("counter:change", {
        detail: {
            $counter,
            $minus,
            $plus,
            $input,
        },
    });

    $minus.addEventListener("click", () => {
        $input.value = Math.max(+$input.value - 1, 1);

        $counter.dispatchEvent(changeEvent);
    });

    $plus.addEventListener("click", () => {
        $input.value = +$input.value + 1;

        $counter.dispatchEvent(changeEvent);
    });
});
