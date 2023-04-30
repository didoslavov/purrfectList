import { register } from '../api/data.js';
import { html } from '../lib.js';
import { updateNavBar } from '../util.js';

const regiisterTemplate = (onSubmit) => html` <div class="container">
  <form @submit=${onSubmit}>
    <input class="input-field" type="text" name="username" placeholder="Username" />
    <input class="input-field" type="text" name="email" placeholder="Email" />
    <input class="input-field" type="password" name="password" placeholder="Password" />
    <input class="input-field" type="password" name="repass" placeholder="Repeat Password" />
    <button class="btn">Register</button>
  </form>
</div>`;

export function regiisterPage(ctx) {
  ctx.render(regiisterTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repass');

    try {
      if (email == '' || password == '') {
        throw new Error('All fields are required!');
      }

      if (password != repass) {
        throw new Error("Passwords don't match!");
      }

      //TO DO: Server side error hendling

      await register(username, email, password);
    } catch (error) {
      alert(error.message);
    }

    updateNavBar();
    ctx.page.redirect('/');
  }
}
