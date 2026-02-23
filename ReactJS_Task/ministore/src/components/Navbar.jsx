import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {

  const { cart } = useContext(CartContext);

  return (
    <nav>
      <NavLink to="/">Home</NavLink> |
      <NavLink to="/products">Products</NavLink> |
      <NavLink to="/cart">
        Cart ({cart.length})
      </NavLink>
    </nav>
  );
};

export default Navbar;