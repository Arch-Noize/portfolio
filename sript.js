const burger = document.querySelector('.burger');

const cancel = document.querySelector('.cancel');

function menu() {
  const menu = document.querySelector('.menu');

  menu.classList.toggle('menu-display');
}

burger.addEventListener('click', menu);

cancel.addEventListener('click', menu);

// Form Validation

const form = document.getElementById('connect');

const email = document.getElementById('mail');

const error = document.getElementById('error');

const errorMsg = 'Please write your email in lowercase';

form.addEventListener('submit', (event) => {
  const regexMail = /[A-Z]/;
  if (regexMail.test(email.value)){
    error.innerHTML = errorMsg;
    email.classList.add('error');
    event.preventDefault();
  } if (!error.classList.classname === 'hide') {
    error.classList.add('hide');
  }
})