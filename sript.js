const burger = document.querySelector('.burger');

const cancel = document.querySelector('.cancel');

const items = document.querySelector('.menu-items');

function menu() {
  const menu = document.querySelector('.menu');

  menu.classList.toggle('menu-display');
}

burger.addEventListener('click', menu);

cancel.addEventListener('click', menu);

items.addEventListener('click', menu);