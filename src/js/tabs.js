const $tabsBtnsBoxes = document.querySelectorAll(".tabs-btns");
$tabsBtnsBoxes.forEach(($tabsBtnsBox) => {
    const $btns = $tabsBtnsBox.querySelectorAll(".tabs-btns__btn");
    $btns.forEach(($btn, index) => {
        $btn.addEventListener("click", () => {
            changeTab($tabsBtnsBox.dataset.tabsName, index);
        });
    });
});

function changeTab(name, index) {
    const $oldActiveBtn = document.querySelector(`.tabs-btns[data-tabs-name="${name}"] > .tabs-btns__btn--active`);
    const $newActiveBtn = document.querySelectorAll(`.tabs-btns[data-tabs-name="${name}"] > .tabs-btns__btn`)[index];

    $oldActiveBtn.classList.remove("tabs-btns__btn--active");
    $newActiveBtn.classList.add("tabs-btns__btn--active");

    const $tabsLists = document.querySelectorAll(`.tabs-list[data-tabs-name="${name}"]`);
    $tabsLists.forEach(($tabsList) => {
        const $oldActiveTab = $tabsList.querySelector(".tabs-list__item--active");
        const $newActiveTab = $tabsList.querySelectorAll(".tabs-list__item")[index];

        $oldActiveTab.classList.remove("tabs-list__item--active");
        $newActiveTab.classList.add("tabs-list__item--active");
    });
}
