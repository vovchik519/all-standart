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

const buttons = document.querySelectorAll('.team__popup-btn');
const closeButtons = document.querySelectorAll('.team__popup-close');

// Function to remove 'active' class from all team__popup elements
const removeActiveClass = () => {
    const popups = document.querySelectorAll('.team__popup');
    popups.forEach(popup => {
        popup.classList.remove('active');
    });
};

// Function to remove 'body-lock' class from body element
const removeBodyLockClass = () => {
    document.body.classList.remove('body-lock');
};

// Add click event listener to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Add 'body-lock' class to body element
        document.body.classList.add('body-lock');

        // Remove 'active' class from all team__popup elements
        removeActiveClass();

        // Add 'active' class to the corresponding team__popup element
        const popup = document.querySelectorAll('.team__popup')[index];
        popup.classList.add('active');
    });
});

// Add click event listener to each close button
closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        // Remove 'active' class from all team__popup elements
        removeActiveClass();

        // Remove 'body-lock' class from body element
        removeBodyLockClass();
    });
});

let bodyOverflow = document.querySelector('body');
let menuBtn = document.querySelector('.menu__burger');
let headerPopup = document.querySelector('.header__popup');
let bodyLockMenu = document.querySelector('.body-lock-menu');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('opened');
    headerPopup.classList.toggle('active');
    bodyOverflow.classList.toggle('body-lock-menu');
    let isExpanded = menuBtn.classList.contains('opened');
    menuBtn.setAttribute('aria-expanded', isExpanded);
});

let closeMenu = document.querySelectorAll('.close-menu');

closeMenu.forEach(function (item) {
    item.addEventListener('click', function () {
        // Remove the active classes and body lock class
        menuBtn.classList.remove('opened');
        headerPopup.classList.remove('active');
        bodyLockMenu.classList.remove('lock');
        let isExpanded = menuBtn.classList.contains('opened');
        menuBtn.setAttribute('aria-expanded', isExpanded);
    });
});