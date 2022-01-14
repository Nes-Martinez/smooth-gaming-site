import axios from "axios";

/**
 * ACTION TYPES
 */
const GOT_PRODUCTS = "GOT_PRODUCTS";

/**
 * INITIAL STATE
 */
const products = [];

/**
 * ACTION CREATORS
 */
const gotProducts = (products) => ({ type: GOT_PRODUCTS, products });

/**
 * THUNK CREATORS
 */
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/products");
    dispatch(gotProducts(data));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};
