import { inputElement, ulElement } from './add.js';

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

export { clearInputField, clearListOnLoad, isEmptyString };
