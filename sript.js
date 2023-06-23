// Burger / Navbar 

const burger = document.querySelector(".burger");

const cancel = document.querySelector(".cancel");

const items = document.querySelectorAll(".menu-item");

function menu() {
  const menu = document.querySelector(".menu");

  menu.classList.toggle("menu-display");
}

burger.addEventListener("click", menu);

cancel.addEventListener("click", menu);

items.forEach((menuItem) => {
  menuItem.addEventListener("click", menu);
});

// Works

const story = [
  {
    id: 1,
    name: "Multi-Post Stories Gain+Glory",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    button: "See Project",
  }, 
  {
    id: 2,
    name: "Multi-Post Stories Gain+Glory",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    button: "See Project",
  },
  {
    id: 3,
    name: "Multi-Post Stories Gain+Glory",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    button: "See Project",
  }, 
  {
    id: 4,
    name: "Multi-Post Stories Gain+Glory",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    button: "See Project",
  }, 
  {
    id: 5,
    name: "Multi-Post Stories Gain+Glory",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    button: "See Project",
  }, 
  {
    id: 6,
    name: "Multi-Post Stories Gain+Glory",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    button: "See Project",
  }
];

const recent = document.querySelector(".works");

function stories(){
  let displayStory = story.map(function(item){
    return `<div class="recent">
              <div class="story">
                <div class="grid">
                  <div class="grid-item">
                      <h2>${item.name}</h2>
                  </div>
                  <div class="grid-item">
                    <ul>
                      <li> ${item.tech[0]}</li>
                      <li> ${item.tech[1]} </li>
                      <li> ${item.tech[2]} </li>
                      <li> ${item.tech[3]} </li>
                    </ul>
                  </div>
                  <div class="grid-item">
                    <button class="btn modal-btn">
                      ${item.button}
                    </button>
                  </div>
                </div>
              </div>
            </div>`;
  });
  displayStory = displayStory.join("");
  recent.innerHTML = displayStory;
}

window.addEventListener("DOMContentLoaded", stories);

// Modal pop-up window

const projPop = document.querySelector(".project-pop")

const modalMenu = [
  {
    id: 1,
    name: "Keeping track of hundreds of components",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "./Images/project.png",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    live: "https://arch-noize.github.io/portfolio-microverse/",
    source: "https://github.com/Arch-Noize/portfolio-microverse",
    imgCancel: "./Images/cancel.png",
  }
];

function popup(){
  let displayWork = modalMenu.map(function(item){
  
    return `<div class="modal-container">
              <div class="modal-item">
                <figure class="close-btn">
                  <img src="${item.imgCancel}" alt="">
                </figure>
                <div class="bg-img">
                </div>
              </div>

              <div class="modal-item">
                  <h2>${item.name}</h2>
              </div>

              <div class="modal-item">
                  <ul>
                      <li> ${item.tech[0]}</li>
                      <li> ${item.tech[1]} </li>
                      <li> ${item.tech[2]} </li>
                      <li> ${item.tech[3]} </li>
                  </ul>
              </div>

              <div class="modal-item">
                  <p>
                      ${item.desc}
                      <br><br><br>
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
  });
  displayWork = displayWork.join("");
  projPop.innerHTML = displayWork;
}

function projectDisplay(){
  const modal = document.querySelector(".project-pop");

  modal.classList.toggle("open-pop");
}

window.addEventListener("DOMContentLoaded", popup);

window.addEventListener("DOMContentLoaded", function(){
  let btn = document.querySelectorAll(".modal-btn");

  btn.forEach((b) => {
    b.addEventListener('click', projectDisplay);
  });

  let cancel = document.querySelector(".close-btn");

  cancel.addEventListener('click', projectDisplay);
});

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

// Keep Data

const fullname = document.getElementById('name');
const comment = document.getElementById('comment');

function keep() {
  const input = {
    inputName: fullname.value,
    inputEmail: email.value,
    inputComment: comment.value,
  };
  localStorage.setItem('input', JSON.stringify(data));
}

let formObject = JSON.parse(localStorage.getItem('input'));
if (!formObject) {
  formObject = {
    fullname: '',
    email: '',
    comment: '',
  };
  keep();
}

fullname.value = formObject.fullname;
fullname.addEventListener('input', (e) => {
  formObject.fullname = e.target.value;
  localStorage.setItem('input', JSON.stringify(formObject));
});

email.value = formObject.email;
email.addEventListener('input', (e) => {
  formObject.email = e.target.value;
  localStorage.setItem('input', JSON.stringify(formObject));
});

comment.value = formObject.comment;
comment.addEventListener('input', (e) => {
  formObject.comment = e.target.value;
  localStorage.setItem('input', JSON.stringify(formObject));
});