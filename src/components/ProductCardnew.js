import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
