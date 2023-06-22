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
    buttonPop: "modal-btn",
  }, 
  {
    id: 2,
    name: "Multi-Post Stories Gain+Glory",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    button: "See Project",
    buttonPop: "modal-btn",
  },
  {
    id: 3,
    name: "Multi-Post Stories Gain+Glory",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    button: "See Project",
    buttonPop: "modal-btn",
  }, 
  {
    id: 4,
    name: "Multi-Post Stories Gain+Glory",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    button: "See Project",
    buttonPop: "modal-btn",
  }, 
  {
    id: 5,
    name: "Multi-Post Stories Gain+Glory",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    button: "See Project",
    buttonPop: "modal-btn",
  }, 
  {
    id: 6,
    name: "Multi-Post Stories Gain+Glory",
    tech: ["Ruby on Rails","CSS","JavaScript","HTML"],
    button: "See Project",
    buttonPop: "modal-btn",
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
    imgLive: "./Images/live.png",
    imgSrc: "./Images/github.png",
    imgCancel: "./Images/cancel.png",
  }
];

function popup(){
  let displayWork = modalMenu.map(function(item){
  
    return `<div class="modal-container">
              <div class="modal-item">
                <div class="bg-img">
                  <figure class="close-btn">
                      <img src="${item.imgCancel}" alt="">
                  </figure>
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

              <div class="modal-item story-btn">
                  <button class="btn">
                      <a href="${item.live}"> See Live </a>
                      <img src="${item.imgLive}" alt="">
                  </button>

                  <button class="btn">
                      <a href="${item.source}"> See Source </a>
                      <img src="${item.imgSrc}" alt="" style="filter: brightness(90)">
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

  let cancel = document.querySelector(".close-btn");
    btn.forEach((b) => {
    b.addEventListener('click', projectDisplay);
  });

  cancel.addEventListener('click', projectDisplay);
});
