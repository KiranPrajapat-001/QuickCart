import { useCart } from "../hooks/useCart";
import "../styles/CartPage.css";
import "../styles/HomePage.css";

function CartPage() {

  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotalPrice
  } = useCart();

  return (
    <div className="page-content">
      <div className="cart-page">

        <div className="hero-section">
          <h1 className="hero-title">Your Shopping Cart</h1>
        </div>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
        </div>
      ) : (
        cart.map(item => (

          <div key={item.id} className="cart-item">

            <div className="item-details">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </div>

            <div className="quantity-controls">
              <button onClick={() =>
                updateQuantity(item.id, item.quantity - 1)
              }>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() =>
                updateQuantity(item.id, item.quantity + 1)
              }>
                +
              </button>

              <button className="remove-button" onClick={() =>
                removeFromCart(item.id)
              }>
                Remove
              </button>
            </div>

          </div>

        ))
      )}

      <div className="total-price">
        Total: ${getTotalPrice()}
      </div>

      </div>
    </div>
  );
}

export default CartPage;