
import React from 'react';

const ProductCard = ({ product }) => {
  // Determine image URL
  const imageUrl = product.image.startsWith('http')
    ? product.image  // already full URL
    : `http://127.0.0.1:8000${product.image}`; // prepend backend for relative path

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
      {/* Product Image */}
      <img
        src={imageUrl}
        alt={product.name}
        className="w-40 h-40 object-cover mb-4 rounded"
      />

      {/* Product Info */}
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <p className="text-gray-600 mb-3">${product.price}</p>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
          View Details
        </button>
        <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
 