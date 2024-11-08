export function getScrollbarWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
}

export function lockBody(lockBy = "") {
    const scrollbarWidthPX = `${getScrollbarWidth()}px`;

    document.body.classList.add("body--lock");
    document.body.style.paddingRight = scrollbarWidthPX;
    document.body.dataset.lockedBy = lockBy;

    const $absoluteElems = document.querySelectorAll(".header");
    $absoluteElems.forEach(($elem) => ($elem.style.paddingRight = scrollbarWidthPX));
}

export function unlockBody() {
    document.body.classList.remove("body--lock");
    document.body.style.paddingRight = "";
    document.body.removeAttribute("data-locked-by");

    const $absoluteElems = document.querySelectorAll(".header");
    $absoluteElems.forEach(($elem) => ($elem.style.paddingRight = ""));
}

export function isLockedBody() {
    return document.body.classList.contains("body--lock");
}

export function createElem(type, className, options) {
    const $elem = document.createElement(type);
    $elem.className = className;
    for (let key in options) {
        $elem[key] = options[key];
    }

    return $elem;
}

export function extractNumber(str) {
    str = str.replace(/\s+/g, "");
    str = str.replace(",", ".");
    const match = str.match(/^(\d+(\.\d+)?)$/);
    return match ? parseFloat(match[0]) : null;
}

export function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

export default {
    lockBody,
    unlockBody,
    isLockedBody,
    createElem,
    extractNumber,
    isMobileDevice,
};
