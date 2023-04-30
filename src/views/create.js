import { createList } from '../api/data.js';
import { html } from '../lib.js';

const createTemplate = (onSubmit) => html` <div class="container">
  <form @submit=${onSubmit}>
    <input class="input-field" type="text" name="listName" placeholder="Add list name" />
    <button class="btn">Create</button>
  </form>
</div>`;

export function createPage(ctx) {
  ctx.render(createTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const listName = formData.get('listName');

    try {
      if (listName == '') {
        throw new Error('All fields are required!');
      }

      //TO DO: Server side error hendling

      await createList({ listName });
    } catch (error) {
      alert(error.message);
    }

    e.target.reset();
    ctx.page.redirect('/');
  }
}
