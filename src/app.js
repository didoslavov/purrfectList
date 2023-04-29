// DON'T FORGET TO CHANGE SEQURITY SETTINGS IN DATABASE LATER !!!
import page from '../../node_modules/page/page.mjs';
import { render } from './firebase.js';

render();

page(decorateContext);
page('/', homepage);
page.start();

const root = document.querySelector('main');
console.log(root);

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');
});

// TO DO - HIDE MENU WHEN CLICK ANYWARE ON THE DOCUMENT

function decorateContext(ctx) {
  ctx.render = (content) => render(content, root);
}
