const burger = document.querySelector('.burger');

const cancel = document.querySelector('.cancel');

const items = document.querySelectorAll('.menu-item');

// const modalBtn = document.querySelectorAll('.modal-btn');

// const closeBtn = document.querySelector('.close-btn');

function menu() {
  const menu = document.querySelector('.menu');

  menu.classList.toggle('menu-display');
}

function project(){
  const modal = document.querySelector('.modal-container');

  modal.classList.toggle('open-overlay');
}

function projectClose(){
  modal.classList.remove('open-overlay');
}

burger.addEventListener('click', menu);

cancel.addEventListener('click', menu);

// modalBtn.addEventListener('click', project);

// closeBtn.addEventListener('click', project);

// items.forEach((menuItem) => {
//   menuItem.addEventListener("click", menu);
// });

// modalBtn.forEach((btn) => {
//   btn.addEventListener('click', project);
// });

// Form Validation

const form = document.getElementById('connect');

const email = document.getElementById('mail');

const error = document.getElementById('error');

const errorMsg = "Accept's only lowercase. Try"+email.toLowerCase();

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

