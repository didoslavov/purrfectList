import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js';
import { loadProducts } from './add.js';

const appSettings = {
  databaseURL: 'https://listme-5291d-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const productsInDB = ref(database, 'products');

function loadData() {
  onValue(productsInDB, loadProducts);
}

export { ref, push, onValue, remove, loadData, productsInDB, database };
