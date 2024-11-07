const $catalogMenu = document.querySelector(".catalog-menu");
if ($catalogMenu) {
    const $links = $catalogMenu.querySelectorAll(".submenu__link");
    $links.forEach(($link) => {
        $link.addEventListener("mouseenter", () => {
            if (window.innerWidth <= 991) {
                return;
            }

            updateActiveItem($link);
        });
    });
}

export function updateActiveItem($link) {
    const $oldActiveItems = $link.closest(".submenu__list").querySelectorAll(".submenu__item--active");
    $oldActiveItems.forEach(($item) => $item.classList.remove("submenu__item--active"));

    const $item = $link.closest(".submenu__item");
    $item.classList.add("submenu__item--active");
}

export default {
    updateActiveItem,
};
