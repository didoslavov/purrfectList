import { inputElement, ulElement } from './add.js';
import { onDelete } from './delete.js';

function clearInputField() {
  inputElement.value = '';
}

function clearListOnLoad() {
  ulElement.innerHTML = '';
}

function isEmptyString(input) {
  if (input.length == 0) {
    return true;
  }

  return false;
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

export { clearInputField, clearListOnLoad, isEmptyString, createListElement };
