import { request } from "./apiCall";
import {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  SORT_RATING,
  LIST_PRODUCT,
  SORT_LOW_PRICE,
  SORT_HIGH_PRICE,
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
};
//export default API;
