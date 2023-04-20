import { inputElement, ulElement } from './add.js';

function clearInputField() {
  inputElement.value = '';
}

function clearListOnLoad() {
  ulElement.innerHTML = '';
}

function isEmptyString(input) {
  if (input == '') {
    return true;
  }

  return false;
}

export { clearInputField, clearListOnLoad, isEmptyString };
