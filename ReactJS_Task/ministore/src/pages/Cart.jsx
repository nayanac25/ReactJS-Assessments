import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) return <h3>Your Cart is Empty</h3>;

  return (
    <>
      <h2>Cart Items</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-img" />

          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h3>Total Items: {cart.length}</h3>
      <h3>Total Price: ₹{totalPrice}</h3>
    </>
  );
};

export default Cart;
