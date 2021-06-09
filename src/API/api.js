import { request } from "./apiCall";
import { NAME } from "./apiConstants";

export const API = {
  login: (onResponse, id) => {
    const url = BASE_URL + LOGIN;
    return request(onResponse, url, {}, {}, "GET");
  },
};
