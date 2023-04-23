import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js';
import { ulElement } from './add.js';
import { createListElement } from './helpers.js';

const appSettings = {
  databaseURL: 'https://listme-5291d-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const productsInDB = ref(database, 'products');

function render() {
  onValue(productsInDB, loadProducts);
}

function loadProducts(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();

    ulElement.replaceChildren(...Object.entries(data).map(createListElement));
  } else {
    ulElement.replaceChildren('');
  }
}

export { ref, push, onValue, remove, productsInDB, database, render };
