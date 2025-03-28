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
        <img src="https://images.unsplash.com/photo-1615527061659-a864d22aa5ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMGJvdHRsZXMlMjBjb2xsZWN0aW9uJTIwd2l0aCUyMGVzc2VudGlhbCUyMG9pbHMlMjBkaXNwbGF5ZWQlMjBiZWF1dGlmdWxseXxlbnwwfHx8fDE3NDMxNzA1OTN8MA&ixlib=rb-4.0.3&q=80&w=1080" 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover" 
          data-image-request={`bottle of ${name} fragrance perfume elegant`}
        />
          </div>
        </div>
      </div>
    </div>
  );
}