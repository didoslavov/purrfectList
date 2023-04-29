import { html, until } from '../lib.js';

const homeTemplate = () => html` <section id="homePage" class="sections">
  <img src="./public/cute-cat.png" alt="Cute Cat" />
  <input type="text" name="product" id="input-field" placeholder="Продукт" />
  <button id="add-btn">Add Product</button>
  <ul id="product-list"></ul>
</section>`;

const productTemplate = (product) => html`<li>Test product</li>`;

export function homePage(ctx) {
  ctx.render(homeTemplate());
}
