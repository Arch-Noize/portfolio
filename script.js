// Burger / Navbar

const burger = document.querySelector('.burger');

const cancel = document.querySelector('.cancel');

const items = document.querySelectorAll('.menu-item');

function menu() {
  const menu = document.querySelector('.menu');

  menu.classList.toggle('menu-display');
}

console.log("There's me, a friend, and a frog somewhere. Find us :3");

burger.addEventListener('click', menu);

cancel.addEventListener('click', menu);

items.forEach((menuItem) => {
  menuItem.addEventListener('click', menu);
});

// Works

const story = [
  {
    id: 1,name: 'Page-To-Page Library',
    tech: ['Ruby on Rails', 'React/Redux', 'Rails API'],
    desc: "",
    image: './Images/rawayana.png',
    live: 'https://arch-noize.github.io/capstone-portfolio/about.html',
    source: 'https://github.com/Arch-Noize/capstone-portfolio',
  },
  {
    id: 2,
    name: 'D&D Monster Stats',
    tech: ['React/Redux', 'Bootstrap CSS', 'HTML', 'RESTful API'],
    desc: "",
    image: './Images/rawayana.png',
    live: 'https://arch-noize.github.io/capstone-portfolio/about.html',
    source: 'https://github.com/Arch-Noize/capstone-portfolio',
  },
  {
    id: 3,
    name: 'Rails Budget App',
    tech: ['Ruby', 'Ruby on Rails', 'Tailwind CSS', 'HTML'],
    desc: "",
    image: './Images/rawayana.png',
    live: 'https://arch-noize.github.io/capstone-portfolio/about.html',
    source: 'https://github.com/Arch-Noize/capstone-portfolio',
  },
  {
    id: 4,
    name: 'Pokédex',
    tech: ['React', 'CSS', 'JavaScript', 'HTML'],
    desc: "",
    image: './Images/rawayana.png',
    live: 'https://arch-noize.github.io/capstone-portfolio/about.html',
    source: 'https://github.com/Arch-Noize/capstone-portfolio',
  },
  {
    id: 5,
    name: 'Spacex Launches',
    tech: ['React/Redux', 'Bootstrap CSS', 'HTML'],
    desc: "Complete website made out of HTML, CSS, and JavaScript showcasing a local concert. Filled with styles, responsive design, and interactions.",
    image: './Images/rawayana.png',
    live: 'https://arch-noize.github.io/capstone-portfolio/about.html',
    source: 'https://github.com/Arch-Noize/capstone-portfolio',
  },
  {
    id: 5,
    name: 'Rawayana Concert Tour',
    tech: ['HTML', 'CSS', 'Javascript'],
    desc: "Complete website made out of HTML, CSS, and JavaScript showcasing a local concert. Filled with styles, responsive design, and interactions.",
    image: './Images/rawayana.png',
    live: 'https://arch-noize.github.io/capstone-portfolio/about.html',
    source: 'https://github.com/Arch-Noize/capstone-portfolio',
  }
];

const recent = document.querySelector('.works');

function stories() {
  let displayStory = story.map((item) => `<div class="recent">
              <div class="story">
                <div class="grid">
                  <div class="grid-item">
                      <h2>${item.name}</h2>
                  </div>
                  <div class="grid-item">
                    <ul>
                      ${item.tech.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                  </div>
                  <div class="grid-item">
                    <button class="btn modal-btn" id="${item.id}">
                      See Project
                    </button>
                  </div>
                </div>
              </div>
            </div>`);
  displayStory = displayStory.join('');
  recent.innerHTML = displayStory;
}

window.addEventListener('DOMContentLoaded', stories);

// Modal pop-up window

const projPop = document.querySelector('.project-pop');

function popup(item) {
  let displayWork = `<div class="modal-container">
              <div class="modal-item">
                <figure class="close-btn">
                  <img src="./Images/cancel.png" alt="">
                </figure>
                <div class="bg-img">
                </div>
              </div>

              <div class="modal-item">
                  <h2>${item.name}</h2>
              </div>

              <div class="modal-item">
                  <ul>
                    ${item.tech.map(tech => `<li>${tech}</li>`).join('')}
                  </ul>
              </div>

              <div class="modal-item">
                  <p>
                      ${item.desc}
                  </p>
              </div>

              <div class="modal-item buttons">
                  <button class="btn story-btn" id="live">
                      <a href="${item.live}"> See Live </a>
                  </button>

                  <button class="btn story-btn" id="source">
                      <a href="${item.source}"> See Source </a>
                  </button>
              </div>
          </div>`;
  projPop.innerHTML = displayWork;

  const cancel = document.querySelector('.close-btn');
  cancel.addEventListener('click', () => {
    projPop.innerHTML = '';
    projPop.classList.toggle('open-pop');
  });
}

function projectDisplay(id) {
  const modal = document.querySelector('.project-pop');
  const storyItem = story.find(item => item.id === id);
  if (storyItem) {
    popup(storyItem);
    modal.classList.toggle('open-pop');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.modal-btn');

  btn.forEach((b) => {
    b.addEventListener('click', () => projectDisplay(parseInt(b.id)));
  });
});

// Form Validation

const form = document.getElementById('connect');

const email = document.getElementById('mail');

const error = document.getElementById('error');

email.addEventListener('click', () => {
  email.classList.add('error');
});

form.addEventListener('submit', (event) => {
  const regexMail = /[A-Z]/;
  if (regexMail.test(email.value)) {
    event.preventDefault();
    email.classList.add('error-shadow');
    error.style.display = 'block';
  }
});

// Keep Data

const fullName = document.getElementById('name');
const comment = document.getElementById('comment');

function keep() {
  const input = {
    inputName: fullName.value,
    inputEmail: email.value,
    inputComment: comment.value,
  };
  localStorage.setItem('input', JSON.stringify(input));
}

let formObject = JSON.parse(localStorage.getItem('input'));

if (formObject === undefined || formObject === null) {
  formObject = {
    fullName: '',
    email: '',
    comment: '',
  };
  keep();
}

fullName.value = formObject.fullName;
fullName.addEventListener('change', (event) => {
  formObject.fullName = event.target.value;
  localStorage.setItem('input', JSON.stringify(formObject));
});

email.value = formObject.email;
email.addEventListener('change', (event) => {
  formObject.email = event.target.value;
  localStorage.setItem('input', JSON.stringify(formObject));
});

comment.value = formObject.comment;
comment.addEventListener('change', (event) => {
  formObject.comment = event.target.value;
  localStorage.setItem('input', JSON.stringify(formObject));
});
