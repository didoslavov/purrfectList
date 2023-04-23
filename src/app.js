// DON'T FORGET TO CHANGE SEQURITY SETTINGS IN DATABASE LATER !!!

import { render } from './firebase.js';

render();

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});
