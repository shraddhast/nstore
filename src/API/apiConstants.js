export const BASE_URL = process.env.REACT_APP_URL;

export const LOGIN = `${BASE_URL}/api/auth/login`;
export const FORGOT_PASSWORD = `${BASE_URL}/api/auth/forgot-password`;
export const RESET_PASSWORD = `${BASE_URL}/auth/set-password`;
export const CHANGE_PASSWORD = `${BASE_URL}/api/user/change-password`;
export const RESET_PASSWORD_TOKEN = `${BASE_URL}/auth/validate-reset-password/144e7af691b6d5148f57592319ed480d21117858`;
export const REGISTER = `${BASE_URL}/api/auth/register`;

export const LIST_CATEGORY = `${BASE_URL}/api/category`;
export const LIST_COLOR = `${BASE_URL}/api/color`;

export const PRODUCTS_CART = `${BASE_URL}/api/cart`;
export const UPDATE_PRODUCT_CART = `${BASE_URL}/api/cart`;
export const REMOVE_PRODUCT_CART = `${BASE_URL}/api/cart`;

export const LIST_PRODUCT = `${BASE_URL}/api/product`;
export const SORT_RATING = `${BASE_URL}/api/product?sortby=rating&orderby=desc`;
export const SORT_LOW_PRICE = `${BASE_URL}/api/product?sortby=price&orderby=asc`;
export const SORT_HIGH_PRICE = `${BASE_URL}/api/product?sortby=price&orderby=desc`;

export const CATEGORY = `${BASE_URL}/api/product`;
export const COLOR = `${BASE_URL}/api/product?limit=5&page=1&color=6065ca24cec0196a6fe56e3d`;
export const PRODUCT_ID = `${BASE_URL}/api/product/details`;

export const ADDRESS = `${BASE_URL}/api/user/address`;
export const UPDATE_ADDRESS = `${BASE_URL}/api/user/address`;
export const DELETE_ADDRESS = `${BASE_URL}/api/user/address`;

export const PLACE_ORDER = `${BASE_URL}/api/order/place`;
export const GET_ORDER_LIST = `${BASE_URL}/api/order`;
