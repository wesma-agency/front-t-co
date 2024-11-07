const $header = document.querySelector(".header");
if ($header) {
    scrollHandler();
    window.addEventListener("scroll", () => scrollHandler());
}

function scrollHandler() {
    let offset = getScrollOffset();

    if (window.scrollY >= offset && !$header.classList.contains("header--scroll")) {
        $header.classList.add("header--scroll");
    } else if (window.scrollY < offset && $header.classList.contains("header--scroll")) {
        $header.classList.remove("header--scroll");
    }
}

export function getScrollOffset() {
    if (window.innerWidth > 991) {
        return 145;
    } else if (window.innerWidth > 767) {
        return 65;
    }

    return 51;
}

export default {
    getScrollOffset,
};
