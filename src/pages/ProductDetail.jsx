import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/products');
    }
  }, [id, navigate]);
  
  if (!product) return null;
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://images.unsplash.com/photo-1560153203-5c08122b577e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw2fHwlNjBib3R0bGUlMjBvZiUyMCUyNCU3QnByb2R1Y3QubmFtZXxlbnwwfHx8fDE3NDMxNzM2NzV8MA&ixlib=rb-4.0.3&q=80&w=1080" 
               
              alt={product.name} 
              className="w-full h-auto rounded-lg shadow-lg" 
              data-image-request={`bottle of ${product.name} fragrance perfume elegant detailed`}
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-indigo-600 text-lg mb-4">{product.tagline}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            </div>
            
            <div className="flex items-center mb-8">
              <div className="flex items-center border border-gray-300 rounded-md mr-4">
                <button
                  type="button"
                  className="p-2 focus:outline-none cursor-pointer"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
                <button
                  type="button"
                  className="p-2 focus:outline-none cursor-pointer"
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <Button onClick={handleAddToCart} className="flex-grow">
                Add to Cart
              </Button>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <p className="text-gray-700">{product.details}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
              <p className="text-gray-700">{product.ingredients}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}