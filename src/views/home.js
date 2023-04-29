import { createProduct, getProducts } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const homeTemplate = (promise, onAddProduct) => html` <div class="container">
  <section id="homePage" class="sections">
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

const productTemplate = (product) => html`<li>${product.productName}</li>`;

export function homePage(ctx) {
  ctx.render(homeTemplate(loadProducts(), onAddProduct));

  async function onAddProduct(e) {
    e.preventDefault();

    const product = new FormData(e.target).get('product');

    try {
      if (product == '') {
        throw new Error('Please add product!');
      }

      const res = await createProduct({ productName: product });
      ctx.page.redirect('/');
    } catch (error) {
      alert(error.message);
    }
  }
}

async function loadProducts() {
  const userData = getUserData();
  const products = (await getProducts()).results;

  return products.map(productTemplate);
}
