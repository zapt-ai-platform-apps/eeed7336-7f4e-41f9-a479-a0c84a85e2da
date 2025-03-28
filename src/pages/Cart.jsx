import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, totalPrice, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <p className="text-gray-600 mb-6">Your cart is empty</p>
            <Link to="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.map(item => (
              <div key={item.id} className="flex items-center py-4 border-b">
                <img src="https://images.unsplash.com/photo-1549049950-48d5887197a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHwlNjBib3R0bGUlMjBvZiUyMCUyNCU3Qml0ZW0ubmFtZXxlbnwwfHx8fDE3NDMxNzM2Nzd8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                   
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded"
                  data-image-request={`bottle of ${item.name} fragrance perfume elegant`}
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.tagline}</p>
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <span className="mx-2 w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="ml-6 text-right">
                  <p className="text-gray-900 font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 text-sm cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="border-t border-b py-4 mb-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span className="text-gray-600">{item.name} x {item.quantity}</span>
                  <span className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-lg font-semibold mb-6">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <Button className="w-full">Proceed to Checkout</Button>
            </Link>
            <Link to="/products" className="block text-center text-indigo-600 hover:text-indigo-800 mt-4">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}