const burgerOpenButton = document.querySelector('.header__button-menu');
const burgerCloseButton = document.querySelector('.menu__close-button');
const burgerAccountButton = document.querySelector('.menu__link-account');
const menuBurger = document.querySelector('.menu__burger');

function closeBurger() {
    menuBurger.classList.remove('menu__burger_active');
}

function openBurger() {
    menuBurger.classList.add('menu__burger_active');
    burgerCloseButton.addEventListener('click', closeBurger);
    burgerAccountButton.addEventListener('click', closeBurger);
    // menuBurger.addEventListener('click', (event) => {
    //     console.log(event.target.classList.contains('menu__burger'))

    //     if (!(event.target.classList.contains('menu__burger') || event.target.classList.contains('menu__link'))) {
    //         closeBurger();
    //     }
    // });
}

burgerOpenButton.addEventListener('click', openBurger);







console.log("Ваша оценка - 85 баллов  \n Вёрстка соответствует макету. Ширина экрана 390px +48 \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n На ширине экрана 390рх и меньше реализовано адаптивное меню +22");

