import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/Actions/cartActions";

import CartItem from "./CartItem.js";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducers.cartItems);
  // useEffect(() => {
  //   dispatch(addToCart());
  // }, [dispatch]);
  // const handlequantityChange = (id, quantity) => {
  //   dispatch(addToCart(id, quantity));
  // };
  return (
    // console.log({ cartItems }),
    // (<div>{cartItems.length !== 0 && <h1>cart</h1>}</div>)
    <div className="cart">
      {cartItems && (
        <div className="cart-Left">
          <h2>Shopping cart</h2>
          {cartItems.length === 0 ? (
            <div>
              <h4>the Cart is empty</h4>
              <br />
              <Link to="/" className="btn btn-light my-3">
                <i className="fa-solid fa-circle-chevron-left"></i>Go Back
              </Link>
            </div>
          ) : (
            cartItems.map((el) => (
              <CartItem
                el={el}
                //  handlequantityChange={handlequantityChange}
              />
            ))
          )}
        </div>
      )}
      <div className="cart-right">
        <div className="cart-info">
          <p>Total </p>
          <p>100 DT</p>{" "}
        </div>
        <button>purchase</button>
      </div>
    </div>
  );
};
export default Cart;
