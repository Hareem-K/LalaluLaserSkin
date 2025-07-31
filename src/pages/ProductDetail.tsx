// src/pages/ProductDetail.tsx

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');

  if (!product) {
    return <div className="text-center py-20 text-gray-600">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/services/products"
          className="text-purple-600 hover:underline font-medium mb-8 inline-block"
        >
          &larr; Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Selector */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex md:flex-col gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`border-2 ${selectedImage === img ? 'border-purple-600' : 'border-transparent'} rounded-lg overflow-hidden focus:outline-none`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-20 h-20 object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-auto object-contain rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-3xl text-purple-600 font-semibold mb-6">${product.price.toLocaleString()}</p>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="text-sm text-gray-500 space-y-2">
              <p><strong>Availability:</strong> In Stock</p>
              <p><strong>Shipping:</strong> Free shipping within Canada</p>
              <p><strong>Return Policy:</strong> 30-day return window</p>
              <p><strong>Warranty:</strong> 1-year manufacturer warranty</p>
              <p><strong>Category:</strong> Professional Equipment</p>
              <p><strong>SKU:</strong> {product.id.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;