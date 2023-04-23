import { render } from './firebase.js';
import { database, ref, remove } from './firebase.js';
import { clearListOnLoad } from './helpers.js';

export function onDelete(e) {
  const liElement = e.target.parentElement.parentElement;
  const product = ref(database, `products/${liElement.id}`);

  remove(product);
  clearListOnLoad();
  render();
}
