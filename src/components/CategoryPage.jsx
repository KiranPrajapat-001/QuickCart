import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import "../styles/HomePage.css";

function CategoryPage({ products }) {

  const { category } = useParams();

  const filteredProducts = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="page-content">
      <div className="hero-section">
        <h1 className="hero-title">{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
        <p className="hero-subtitle">Explore our {category} collection</p>
      </div>

      <ProductList products={filteredProducts} />

      {filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>No products in this category</h2>
          <p>Check back later for new arrivals!</p>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
