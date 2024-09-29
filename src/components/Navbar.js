// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">WatchShop</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300"></Link>
          <Link to="/shop" className="hover:text-gray-300">Shop</Link>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
