import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/common/ProductCard';
import products from '../data/products';

export default function Products() {
  const [selectedBenefit, setSelectedBenefit] = useState('all');
  
  // Extract unique benefits for filtering
  const allBenefits = products.reduce((benefits, product) => {
    product.benefits.forEach(benefit => {
      if (!benefits.includes(benefit)) {
        benefits.push(benefit);
      }
    });
    return benefits;
  }, []);
  
  // Filter products based on selected benefit
  const filteredProducts = selectedBenefit === 'all' 
    ? products 
    : products.filter(product => 
        product.benefits.some(benefit => 
          benefit.toLowerCase().includes(selectedBenefit.toLowerCase())
        )
      );
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Fragrances</h1>
        
        <div className="mb-8">
          <label htmlFor="benefit-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Benefit
          </label>
          <select
            id="benefit-filter"
            value={selectedBenefit}
            onChange={(e) => setSelectedBenefit(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md box-border"
          >
            <option value="all">All Benefits</option>
            {allBenefits.map((benefit, index) => (
              <option key={index} value={benefit}>
                {benefit}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}