const cartReducer = (state = 0, action) => {
  switch (action.type) {
    case "CART_ARRAY":
      return {
        state,
        state: action.payload,
      };
    default:
      return state;
  }
};
export default cartReducer;
