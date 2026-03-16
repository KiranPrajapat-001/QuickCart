import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>QuickCart</h3>
          <p>Your one-stop shop for amazing products.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/category/electronics">Electronics</a></li>
            <li><a href="/category/sports">Sports</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@quickcart.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 QuickCart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;