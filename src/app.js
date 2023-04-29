// DON'T FORGET TO CHANGE SEQURITY SETTINGS IN DATABASE LATER !!!
import { page } from './lib.js';
import decorateContext from './middlewares/render.js';
import { homePage } from './views/home.js';

page(decorateContext);
page('/', homePage);

page.start();
