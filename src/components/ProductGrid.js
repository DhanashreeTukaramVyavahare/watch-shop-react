import React from "react";

const watches = [
  { id: 1, name: 'Luxury Watch', price: '$299', image: 'https://link-to-watch1.jpg' },
  { id: 2, name: 'Classic Watch', price: '$199', image: 'https://link-to-watch2.jpg' },
  { id: 3, name: 'Modern Watch', price: '$249', image: 'https://link-to-watch3.jpg' },
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {watches.map((watch) => (
          <div key={watch.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-56 object-cover" src={watch.image} alt={watch.name} />
            <div className="p-4">
              <h3 className="text-lg font-bold">{watch.name}</h3>
              <p className="text-gray-600">{watch.price}</p>
              <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-full">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
