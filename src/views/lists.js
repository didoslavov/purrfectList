import { getUserLists } from '../api/data.js';
import { html, until } from '../lib.js';

const listsTempalte = (promise) => html` <div class="container">
  <ul id="product-list">
    ${until(promise, html`<li>Loading &hellip;</li>`)}
  </ul>
</div>`;

const listTemplate = (list, onClick) => html`<li @click=${onClick} data-id=${list.objectId}>${list.listName}</li>`;

export function listsPage(ctx) {
  ctx.render(listsTempalte(loadLists()));
}

async function loadLists() {
  //TO DO: Load items for current user
  const lists = (await getUserLists()).results;
  return lists.map((p) => listTemplate(p, onClick));
}

async function onClick(id) {
  console.log(id);
}
