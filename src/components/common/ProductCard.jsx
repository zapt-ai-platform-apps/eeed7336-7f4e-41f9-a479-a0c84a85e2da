import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { id, name, tagline, description, price, image } = product;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <Link to={`/product/${id}`}>
        <img src="https://images.unsplash.com/photo-1574670700790-fa314ab37787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHwlNjBib3R0bGUlMjBvZiUyMCUyNCU3Qm5hbWV8ZW58MHx8fHwxNzQzMTczNjc3fDA&ixlib=rb-4.0.3&q=80&w=1080" 
           
          alt={name} 
          className="w-full h-64 object-cover" 
          data-image-request={`bottle of ${name} fragrance perfume elegant`}
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-indigo-600 text-sm mb-2">{tagline}</p>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-bold">${price.toFixed(2)}</span>
          </div>
        </div>
      </Link>
      <div className="px-6 pb-6">
        <Button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="w-full"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}