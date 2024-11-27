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

const counter = document.querySelectorAll('.grade__item-percent');
const lines = document.querySelectorAll('.grade__item-scale span');

counter.forEach(function (item, i) {
    lines[i].style.width = item.innerHTML;
})





