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

var anchors = document.querySelectorAll('a[href^="#"]');
for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}


$("input[type='tel']").mask("+7-(999) 999-99-99");

// выбираем все элементы, которым хотим добавить класс "active"
const elements = document.querySelectorAll('.decor-item');

// функция, которая проверяет, виден ли элемент на экране
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// функция, которая добавляет класс "active" к элементу, если он виден на экране
function addActiveClass() {
    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (isElementInViewport(el)) {
            el.classList.add('active');
        }
    }
}

// добавляем класс "active" к элементам, которые уже видны на экране
addActiveClass();

// обработчик события прокрутки страницы, который вызывает функцию addActiveClass() при каждом скролле
window.addEventListener('scroll', addActiveClass);

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2
});

const blocks = document.querySelectorAll(".anim-visible");
blocks.forEach(block => {
    observer.observe(block);
});