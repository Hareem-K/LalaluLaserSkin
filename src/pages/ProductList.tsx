// src/pages/ProductList.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import Card from '../components/UI/Card';

const ProductList: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Professional Equipment for Your Practice
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} hover className="overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price.toLocaleString()}</p>
                <Link 
                  to={`/services/products/${product.id}`} 
                  className="text-purple-600 font-medium hover:underline"
                >
                  View Details
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;