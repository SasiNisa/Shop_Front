import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access'));

  // Listen for changes in localStorage (e.g., login in another tab)
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('access'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo and Name */}
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-18 mr-2" />
            <Link to="/" className="text-2xl font-bold hover:text-gray-300">
              Modaasa.com
            </Link>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/shop" className="hover:text-gray-300 transition">Shop</Link>

            {isLoggedIn ? (
              <>
                <Link to="/profile" className="hover:text-gray-300 transition">
                  Profile
                </Link>
                <Link to="/cart" className="hover:text-gray-300 transition">Cart</Link>

                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm font-semibold transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-gray-300 transition">Login</Link>
                <Link to="/register" className="hover:text-gray-300 transition">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
