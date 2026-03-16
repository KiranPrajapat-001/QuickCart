import ProductList from "./ProductList";
import "../styles/HomePage.css";

function HomePage({ products, searchTerm }) {

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(
      searchTerm.toLowerCase()
    )
  );

  return (
    <div className="page-content">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to QuickCart</h1>
        <p className="hero-subtitle">Discover amazing products at great prices!</p>
      </div>

      <ProductList products={filteredProducts} />

      {filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>No products found</h2>
          <p>Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;