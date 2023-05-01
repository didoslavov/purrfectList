import { getUserData } from '../util.js';
import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoinst = {
  allProducts: '/classes/Products',
  userLists: '/classes/Lists',
  productsByListId: '/classes/Products/',
  listById: '/classes/Lists/',
  deleteProduct: '/classes/Products/',
  createList: '/classes/Lists',
};

function createPointer(className, objectId) {
  return {
    __type: 'Pointer',
    className,
    objectId,
  };
}

function addList(record) {}

function addOwner(record) {
  const { id } = getUserData();
  record.owner = createPointer('_User', id);

  return record;
}

export async function getUserLists() {
  return api.get(endpoinst.userLists);
}

export async function getListById(id) {
  return api.get(endpoinst.listById + id);
}

export async function getProducts() {
  return api.get(endpoinst.allProducts);
}

export async function getProductById(id) {
  return api.get(endpoinst.productsByListId + id);
}

export async function createProduct(product, listId) {
  product.list = createPointer('Lists', listId);
  addOwner(product);

  return api.post(endpoinst.allProducts, product);
}

export async function updateProduct(id, product) {
  return api.put(endpoinst.productsByListId + id, product);
}

export async function deleteProduct(id) {
  return api.del(endpoinst.deleteProduct + id);
}

export async function createList(list) {
  createPointer(list);

  return api.post(endpoinst.createList, list);
}
