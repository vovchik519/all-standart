var swiperReview = new Swiper(".review__slider", {
    navigation: {
        nextEl: ".review-button-next",
        prevEl: ".review-button-prev",
    },
    pagination: {
        el: '.review-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
var swiperLetter = new Swiper(".letter__slider", {
    navigation: {
        nextEl: ".letter-button-next",
        prevEl: ".letter-button-prev",
    },
    pagination: {
        el: '.letter-pagination',
        clickable: true,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
var swiperTrust = new Swiper(".trust__slider", {
    navigation: {
        nextEl: ".trust-button-next",
        prevEl: ".trust-button-prev",
    },
    pagination: {
        el: '.trust-pagination',
        clickable: true,
    },
    slidesPerView: 6,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});