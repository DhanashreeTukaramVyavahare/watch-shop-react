// src/components/Shop.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const products = [
  {
    id: 1,
    name: "Apple Watch",
    price: "",
    src: "/apple-watch.png", // Assuming this is in the public directory
    description: "The Apple Watch is a brand of smartwatch products produced by Apple.",
  },
  {
    id: 2,
    name: "Galaxy Watch",
    price: "",
    src: "/galaxy-watch.jpg",
    description: "The Samsung Galaxy Watch is a smartwatch developed by Samsung Electronics.",
  },
  {
    id: 3,
    name: "Fitbit",
    price: "",
    src: "/fitbit-watch.png",
    description: "The Fitbit Watch is a smartwatch developed by Fitbit.",
  },
  {
    id: 4,
    name: "Fossil",
    price: "",
    src: "/fossial-watch.png",
    description: "The Fossil Watch is a smartwatch developed by Fossil.",
  },
  {
    id: 5,
    name: "Boat Smartwatch",
    price: "",
    src: "/boat-watch.png",
    description: "The Boat Watch is a smartwatch developed by Boat.",
  },
  {
    id: 6,
    name: "Fastrack Smartwatch",
    price: "",
    src: "/fastract.png",
    description: "The Fastrack Watch is a smartwatch developed by Fastrack.",
  },
];

const Shop = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSeeMore = (id) => {
    navigate(`/product/${id}`); // Navigate to the product detail page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={product.src} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-lg font-semibold text-yellow-500">{product.price}</p>
              <p className="text-gray-600">{product.description}</p>
              <button
                onClick={() => handleSeeMore(product.id)} // Add onClick to navigate
                className="mt-4 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full"
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
