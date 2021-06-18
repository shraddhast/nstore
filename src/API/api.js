import { request } from "./apiCall";
import {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  CHANGE_PASSWORD,
  SORT_RATING,
  LIST_PRODUCT,
  SORT_LOW_PRICE,
  SORT_HIGH_PRICE,
  LIST_CATEGORY,
  CATEGORY,
  COLOR,
  ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  PRODUCTS_CART,
  REMOVE_PRODUCT_CART,
  PRODUCT_ID,
  PLACE_ORDER,
  GET_ORDER_LIST,
} from "./apiConstants";

export const API = {
  login: (onResponse, data) => {
    const url = LOGIN;
    return request(onResponse, url, data, {}, "POST");
  },
  register: (onResponse, data) => {
    const url = REGISTER;
    return request(onResponse, url, data, {}, "POST");
  },
  forgotPassword: (onResponse, data) => {
    const url = FORGOT_PASSWORD;
    return request(onResponse, url, data, {}, "POST");
  },
  resetPassword: (onResponse, data) => {
    const url = RESET_PASSWORD;
    return request(onResponse, url, data, {}, "POST");
  },
  changePassword: (onResponse, data) => {
    const url = CHANGE_PASSWORD;
    return request(onResponse, url, data, {}, "POST");
  },

  listProduct: (onResponse, data) => {
    const url = LIST_PRODUCT;
    return request(onResponse, url, {}, {}, "GET");
  },
  sortRating: (onResponse, id) => {
    const url = SORT_RATING;
    return request(onResponse, url, {}, {}, "GET");
  },
  sortLowPrice: (onResponse) => {
    const url = SORT_LOW_PRICE;
    return request(onResponse, url, {}, {}, "GET");
  },
  sortHighPrice: (onResponse) => {
    const url = SORT_HIGH_PRICE;
    return request(onResponse, url, {}, {}, "GET");
  },
  getProductsByCategory: (onResponse, params) => {
    const url = CATEGORY;
    return request(onResponse, url, {}, params, "GET");
  },
  category: (onResponse, data) => {
    const url = LIST_CATEGORY;
    return request(onResponse, url, {}, {}, "GET");
  },
  color: (onResponse, data) => {
    const url = COLOR;
    return request(onResponse, url, {}, {}, "GET");
  },
  listAddress: (onResponse) => {
    const url = ADDRESS;
    return request(onResponse, url, {}, {}, "GET");
  },
  newAddress: (onResponse, data) => {
    const url = ADDRESS;
    return request(onResponse, url, data, {}, "POST");
  },
  updateAddress: (onResponse, id, data) => {
    const url = `${UPDATE_ADDRESS}/${id}`;
    return request(onResponse, url, id, data, "PUT");
  },
  deleteAddress: (onResponse, id) => {
    const url = `${DELETE_ADDRESS}/${id}`;
    return request(onResponse, url, id, {}, "DELETE");
  },
  addToCart: (onResponse, data, params) => {
    const url = PRODUCTS_CART;
    return request(onResponse, url, data, params, "POST");
  },
  getFromCart: (onResponse) => {
    const url = PRODUCTS_CART;
    return request(onResponse, url, {}, {}, "GET");
  },
  deleteFromCart: (onResponse, id) => {
    const url = `${REMOVE_PRODUCT_CART}/${id}`;
    return request(onResponse, url, {}, {}, "DELETE");
  },
  singleProduct: (onResponse, id) => {
    const url = `${PRODUCT_ID}/${id}`;
    return request(onResponse, url, {}, {}, "GET");
  },
  getOrderPlace: (onResponse, data) => {
    const url = GET_ORDER_LIST;
    return request(onResponse, url, data, {}, "GET");
  },
  orderPlace: (onResponse, data) => {
    const url = PLACE_ORDER;
    return request(onResponse, url, data, {}, "POST");
  },
};
//export default API;
