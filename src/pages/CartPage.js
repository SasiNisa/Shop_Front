import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CartPage() {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const fetchCart = async () => {
    const token = localStorage.getItem('access');
    if (!token) return;

    try {
      const res = await axios.get('${process.env.REACT_APP_API_URL}/api/cart/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (itemId) => {
    const token = localStorage.getItem('access');
    try {
      await axios.delete(`http://127.0.0.1:8000/api/cart/item/${itemId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCart(); // refresh after removal
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">My Cart</h2>

      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.items.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.product_name} x {item.quantity}
              </span>
              <span>${item.total_price}</span>
              <button
                onClick={() => handleRemove(item.id)}
                className="ml-4 text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 font-bold">Total: ${cart.total}</div>
        </div>
      )}
    </div>
  );
}

export default CartPage;


