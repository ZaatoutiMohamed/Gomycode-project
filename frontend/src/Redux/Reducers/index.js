import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import { getProductDetailsReducer, getProductReducer } from "./productReducer";
import cartReducers from "./cartReducers";

const rootReducer = combineReducers({
  authReducer,
  errorReducer,
  getProductDetailsReducer,
  getProductReducer,
  cartReducers,
});
export default rootReducer;
