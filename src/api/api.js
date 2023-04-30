import { clearUserData, getUserData, setUserData } from '../util.js';

const hostname = 'https://parseapi.back4app.com';

async function request(url, options) {
  try {
    const response = await fetch(hostname + url, options);

    if (response.ok != true) {
      const error = await response.json();
      throw new Error(error.error);
    }

    return response.json();
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

function createOptions(method = 'get', data) {
  const options = {
    method,
    headers: {
      'X-Parse-Application-Id': '7AhKwAmOWUll16x4zL3CxlSDWiA61mdxneAQ9nRl',
      'X-Parse-REST-API-Key': '2LlKvakWmxZ0z9zqNiEyMelwPlavQREblpxOwwkG',
    },
  };

  const userData = getUserData();

  if (userData) {
    options.headers['X-Parse-Session-Token'] = userData.token;
  }

  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  return options;
}

export async function get(url) {
  return request(url, createOptions());
}

export async function post(url, data) {
  return request(url, createOptions('post', data));
}

export async function put(url, data) {
  return request(url, createOptions('put', data));
}

export async function del(url) {
  return request(url, createOptions('delete'));
}

export async function login(username, password) {
  const response = await post('/login', { username, password });

  const userData = {
    username: response.username,
    id: response.objectId,
    token: response.sessionToken,
  };

  setUserData(userData);

  return response;
}

export async function register(username, email, password) {
  const response = await post('/users', { username, email, password });

  const userData = {
    username,
    id: response.objectId,
    token: response.sessionToken,
  };

  setUserData(userData);

  return response;
}

export async function logout() {
  await post('/logout');
  clearUserData();
}
