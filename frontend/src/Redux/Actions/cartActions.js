import { ADD_TO_CART, REMOVE_FROM_CART } from "../Types/cartTypes";
import axios from "axios";

export const addToCart = (quantity, id) => async (dispatch, getState) => {
  console.log(`Mohame${id}`);
  const res = await axios.get(`/api/product/GetOneProduct/${id}`);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      productId: res.data._id,
      name: res.data.name,
      image: res.data.image,
      price: res.data.price,
      countInStock: res.data.countInStock,
      quantity,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
