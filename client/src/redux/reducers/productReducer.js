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

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS_DEATAILS_REQUEST:
      return { laoding: true };

    case actionType.GET_PRODUCTS_DEATAILS_SUCCESS:
      return { laoding: false, product: action.payload };

    case actionType.GET_PRODUCTS_DEATAILS_FAIL:
      return { laoding: false, error: action.payload };

    case actionType.GET_PRODUCTS_DEATAILS_RESET:
      return { product: {} };

    default:
      return state;
  }
};
