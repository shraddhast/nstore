import { request } from "./apiCall";
import { NAME } from "./apiConstants";

export const API = {
  login: (onResponse, id) => {
    const url = BASE_URL + LOGIN;
    return request(onResponse, url, {}, {}, "GET");
  },
};
export const API = {
  name: (onResponse, parameter) => {
    const url = BASE_URL + NAME;
    return request(onResponse, url, {}, {}, "METHOD");
  },
};
