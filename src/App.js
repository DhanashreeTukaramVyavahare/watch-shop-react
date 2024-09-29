// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./context/CartContext"; // Import the CartProvider

const App = () => {
  return (
    <CartProvider> {/* Wrap your application with CartProvider */}
      <Router>
        <Navbar /> {/* Include the Navbar on all pages */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
