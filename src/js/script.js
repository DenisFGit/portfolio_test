const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const closeElem = document.querySelector('.menu__close');

// burger.addEventListener('click', function () {
//     menu.classList.toggle('menu_active');
// })

burger.addEventListener('click', function () {
    menu.classList.add('menu_active');
})

closeElem.addEventListener('click', function () {
    menu.classList.remove('menu_active');
})





