import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js';

// DON'T FORGET TO CHANGE SEQURITY SETTINGS IN DATABASE LATER !!!

const appSettings = {
  databaseURL: 'https://listme-5291d-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const productsInDB = ref(database, 'products');

const addProductBtn = document.getElementById('add-btn');
const ulElement = document.getElementById('product-list');
const inputElement = document.getElementById('input-field');
addProductBtn.addEventListener('click', onAddProduct);

onValue(productsInDB, loadProducts);

function onAddProduct() {
  const input = inputElement.value;

  if (!isEmptyString(input)) {
    push(productsInDB, input);

    clearListOnLoad();
    onValue(productsInDB, loadProducts);

    clearInputField();
  }
}

function loadProducts(snapshot) {
  const data = snapshot.val();

  ulElement.append(...Object.entries(data).map(createListElement));
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

function onDelete(e) {
  const liElement = e.target.parentElement.parentElement;
  liElement.remove();
}

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
