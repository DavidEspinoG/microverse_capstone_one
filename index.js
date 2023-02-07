import gridGenerator from './gridGenerator.js';
// Burger menu
const button = document.getElementById('burger-button');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('body');

button.addEventListener('click', (event) => {
  event.stopPropagation();
  mobileMenu.classList.remove('display-none');
});

for (let i = 0; i < body.children.length; i += 1) {
  body.children[i].addEventListener('click', (event) => {
    event.stopPropagation();
    mobileMenu.classList.add('display-none');
  });
}

// Speakers black and white grid

const grids = document.querySelectorAll('.black-grid');

for (let i = 0; i < grids.length; i += 1) {
  gridGenerator(12, grids[i]);
}