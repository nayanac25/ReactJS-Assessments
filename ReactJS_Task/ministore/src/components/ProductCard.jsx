import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {showDesc && <p>{product.description}</p>}

      <button onClick={() => setShowDesc(!showDesc)}>Toggle Description</button>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
