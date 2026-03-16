import "../styles/ProductCard.css";
import { useCart } from "../hooks/useCart";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="product-price">${product.price}</p>

      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;