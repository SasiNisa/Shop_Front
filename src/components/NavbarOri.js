/* import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: 'white'
    }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }}>
          MyShop
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar; */


import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../assets/logo.png'; // put your logo in src/assets/logo.png

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo and Name */}
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-18 mr-2"/>
            <Link to="/" className="text-2xl font-bold hover:text-gray-300">
              Modaasa.com
            </Link>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/shop" className="hover:text-gray-300 transition">Shop</Link>
            <Link to="/login" className="hover:text-gray-300 transition">Login</Link>
            <Link to="/register" className="hover:text-gray-300 transition">Register</Link>
          </div>

          {/* Mobile menu button placeholder */}
          <div className="md:hidden">
            {/* You can add hamburger menu here later */}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

