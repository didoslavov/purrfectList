import { getUserLists } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const listsTempalte = (promise) => html` <div class="container">
  <img src="../public/navbar-cute-cat.png" />
  <ul id="product-list">
    ${until(promise, html`<li>Loading &hellip;</li>`)}
  </ul>
</div>`;

const listTemplate = (list, onClick) =>
  html`<li @click=${() => onClick(list.objectId)} class="list" data-owner=${list.owner.objectId} data-id=${list.objectId}>${list.listName}</li>`;

export function listsPage(ctx) {
  ctx.render(listsTempalte(loadLists()));

  async function loadLists() {
    const userData = getUserData();
    const ownerId = userData.id;

    const lists = (await getUserLists()).results;

    return lists.filter((l) => l.owner.objectId == ownerId).map((p) => listTemplate(p, onClick));

    async function onClick(id) {
      ctx.page.redirect('/my-lists/' + id);
    }
  }
}
