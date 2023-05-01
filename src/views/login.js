import { login } from '../api/data.js';
import { html } from '../lib.js';
import { updateNavBar } from '../util.js';

const loginTemplate = (onSubmit) => html` <div class="container">
  <form @submit=${onSubmit}>
    <input class="input-field" type="text" name="email" placeholder="Username" />
    <input class="input-field" type="password" name="password" placeholder="Password" />
    <button class="btn">Login</button>
  </form>
</div>`;

export function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      if (email == '' || password == '') {
        throw new Error('All fields are required!');
      }

      //TO DO: Server side error hendling

      await login(email, password);
    } catch (error) {
      alert(error.message);
    }

    e.target.reset();
    updateNavBar();
    ctx.page.redirect('/');
  }
}
