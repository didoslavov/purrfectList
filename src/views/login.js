import { login } from '../api/data.js';
import { html } from '../lib.js';
import { updateNavBar } from '../util.js';

const loginTemplate = (onSubmit) => html` <div class="container">
  <img src="../public/login-cat.png" alt="login-cat" />
  <form @submit=${onSubmit}>
    <input class="input-field" type="text" name="username" placeholder="Username" />
    <input class="input-field" type="password" name="password" placeholder="Password" />
    <button class="btn">Login</button>
  </form>
</div>`;

export function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      if (username == '' || password == '') {
        throw new Error('All fields are required!');
      }

      await login(username, password);
    } catch (error) {
      alert(error.message);
    }

    e.target.reset();
    updateNavBar();
    ctx.page.redirect('/');
  }
}
