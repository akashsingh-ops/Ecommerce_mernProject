// after calling dispatcher the getProduct will call
import * as actionType from "../constants/productConstant";
export const getProductsReducer = (state = { products: [] }, action) => {
  // for diffrence we used swicth
  switch (action.type) {
    case actionType.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };

    case actionType.GET_PRODUCTS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
