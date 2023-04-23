import { productsInDB, push, render } from './firebase.js';
import { clearInputField, clearListOnLoad, isEmptyString } from './helpers.js';

const addProductBtn = document.getElementById('add-btn');
const ulElement = document.getElementById('product-list');
const inputElement = document.getElementById('input-field');
addProductBtn.addEventListener('click', onAddProduct);

const inputPattern = /^[A-Za-zА-Яа-я0-9 ]*$/;

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
  inputElement.focus();
}

export { inputElement, ulElement };
