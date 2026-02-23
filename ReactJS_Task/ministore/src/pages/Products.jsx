import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [category, setCategory] = useState("");

  const filteredProducts =
    category === ""
      ? products
      : products.filter((p) => p.category === category);

  return (

  <div className="products-page">

    <div className="product-header">
      <h2>Products</h2>

      <div className="category-buttons">
        <button onClick={() => setCategory("")}>All</button>
        <button onClick={() => setCategory("Electronics")}>Electronics</button>
        <button onClick={() => setCategory("Accessories")}>Accessories</button>
      </div>
    </div>

    <div className="products-grid">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>

  </div>
);

};

export default Products;
