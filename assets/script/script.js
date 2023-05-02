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

// Получаем все кнопки с классом "team__popup-btn"
const popupButtons = document.querySelectorAll('.team__popup-btn');

// Обрабатываем клик на каждой кнопке
popupButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Находим контейнер с классом "team__item" и получаем из него необходимые данные
        const teamItem = button.closest('.team__item');
        const name = teamItem.querySelector('.team__item-name').dataset.name;
        const jobTitle = teamItem.querySelector('.team__item-jobtitle').dataset.jobtitle;
        const experience = teamItem.querySelector('.team__item-experience').dataset.experience;
        const text = teamItem.querySelector('.team__item-text').dataset.text;

        // Находим блок с классом "team__popup" и заполняем его данными
        const popup = document.querySelector('.team__popup');
        popup.querySelector('h2').textContent = name;
        popup.querySelector('p').innerHTML = `${jobTitle}, ${experience}. <br><br> ${text}`;

        // Показываем блок с классом "team__popup"
        popup.classList.add('active');
        bodyOverflow.classList.add('body-lock-team');
    });
});

// Обрабатываем клик на кнопке закрытия
const popupCloseButton = document.querySelector('.team__popup-close');
popupCloseButton.addEventListener('click', () => {
    const popup = document.querySelector('.team__popup');
    popup.classList.remove('active');
    bodyOverflow.classList.remove('body-lock-team');
});