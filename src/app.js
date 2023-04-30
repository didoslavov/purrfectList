// DON'T FORGET TO CHANGE SEQURITY SETTINGS IN DATABASE LATER !!!
import { logout } from './api/data.js';
import { page } from './lib.js';
import decorateContext from './middlewares/render.js';
import { updateNavBar } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { regiisterPage } from './views/register.js';

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', regiisterPage);

page.start();

document.getElementById('logoutBtn').addEventListener('click', () => {
  logout();
  page.redirect('/');
  updateNavBar();
});
