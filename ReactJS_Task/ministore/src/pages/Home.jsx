import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="home-page">

      <h2 className="home-title">
        The Mini Store 🛒
      </h2>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
};

export default Home;