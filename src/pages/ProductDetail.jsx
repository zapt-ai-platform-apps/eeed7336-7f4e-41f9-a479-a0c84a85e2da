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
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://images.unsplash.com/photo-1571059750558-3d869522f707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwcGVyZnVtZSUyMGJvdHRsZSUyMHdpdGglMjBhJTIwdGhhbmslMjB5b3UlMjBjYXJkfGVufDB8fHx8MTc0MzE3MDU5NHww&ixlib=rb-4.0.3&q=80&w=1080" 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto rounded-lg shadow-lg" 
              data-image-request={`bottle of ${product.name} fragrance perfume elegant detailed`}
            />
          </div>
          <p className="text-gray-700 mb-8">
            We appreciate your business and hope our fragrances will enhance your wellbeing.
          </p>
          <Link to="/">
            <Button className="px-8 py-3">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}