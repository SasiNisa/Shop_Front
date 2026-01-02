import React from 'react';
//import ProductList from '../components/ProductList';
import FeaturedProducts from '../components/FeaturedProducts';
import NewProducts from '../components/NewProducts';
import { Link } from "react-router-dom"; 
//import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Center container with nice spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">

        {/* Hero Section */}
        <section className="my-12 relative">
          {/* Banner container */}
          <div className="w-full h-54 sm:h-80 md:h-96 lg:h-[16rem] relative rounded-lg overflow-hidden shadow-lg">
            
            {/* Banner image */}
            <img
              src="/images/banner.jpg"  // Ensure the image is in public/images/banner.jpg
              alt="Shop Banner"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Centered overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
                Welcome to My Shop
              </h1>
              <p className="mt-2 text-lg sm:text-xl drop-shadow-md max-w-xl">
                Discover amazing products and shop your favorites today!
              </p>
            </div>
          </div>
        </section>

    


       {/* Featured Products */}
      <section className="my-12">
     {/* ProductList handles its own grid */}
      <FeaturedProducts /> 

      {/* Shop Now button */}
  <div className="mt-8">
    <Link
      to="/shop"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
    >
      Shop More products →
    </Link>
  </div>
      
    </section>


        {/* Featured Products */}
      <section className="my-12">
     {/* ProductList handles its own grid */}
      <NewProducts /> 

      {/* Shop Now button */}
  <div className="mt-8">
    <Link
      to="/shop"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
    >
      Shop More products →
    </Link>
  </div>
      
    </section>


      </div>
    </div>
  );
};

export default Home;
