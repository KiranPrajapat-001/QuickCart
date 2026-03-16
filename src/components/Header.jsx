import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../styles/Header.css";

function Header({ searchTerm, setSearchTerm }) {

  const { getTotalItems, message } = useCart();

  return (
    <header>
      <div className="header-content">
        <h1>🛒 QuickCart</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/category/electronics">Electronics</Link>
          <Link to="/category/sports">Sports</Link>
          <Link to="/cart" className="cart-link">
            Cart
            {getTotalItems() > 0 && (
              <span className="cart-count">{getTotalItems()}</span>
            )}
          </Link>
        </nav>
      </div>

      {message && <div className="cart-message">{message}</div>}
    </header>
  );
}

export default Header;