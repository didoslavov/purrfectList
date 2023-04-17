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
    btn.id = 'del-btn';
    btn.addEventListener('click', onDelete);

    li.appendChild(btn);
    ulElement.appendChild(li);
    inputElement.value = '';
  }
}

function onDelete(e) {
  const liElement = e.target.parentElement;
  liElement.remove();
}
