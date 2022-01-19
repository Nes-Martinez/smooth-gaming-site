import axios from "axios";

/**
 * ACTION TYPES
 */
const GOT_PRODUCTS = "GOT_PRODUCTS";
const GOT_SINGLE_PRODUCT = "GOT_SINGLE_PRODUCT";

/**
 * INITIAL STATE
 */
const products = { products: [] };
const product = { product: {} };

/**
 * ACTION CREATORS
 */
const gotProducts = (products) => ({ type: GOT_PRODUCTS, products });
const gotSingleProduct = (product) => ({ type: GOT_SINGLE_PRODUCT, product });

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

export const getSingleProducts = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(gotSingleProduct(data));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export const getProductsReducer = (state = products, action) => {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export const getSingleProductsReducer = (state = product, action) => {
  switch (action.type) {
    case GOT_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
};
