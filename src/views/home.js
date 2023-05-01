import { getUserLists, createList } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData, updateNavBar } from '../util.js';

const homeTemplate = (promise, onSubmit) => html` <div class="container">
  <img src="../public/cute-cat.png" alt="cute-cat" />
  <form @submit=${onSubmit}>
    <input class="input-field" type="text" name="listName" placeholder="Add list name" />
    <button class="btn">Create</button>
  </form>
  <ul id="product-list">
    ${until(promise, html`<li>Loading &hellip;</li>`)}
  </ul>
</div>`;

const listsTemplate = (list, onDelete) => html`<li @click=${onDelete} class="list" data-id=${list.objectId}>${list.listName}</li>`;

updateNavBar();

export function homePage(ctx) {
  update();

  function update() {
    ctx.render(homeTemplate(loadLists(ctx), onSubmit));
  }

  async function onSubmit(e) {
    e.preventDefault();

    const listName = new FormData(e.target).get('listName');

    try {
      if (listName == '') {
        throw new Error('All fields are required!');
      }

      await createList({ listName });

      e.target.reset();
      ctx.page.redirect('/my-lists');
    } catch (error) {
      alert(error.message);
    }
  }
}

async function loadLists(ctx) {
  const userData = getUserData();

  if (userData) {
    const ownerId = userData.id;
    const lists = (await getUserLists()).results;

    return lists.filter((l) => l.owner.objectId == ownerId).map((p) => listsTemplate(p, onClick));
  } else {
    ctx.page.redirect('/login');
  }

  async function onClick(id) {
    ctx.page.redirect('/my-lists/' + id);
  }
}
