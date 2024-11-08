import { getScrollOffset } from "./header";
import { isMobileDevice, lockBody, unlockBody } from "./utils";
import { updateActiveItem as updateActiveItem } from "./catalog-menu";

const $mainMenu = document.querySelector(".main-menu");
const $btns = document.querySelectorAll(".js-main-menu-btn");

if ($mainMenu) {
    $btns.forEach(($btn) => {
        $btn.addEventListener("click", () => toggleMenu());
    });

    const $catalogBtn = $mainMenu.querySelector(".main-menu__catalog-btn");
    const $catalogMenu = $mainMenu.querySelector(".main-menu__catalog");
    $catalogBtn.addEventListener("click", () => {
        if ($catalogMenu.classList.contains("main-menu__catalog--active")) {
            $catalogMenu.classList.remove("main-menu__catalog--active");
            $catalogBtn.classList.remove("main-menu__catalog-btn--active");

            const $activeItems = $catalogMenu.querySelectorAll(".submenu__item--active");
            $activeItems.forEach(($item) => $item.classList.remove("submenu__item--active"));
        } else {
            $catalogMenu.classList.add("main-menu__catalog--active");
            $catalogBtn.classList.add("main-menu__catalog-btn--active");
        }
    });

    const $catalogLinks = $catalogMenu.querySelectorAll(".submenu__link");
    $catalogLinks.forEach(($link) => {
        $link.addEventListener("click", (e) => {
            const itemHasSubmenu = $link.closest(".submenu__item").querySelector(".submenu__sub");
            if (itemHasSubmenu && isMobileDevice()) {
                updateActiveItem($link);
                e.preventDefault();
            }
        });
    });
}

function toggleMenu() {
    if ($mainMenu.classList.contains("main-menu--active")) {
        $mainMenu.classList.remove("main-menu--active");
        $btns.forEach(($btn) => $btn.classList.remove("js-main-menu-btn-active"));

        unlockBody();
    } else {
        $mainMenu.classList.add("main-menu--active");
        $btns.forEach(($btn) => $btn.classList.add("js-main-menu-btn-active"));

        if (window.innerWidth <= 767) lockBody();

        if (window.scrollY < getScrollOffset()) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }
}
