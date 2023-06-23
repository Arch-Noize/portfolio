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

email.addEventListener("click", function () {
  if (email === document.activeElement) error.style.display = "none";
});

form.addEventListener("submit", (event) => {
  const regexMail = /[A-Z]/;
  if (regexMail.test(email.value)) {
    event.preventDefault();
    email.classList.add('error-shadow');
    error.style.display = "block";
  }
});
