import React from 'react';
import axios from 'axios';

const ProductCard = ({ product, onCartUpdate }) => {
  const imageUrl = product.image.startsWith('http')
    ? product.image
    : `http://127.0.0.1:8000${product.image}`;

  const handleAddToCart = async () => {
    const token = localStorage.getItem('access');

    if (!token) {
      alert('Please login to add products to your cart.');
      return;
    }

    try {
      await axios.post(
        'http://127.0.0.1:8000/api/cart/add/',
        { product_id: product.id, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert('✅ Item added to cart!');
      if (onCartUpdate) onCartUpdate(); // Notify parent to refresh cart
    } catch (error) {
      console.error(error);
      alert('❌ Failed to add item to cart');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
      <img src={imageUrl} alt={product.name} className="w-40 h-40 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <p className="text-gray-600 mb-3">${product.price}</p>

      <div className="flex space-x-2">
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
          View Details
        </button>

        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
