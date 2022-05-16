import { ADD_TO_CART, REMOVE_FROM_CART } from "../Types/cartTypes";

const initialState = {
  cartItems: [],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existItem = state.cartItems.find(
        (el) => el.product === action.payload.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.product === existItem.product ? action.payload.product : el
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [state.cartItems, action.payload],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state.cartItems.filter((el) => el.product !== action.payload),
      };

    default:
      return state;
  }
};
export default cartReducers;
