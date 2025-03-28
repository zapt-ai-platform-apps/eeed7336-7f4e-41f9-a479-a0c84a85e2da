import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Essence
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/products" className="px-3 py-2 text-gray-700 hover:text-gray-900">
              Shop
            </Link>
            <Link to="/cart" className="px-3 py-2 text-gray-700 hover:text-gray-900 relative">
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}