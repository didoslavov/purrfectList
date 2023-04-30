import { createProduct, deleteProduct, getProducts } from '../api/data.js';
import { html, until } from '../lib.js';
import { updateNavBar } from '../util.js';

const homeTemplate = (promise, onAddProduct) => html` <div class="container">
  <section class="sections">
    <img src="./public/cute-cat.png" alt="Cute Cat" />
    <form @submit=${onAddProduct}>
      <input type="text" name="product" class="input-field" placeholder="Add product" />
      <button class="btn">Add Product</button>
    </form>
    <ul id="product-list">
      ${until(promise, html`<li>Loading &hellip;</li>`)}
    </ul>
  </section>
</div>`;

const productTemplate = (product, onDelete) => html`<li @click=${onDelete} data-id=${product.objectId}>${product.productName}</li>`;

updateNavBar();

async function onDelete(e) {
  const choice = confirm('Are you sure you want to delete this product?');

  if (choice) {
    const id = e.target.dataset.id;
    const res = await deleteProduct(id);
    e.target.remove();
  }
}

export function homePage(ctx) {
  update();

  function update() {
    ctx.render(homeTemplate(loadProducts(), onAddProduct));
  }

  async function onAddProduct(e) {
    e.preventDefault();

    const product = new FormData(e.target).get('product');

    try {
      if (product == '') {
        throw new Error('Please add product!');
      }

      await createProduct({ productName: product });
      e.target.reset();
      update();
    } catch (error) {
      alert(error.message);
    }
  }
}

async function loadProducts() {
  //TO DO: Load items for current user
  const products = (await getProducts()).results;

  return products.map((p) => productTemplate(p, onDelete));
}
