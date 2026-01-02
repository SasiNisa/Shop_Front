import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-4 border-blue-500 inline-block pb-1">
            Contact Us
          </h3>
          <p className="mt-2 flex items-center gap-2">
            <FaEnvelope /> support@myshop.com
          </p>
          <p className="mt-1 flex items-center gap-2">
            <FaPhone /> +1 123-456-7890
          </p>
        </div>

        {/* Page Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-4 border-blue-500 inline-block pb-1">
            Pages
          </h3>
          <ul className="mt-2 space-y-1">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
            <li><Link to="/register" className="hover:text-white">Register</Link></li>
          </ul>
        </div>

        {/* About / Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-4 border-blue-500 inline-block pb-1">
            About
          </h3>
          <p className="mt-2">
            MyShop is your go-to online store for amazing products delivered to your doorstep.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-4 border-blue-500 inline-block pb-1">
            Follow Us
          </h3>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Modaasa.Sasihub.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
