import { useState, useEffect } from "react";
import { CartContext } from "./CartContextValue";

// Provider
export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    // Load cart from localStorage on initialization
    const savedCart = localStorage.getItem('quickcart-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [message, setMessage] = useState("");

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('quickcart-cart', JSON.stringify(cart));
  }, [cart]);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  const addToCart = (product) => {
    const existing = cart.find(
      item => item.id === product.id
    );

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      showMessage(`Increased quantity of ${product.name} in cart`);
    } else {
      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ]);
      showMessage(`Added ${product.name} to cart`);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, qty) => {

    if (qty <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        message
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

