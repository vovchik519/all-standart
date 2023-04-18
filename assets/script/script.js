var swiperImage = new Swiper(".review__slider", {
    navigation: {
        nextEl: ".review-button-next",
        prevEl: ".review-button-prev",
        el: '.review-pagination',
        clickable: true,
    },
    spaceBetween: 30,
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
var swiperImage = new Swiper(".letter__slider", {
    navigation: {
        nextEl: ".letter-button-next",
        prevEl: ".letter-button-prev",
        el: '.letter-pagination',
        clickable: true,
    },
    spaceBetween: 30,
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});