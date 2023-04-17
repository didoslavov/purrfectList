const addProductBtn = document.getElementById('add-btn');
const ulElement = document.getElementById('product-list');
const inputElement = document.getElementById('input-field');
addProductBtn.addEventListener('click', onAddProduct);

function onAddProduct() {
  const input = inputElement.value;
  if (input != '') {
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
