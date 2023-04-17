const addProductBtn = document.getElementById('add-btn');
const ulElement = document.getElementById('product-list');
const inputElement = document.getElementById('input-field');
addProductBtn.addEventListener('click', onAddProduct);

function onAddProduct() {
  const input = inputElement.value;
  const li = document.createElement('li');
  li.textContent = input;

  ulElement.appendChild(li);
  inputElement.value = '';
}
