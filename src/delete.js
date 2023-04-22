import { loadProducts, render } from './add.js';
import { database, onValue, productsInDB, ref, remove } from './firebase.js';
import { clearListOnLoad } from './helpers.js';

onValue(productsInDB, loadProducts);

export function onDelete(e) {
  const liElement = e.target.parentElement.parentElement;
  const product = ref(database, `products/${liElement.id}`);

  remove(product);
  clearListOnLoad();
  render();
}
