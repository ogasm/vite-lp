// menu.js
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  nav.classList.toggle('active');
});