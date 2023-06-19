let burger = document.querySelector('.burger');

let cancel = document.querySelector('.cancel');

let items = document.querySelector('.menu-items');

function menu() {
    let menu = document.querySelector('.menu');

    menu.classList.toggle('menu-display');

}

burger.addEventListener('click', menu);

cancel.addEventListener('click', menu);

items.addEventListener('click', menu);