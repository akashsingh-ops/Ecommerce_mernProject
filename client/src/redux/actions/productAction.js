import * as actionTypes from "../constants/productConstant";
import axios from "axios";

export const getProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_DEATAILS_REQUEST });
    const { data } = await axios.get(`http://localhost:8000/product/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCTS_DEATAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_DEATAILS_FAIL,
      payload: error.response,
    });
  }
};
