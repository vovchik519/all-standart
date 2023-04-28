var swiperReview = new Swiper(".review__slider", {
    navigation: {
        nextEl: ".review-button-next",
        prevEl: ".review-button-prev",
    },
    pagination: {
        el: '.review-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    breakpoints: {
        769: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    },
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
    slidesPerView: 1,
    breakpoints: {
        769: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 4
        }
    },
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
    slidesPerView: 2,
    breakpoints: {
        420: {
            slidesPerView: 3
        },
        769: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 6
        }
    },
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
    document.body.classList.remove('body-lock-team');
};

// Add click event listener to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Add 'body-lock' class to body element
        document.body.classList.add('body-lock-team');

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
    let isExpanded = menuBtn.classList.contains('opened') ? 'true' : 'false';
    menuBtn.setAttribute('aria-expanded', isExpanded);
});

let closeMenu = document.querySelectorAll('.close-menu');

closeMenu.forEach(function (item) {
    item.addEventListener('click', function () {
        // Remove the active classes and body lock class
        menuBtn.classList.remove('opened');
        headerPopup.classList.remove('active');
        bodyOverflow.classList.remove('body-lock-menu');
        let isExpanded = menuBtn.classList.contains('opened') ? 'true' : 'false';
        menuBtn.setAttribute('aria-expanded', isExpanded);
    });
});

var toTop = document.querySelector(".to-top");
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

toTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

let button = document.querySelectorAll('.btn-popup');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
button.forEach(function (item) {
    item.addEventListener('click', function () {
        popup.classList.add('active');
        bodyOverflow.classList.add('body-lock');
    });
});

let summary = document.querySelectorAll('.price__summary');
summary.forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('active');
    });
});

popupClose.addEventListener('click', function () {
    popup.classList.remove('active');
    bodyOverflow.classList.remove('body-lock');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$("input[type='tel']").mask("+7-(999) 999-99-99");