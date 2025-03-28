import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex items-center py-4 border-b">
      <img src="https://images.unsplash.com/photo-1499386765837-ebb421bfc21e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw1fHwlNjBib3R0bGUlMjBvZiUyMCUyNCU3Qml0ZW0ubmFtZXxlbnwwfHx8fDE3NDMxNzM2Nzd8MA&ixlib=rb-4.0.3&q=80&w=1080" 
         
        alt={item.name} 
        className="w-20 h-20 object-cover rounded"
        data-image-request={`bottle of ${item.name} fragrance perfume elegant`}
      />
      <div className="ml-4 flex-grow">
        <Link to={`/product/${item.id}`} className="font-medium text-gray-900 hover:text-indigo-600">
          {item.name}
        </Link>
        <p className="text-gray-600 text-sm">{item.tagline}</p>
      </div>
      <div className="flex items-center">
        <button 
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-1 text-gray-600 hover:text-gray-900 cursor-pointer"
          aria-label="Decrease quantity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <span className="mx-2 w-8 text-center">{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 text-gray-600 hover:text-gray-900 cursor-pointer"
          aria-label="Increase quantity"
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
  );
}