// src/components/ProductDetail.js
import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Adjust the path as necessary

// Product Data
const products = [
  {
    id: 1,
    name: "Apple Watch Series 8",
    brand: "Apple",
    price: "$399", // Adjusted the price to a more realistic value
    src: "/apple-watch.png",
    description:
      "The Apple Watch Series 8 offers advanced health tracking and seamless integration with your Apple devices.",
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 5",
    brand: "Samsung",
    price: "$1299",
    src: "/amsungGalaxyWatch.png",
    description:
      "Samsung Galaxy Watch 5 combines sleek design with powerful performance and comprehensive health features.",
  },
  
  {
    id: 3,
    name: "Fitbit Versa 3",
    brand: "Fitbit",
    price: "$229",
    src: "/fitbit.png",
    description:
      "Fitbit Versa 3 offers advanced fitness tracking, built-in GPS, and a variety of customizable watch faces.",
  },
  {
    id: 4,
    name: "fossial 945",
    brand: "Garmin",
    price: "$499",
    src: "/images.png",
    description:
      "Garmin Forerunner 945 is designed for professional athletes, offering advanced performance metrics and multi-sport tracking.",
  },
  {
    id: 5,
    name: "Boat Smartwatch",
    brand: "Fossil",
    price: "$295",
    src: "/download.png",
    description:
      "Fossil Gen 6 combines classic style with modern smartwatch features, including health tracking and customizable watch faces.",
  },
  {
    id: 6,
    name: "Fastrack Smartwatch",
    brand: "Fastrack Smartwatch",
    price: "$499",
    src: "/download1.png",
    description:
      "Fastrack Smartwatch 9 offers unparalleled battery life and robust durability, perfect for outdoor enthusiasts and athletes.",
  },
  
];

const ProductDetail = () => {
  const { productId } = useParams(); 
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = useState("");

  const selectedProduct = products.find(
    (product) => product.id === parseInt(productId)
  );

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  if (!selectedProduct) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center">Product Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full"
          aria-label="Go Back to Previous Page"
        >
          Go Back
        </button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(
      (product) =>
        product.brand === selectedProduct.brand &&
        product.id !== selectedProduct.id
    )
    .slice(0, 6);

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    setSuccessMessage(`${selectedProduct.name} has been added to your cart!`);
  };

  const handleBuyNow = () => {
    addToCart(selectedProduct);
    setSuccessMessage(`${selectedProduct.name} has been added to your cart!`);
    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {successMessage && (
        <div className="mb-4 p-2 text-green-700 bg-green-200 rounded">
          {successMessage}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={selectedProduct.src}
          alt={selectedProduct.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{selectedProduct.name}</h1>
          <p className="text-xl font-semibold text-yellow-500 mb-4">
            {selectedProduct.price}
          </p>
          <p className="text-gray-700 mb-6">{selectedProduct.description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full mb-2"
            aria-label={`Add ${selectedProduct.name} to cart`}
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full"
            aria-label={`Buy ${selectedProduct.name} now`}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            More from {selectedProduct.brand}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-lg font-semibold text-yellow-500">
                    {product.price}
                  </p>
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="mt-4 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full"
                    aria-label={`See more details about ${product.name}`}
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
