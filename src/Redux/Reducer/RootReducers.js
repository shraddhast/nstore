import { combineReducers } from "redux";
import cartReducer from "./Reducers";

const rootReducer = combineReducers({
  cartReducer,
});

export default rootReducer;
