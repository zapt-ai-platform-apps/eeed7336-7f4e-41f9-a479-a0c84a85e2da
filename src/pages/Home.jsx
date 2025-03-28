import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import products from '../data/products';

export default function Home() {
  // Display featured products (first 3)
  const featuredProducts = products.slice(0, 3);
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Enhance Your Wellbeing With Fragrance</h1>
              <p className="text-lg text-gray-700 mb-8">
                Discover our collection of wellness fragrances designed to improve your mood, focus, and overall wellbeing through the power of scent.
              </p>
              <Link to="/products">
                <Button className="text-lg px-6 py-3">
                  Shop Collection
                </Button>
              </Link>
            </div>
            <div className="relative h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1590858078095-24c472408dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8ZWxlZ2FudCUyMGNvbGxlY3Rpb24lMjBvZiUyMHBlcmZ1bWUlMjBib3R0bGVzJTIwd2l0aCUyMGVzc2VudGlhbCUyMG9pbHMlMjBvbiUyMHN0eWxpc2glMjBkaXNwbGF5JTIwd2l0aCUyMG5hdHVyYWwlMjBlbGVtZW50c3xlbnwwfHx8fDE3NDMxNzM2NzR8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="Collection of Essence fragrances" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
                data-image-request="elegant collection of perfume bottles with essential oils on stylish display with natural elements"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Power of Scent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mood Enhancement</h3>
              <p className="text-gray-600">Our fragrances are carefully crafted to promote specific emotional responses, from calm to energy.</p>
            </div>
            <div className="text-center p-6">
              <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Ingredients</h3>
              <p className="text-gray-600">We use only the finest essential oils and botanical ingredients for truly authentic scents.</p>
            </div>
            <div className="text-center p-6">
              <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scientifically Formulated</h3>
              <p className="text-gray-600">Each fragrance is developed based on research into the psychological effects of scent.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Fragrances</h2>
            <Link to="/products" className="text-indigo-600 hover:text-indigo-800 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img src="https://images.unsplash.com/photo-1549049950-48d5887197a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHwlNjBib3R0bGUlMjBvZiUyMCUyNCU3QnByb2R1Y3QubmFtZXxlbnwwfHx8fDE3NDMxNzM2NzV8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                     
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                    data-image-request={`bottle of ${product.name} fragrance perfume elegant`}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                    <p className="text-indigo-600 text-sm mb-2">{product.tagline}</p>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-bold">${product.price.toFixed(2)}</span>
                      <span className="text-indigo-600 font-medium">View Details</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex text-indigo-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Serenity has become an essential part of my evening routine. The calming effect is truly remarkable."</p>
              <p className="font-medium">— Sarah K.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex text-indigo-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"I keep Clarity at my desk for those afternoon slumps. It helps me stay focused and productive."</p>
              <p className="font-medium">— Michael T.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex text-indigo-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Vitality has replaced my morning coffee. The energizing effect lasts much longer and feels more natural."</p>
              <p className="font-medium">— Emma L.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}