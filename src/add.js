import { onDelete } from './delete.js';
import { onValue, productsInDB, push } from './firebase.js';
import { clearInputField, clearListOnLoad, isEmptyString } from './helpers.js';

const addProductBtn = document.getElementById('add-btn');
const ulElement = document.getElementById('product-list');
const inputElement = document.getElementById('input-field');
addProductBtn.addEventListener('click', onAddProduct);

const inputPattern = /^[A-Za-zА-Яа-я0-9 ]*$/;

function render() {
  onValue(productsInDB, loadProducts);
}

function onAddProduct() {
  const input = inputElement.value.trim();

  if (!inputPattern.test(input)) {
    return alert('Product must contain only letters and numbers !');
  }
  if (isEmptyString(input)) {
    return alert('Product must contain at least one letter or number');
  }

  push(productsInDB, input);

  clearListOnLoad();
  render();
  clearInputField();
}

function loadProducts(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();

    ulElement.replaceChildren(...Object.entries(data).map(createListElement));
  } else {
    ulElement.replaceChildren('');
  }
}

function createListElement(data) {
  const [id, product] = data;

  const li = document.createElement('li');
  const btn = document.createElement('button');
  const div = document.createElement('div');

  li.textContent = product;
  li.id = id;
  btn.textContent = 'Delete';
  btn.addEventListener('click', onDelete);
  div.appendChild(btn);
  div.id = 'del-btn';

  li.appendChild(div);

  return li;
}

export { render, loadProducts, inputElement, ulElement };
