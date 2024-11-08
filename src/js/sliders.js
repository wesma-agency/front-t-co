import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

Swiper.use([Navigation, Pagination, Autoplay]);

const $bannerSlider = document.querySelector(".banner-slider");
if ($bannerSlider) {
    const $sliderMain = $bannerSlider.querySelector(".banner-slider__main");
    const $prev = $bannerSlider.querySelector(".banner-slider__prev");
    const $next = $bannerSlider.querySelector(".banner-slider__next");
    const $pagination = $bannerSlider.querySelector(".banner-slider__pagination");

    new Swiper($sliderMain, {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: $prev,
            nextEl: $next,
        },
        pagination: {
            el: $pagination,
            clickable: true,
        },
    });
}

const $productsSliders = document.querySelectorAll(".products-slider");
$productsSliders.forEach(($productsSlider) => {
    const $sliderMain = $productsSlider.querySelector(".products-slider__main");
    const $prevBtns = $productsSlider.querySelectorAll(".products-slider__prev");
    const $nextBtns = $productsSlider.querySelectorAll(".products-slider__next");

    new Swiper($sliderMain, {
        slidesPerView: 2,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: Array.from($prevBtns),
            nextEl: Array.from($nextBtns),
        },
        breakpoints: {
            1400: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1140: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            860: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });
});

const $categoriesSliders = document.querySelectorAll(".categories-slider");
$categoriesSliders.forEach(($categoriesSlider) => {
    const $sliderMain = $categoriesSlider.querySelector(".categories-slider__main");
    const $prev = $categoriesSlider.querySelector(".categories-slider__prev");
    const $next = $categoriesSlider.querySelector(".categories-slider__next");

    new Swiper($sliderMain, {
        slidesPerView: 1.22,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        navigation: {
            prevEl: $prev,
            nextEl: $next,
        },
        breakpoints: {
            1281: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            641: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
    });
});

const $categoriesSlidersSm = document.querySelectorAll(".categories-slider-sm");
$categoriesSlidersSm.forEach(($categoriesSlider) => {
    const $sliderMain = $categoriesSlider.querySelector(".categories-slider-sm__main");
    const $prev = $categoriesSlider.querySelector(".categories-slider-sm__prev");
    const $next = $categoriesSlider.querySelector(".categories-slider-sm__next");

    new Swiper($sliderMain, {
        slidesPerView: 1.45,
        spaceBetween: 10,
        speed: 500,
        navigation: {
            prevEl: $prev,
            nextEl: $next,
        },
        breakpoints: {
            1281: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1180: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            860: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            641: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
    });
});

const $brandsSliders = document.querySelectorAll(".brands-slider");
$brandsSliders.forEach(($brandsSlider) => {
    const $sliderMain = $brandsSlider.querySelector(".brands-slider__main");
    const $prev = $brandsSlider.querySelector(".brands-slider__prev");
    const $next = $brandsSlider.querySelector(".brands-slider__next");

    new Swiper($sliderMain, {
        slidesPerView: "auto",
        spaceBetween: 0,
        speed: 500,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        navigation: {
            prevEl: $prev,
            nextEl: $next,
        },
        breakpoints: {
            1400: {
                slidesPerView: 6,
                spaceBetween: 20,
                allowTouchMove: true,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 20,
                allowTouchMove: true,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
                allowTouchMove: true,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
                allowTouchMove: true,
            },
            641: {
                slidesPerView: 3,
                spaceBetween: 10,
                allowTouchMove: true,
            },
        },
    });
});

const $categoriesItemsSlider = document.querySelectorAll(".categories-items-slider");
$categoriesItemsSlider.forEach(($categoriesItemsSlider) => {
    const $sliderMain = $categoriesItemsSlider.querySelector(".categories-items-slider__main");
    const $prev = $categoriesItemsSlider.querySelector(".categories-items-slider__prev");
    const $next = $categoriesItemsSlider.querySelector(".categories-items-slider__next");

    const desktopSlides = +$sliderMain.dataset.slidesDesktop || 3;

    new Swiper($sliderMain, {
        slidesPerView: 2.2,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        navigation: {
            prevEl: $prev,
            nextEl: $next,
        },
        breakpoints: {
            1180: {
                slidesPerView: desktopSlides,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });
});
