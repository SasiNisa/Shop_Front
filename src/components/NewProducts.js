import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/?new=true')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
