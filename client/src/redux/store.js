import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Change the import to directly import 'thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducer.js";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
