// DON'T FORGET TO CHANGE SEQURITY SETTINGS IN DATABASE LATER !!!
import { page } from './lib.js';
import decorateContext from './middlewares/render.js';

page(decorateContext);
page('/', () => console.log('Home Page'));
page.start();
