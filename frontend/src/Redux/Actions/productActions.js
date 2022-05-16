import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_RESET,
} from "../Types/productsTypes";

import axios from "axios";

export const getProducts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_REQUEST,
    });
    const res = await axios.get("/api/product/GetProduct");
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: res.data,
    });
    getProductDetails(id);
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_DETAILS_REQUEST,
    });
    const res = await axios.get(`/api/product/GetOneProduct/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAILS_SUCCESS,
      payload: res.data.GetOne,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAILS_FAIL,
      payload: error.response.data,
    });
  }
};
export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: GET_PRODUCT_DETAILS_RESET,
  });
};

export const addnewProduct = (newProduct) => async (dispatch) => {
  try {
    const res = await axios.post("/api/product/AddProduct", newProduct);
    dispatch(getProducts());
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = (id, newProduct) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/product/UpdateContact/${id}`, newProduct);
    dispatch(getProducts());
    dispatch(getProductDetails(id));
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/product/DeleteProduct/${id}`);
    dispatch(getProducts());
  } catch (error) {
    console.log(error);
  }
};
