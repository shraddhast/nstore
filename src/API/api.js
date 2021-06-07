import { request } from "./apiCall";
import { LOGIN } from "./apiConstants";

export const API = {
  login: (onResponse, id) => {
    const url = BASE_URL + LOGIN;
    return request(onResponse, url, {}, {}, "GET");
  },
};
