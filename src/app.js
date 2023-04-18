import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js';

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

function onAddProduct() {
  const input = inputElement.value;
  if (input != '') {
    push(productsInDB, input);
    const li = document.createElement('li');
    li.textContent = input;
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.addEventListener('click', onDelete);
    const div = document.createElement('div');
    div.appendChild(btn);
    div.id = 'del-btn';

    li.appendChild(div);
    ulElement.appendChild(li);
    inputElement.value = '';
  }
}

function onDelete(e) {
  const liElement = e.target.parentElement.parentElement;
  liElement.remove();
}
