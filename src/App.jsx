import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";

import "./styles/App.css";

import { products } from "./data/Products";
import { CartProvider } from "./context/CartContext";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>
      <BrowserRouter>

        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <Routes>

          <Route
            path="/"
            element={
              <HomePage
                products={products}
                searchTerm={searchTerm}
              />
            }
          />

          <Route
            path="/category/:category"
            element={<CategoryPage products={products} />}
          />

          <Route
            path="/cart"
            element={<CartPage />}
          />

        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;