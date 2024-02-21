// Burger / Navbar

const burger = document.querySelector('.burger');

const cancel = document.querySelector('.cancel');

const items = document.querySelectorAll('.menu-item');

function menu() {
  const menu = document.querySelector('.menu');

  menu.classList.toggle('menu-display');
}

burger.addEventListener('click', menu);

cancel.addEventListener('click', menu);

items.forEach((menuItem) => {
  menuItem.addEventListener('click', menu);
});

// Works

const story = [
  {
    id: 1,
    name: 'Page-To-Page',
    tech: ['Ruby on Rails', 'React/Redux', 'Rails API'],
    desc: 'This website was done collaboratively from the ground up. Using React/Redux for the frontend and our own Rails API for the backend. Please, look into my team as well!',
    image: './Images/portfolio/Library.png',
    live: 'https://page-to-page.onrender.com',
    source: 'https://github.com/leloufadel/Page-To-page-Library-Frontend',
  },
  {
    id: 2,
    name: 'D&D Monster Stats',
    tech: ['React/Redux', 'Bootstrap CSS', 'RESTful API'],
    desc: 'This project is a mobile, single page application that displays monsters from the popular TTRPG Dungeons and Dragons, 5th Edition. Using Open5eAPI (https://open5e.com/api-docs), React, React Bootstrap, and Redux.',
    image: './Images/portfolio/Monsters.png',
    live: 'https://dnd-5e-monsters.onrender.com/',
    source: 'https://github.com/Arch-Noize/react-capstone',
  },
  {
    id: 3,
    name: 'Rails Budget App',
    tech: ['Ruby', 'Ruby on Rails', 'Tailwind CSS'],
    desc: 'Built with Ruby on Rails, and with a mobile focused design, this project can help you organize your expenses a little and make sure your savings are intact!',
    image: './Images/portfolio/Budget.png',
    live: '',
    source: 'https://github.com/Arch-Noize/rails-budget',
  },
  {
    id: 4,
    name: 'Pokédex',
    tech: ['JavaScript', 'HTML', 'CSS'],
    desc: 'This project is a single-page webapp showing a bunch of cute Pokemons using PokeAPI, all with added Involvement interactions of adding likes, comments and reservations.',
    image: './Images/portfolio/Pokedex.png',
    live: '',
    source: 'https://github.com/Arch-Noize/javascript-capstone',
  },
  {
    id: 5,
    name: 'Spacex Launches',
    tech: ['React/Redux', 'Bootstrap CSS', 'HTML'],
    desc: "This project is a display of space rockets, missions and 'dragons'! All fetched from API.",
    image: './Images/portfolio/Space.png',
    live: '',
    source: 'https://github.com/Arch-Noize/react-group-project',
  },
  {
    id: 6,
    name: 'Rawayana Concert Tour',
    tech: ['HTML', 'CSS', 'Javascript'],
    desc: 'Complete website made out of HTML, CSS, and JavaScript showcasing a local concert. Filled with styles, responsive design, and interactions.',
    image: './Images/portfolio/Rawayana.png',
    live: 'https://arch-noize.github.io/capstone-portfolio/about.html',
    source: 'https://github.com/Arch-Noize/capstone-portfolio',
  },
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
                      ${item.tech.map((tech) => `<li>${tech}</li>`).join('')}
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
  const displayWork = `<div class="modal-container">
              <div class="modal-item">
                <figure class="close-btn">
                  <img src="./Images/cancel.png" alt="">
                </figure>
                <img src="${item.image}" class="bg-img">
              </div>

              <div class="modal-item">
                  <h2>${item.name}</h2>
              </div>

              <div class="modal-item">
                  <ul>
                    ${item.tech.map((tech) => `<li>${tech}</li>`).join('')}
                  </ul>
              </div>

              <div class="modal-item">
                  <p>
                      ${item.desc}
                  </p>
              </div>

              <div class="modal-item buttons">
                <a href="${item.live}" target="_blank" rel="noopener noreferrer" class="story-btn"> 
                  <button class="btn" id="live">
                    See Live
                  </button>
                </a>
                <a href="${item.source}" target="_blank" rel="noopener noreferrer" class="story-btn">
                  <button class="btn" id="source">
                    See Source 
                  </button>
                </a>
              </div>
          </div>`;
  projPop.innerHTML = displayWork;

  const cancel = document.querySelector('.close-btn');
  cancel.addEventListener('click', () => {
    projPop.innerHTML = '';
    projPop.classList.toggle('open-pop');
  });

  if (!item.live || item.live === '') {
    document.getElementById('live').classList.add('disabled');
  }
}

function projectDisplay(id) {
  const modal = document.querySelector('.project-pop');
  const storyItem = story.find((item) => item.id === id);
  if (storyItem) {
    popup(storyItem);
    modal.classList.toggle('open-pop');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.modal-btn');

  btn.forEach((b) => {
    b.addEventListener('click', () => projectDisplay(parseInt(b.id, 10)));
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
