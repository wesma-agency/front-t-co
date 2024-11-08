import { lockBody, unlockBody } from "./utils";

const $catalog = document.querySelector(".catalog");
if ($catalog) {
    const $sortBtns = $catalog.querySelectorAll(".catalog-header__sort-btn");
    $sortBtns.forEach(($btn) => {
        $btn.addEventListener("click", () => {
            const $oldActiveBtn = $catalog.querySelector(".catalog-header__sort-btn--active");
            if ($btn !== $oldActiveBtn) {
                $oldActiveBtn.classList.remove("catalog-header__sort-btn--active");
                $btn.classList.add("catalog-header__sort-btn--active");
            }
        });
    });

    const $products = $catalog.querySelectorAll(".catalog__item");
    const $switchBtnFull = $catalog.querySelector(".catalog-header__switch-btn--full");
    const $switchBtnGrid = $catalog.querySelector(".catalog-header__switch-btn--grid");

    const toggleProductsView = (isFullView) => {
        $switchBtnFull.classList.toggle("catalog-header__switch-btn--active", isFullView);
        $switchBtnGrid.classList.toggle("catalog-header__switch-btn--active", !isFullView);
        $products.forEach(($product) => $product.classList.toggle("product-card--full", isFullView));
    };

    $switchBtnFull?.addEventListener("click", () => toggleProductsView(true));
    $switchBtnGrid?.addEventListener("click", () => toggleProductsView(false));
}

const $catalogFilters = document.querySelector(".catalog-filters");
if ($catalogFilters) {
    const $openFiltersBtns = document.querySelectorAll(".js-open-filters");
    $openFiltersBtns.forEach(($btn) => {
        $btn.addEventListener("click", () => {
            if (window.innerWidth < 992) {
                lockBody();
                $catalogFilters.classList.add("catalog-filters--active");
            }
        });
    });

    const $closeFiltersBtns = document.querySelectorAll(".js-close-filters");
    $closeFiltersBtns.forEach(($btn) => {
        $btn.addEventListener("click", () => {
            unlockBody();
            $catalogFilters.classList.remove("catalog-filters--active");
        });
    });
}
