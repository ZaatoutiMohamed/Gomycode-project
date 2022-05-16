import { Link } from "react-router-dom";

const CartItem = ({ el, handlequantityChange }) => {
  return (
    <div className="cartItem">
      <div className="carteItem_image">
        <img
          src={el.image}
          style={{ width: "400px", height: "500px" }}
          alt={el.name}
        />
      </div>
      <Link to={`/product/${el.productId}`} className="cartItem_name">
        <p>{el.name}</p>
      </Link>
      <p className="cartItem_price">{el.price}</p>
      <select
        className="cartItem_select"
        value={el.quantity}
        onChange={(e) => handlequantityChange(el.prductId, e.target.value)}
      ></select>
      <button className="cartItem_deleteBtn"></button>
      <i claName="fas fa trash"></i>
    </div>
  );
};

export default CartItem;
