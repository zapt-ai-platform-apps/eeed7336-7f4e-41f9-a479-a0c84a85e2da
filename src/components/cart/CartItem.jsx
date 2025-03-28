import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex items-center py-4 border-b">
      <img src="https://images.unsplash.com/photo-1623826538345-192361e2d4cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHxhcnJheSUyMG9mJTIwbmF0dXJhbCUyMGVzc2VudGlhbCUyMG9pbHMlMjBhbmQlMjBib3RhbmljYWxzJTIwZm9yJTIwcGVyZnVtZSUyMG1ha2luZyUyMGluJTIwZWxlZ2FudCUyMGJvdHRsZXN8ZW58MHx8fHwxNzQzMTcwNTk0fDA&ixlib=rb-4.0.3&q=80&w=1080" 
        src={item.image} 
        alt={item.name} 
        className="w-20 h-20 object-cover rounded"
        data-image-request={`bottle of ${item.name} fragrance perfume elegant`}
      />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}