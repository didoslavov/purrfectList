import { getUserData } from '../util.js';
import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoinst = {
  allProducts: '/classes/Products',
  productById: '/classes/Products/',
};

function createPointer(className, objectId) {
  return {
    __type: 'Pointer',
    className,
    objectId,
  };
}

function createOwner(product) {
  const { id } = getUserData();
  product.owner = createPointer('_User', id);
}

export async function getProducts() {
  return api.get(endpoinst.allProducts);
}

export async function getProductById(id) {
  return api.get(endpoinst.productById + id);
}

export async function createProduct(product) {
  createOwner(product);

  return api.post(endpoinst.allProducts, product);
}

export async function updateProduct(id, product) {
  return api.put(endpoinst.productById + id, product);
}

export async function deleteProduct(id) {
  return api.del(endpoinst.productById + id);
}