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
  email.addEventListener('change', function(){
    const regexMail = /[A-Z]/;
    if (regexMail.test(email.value)){
      event.preventDefault();
      error.innerHTML = errorMsg;
      email.classList.add('error');
    } else if (!regexMail.test(email.value)) {
      error.classList.add('hide');
      email.classList.remove('error');
    }
  });  
})