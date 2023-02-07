const button = document.getElementById('burger-button');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('body');

button.addEventListener('click', (event) => {
  event.stopPropagation();
  mobileMenu.classList.remove('display-none');
  console.log('works');
})

for(let i = 0; i < body.children.length; i += 1) {
  body.children[i].addEventListener('click', (event) => {
    event.stopPropagation();
    mobileMenu.classList.add('display-none');
  })
}