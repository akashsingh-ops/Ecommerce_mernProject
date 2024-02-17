import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux";
const reducer = combineReducers({
  getProducts: getProductsReducer,
});
const store = createStore(reducer);
