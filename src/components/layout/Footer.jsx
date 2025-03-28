import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Essence</h3>
            <p className="text-gray-600">
              Wellness fragrances crafted to enhance your daily life.
            </p>
            <div className="mt-4">
              <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-700">
                Made on ZAPT
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-gray-900">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 hover:text-gray-900">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">
              Email: hello@essence.example.com
            </p>
            <p className="text-gray-600 mt-2">
              Follow us on social media for wellness tips and new product announcements.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Essence. All rights reserved.
        </div>
      </div>
    </footer>
  );
}