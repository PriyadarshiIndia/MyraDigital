// ParentComponent.jsx
import React from 'react';
import ProductComponent from '../components/ProductComponent';

const ProductPage = () => {
  const productData = {
    title: 'Wireless Bluetooth Headphones',
    price: '$129.99',
    description: 'High-quality wireless headphones with 20-hour battery life and noise cancellation',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      'https://images.unsplash.com/photo-1583324113626-78e0e7b41044',
      'https://images.unsplash.com/photo-1525547326475-4a414ec0a96d'
    ],
    features: [
      'Noise cancellation technology',
      '20-hour battery life',
      'Bluetooth 5.0 connectivity',
      'Comfortable over-ear design'
    ]
  };

  return <ProductComponent product={productData} />;
};

export default ProductPage;