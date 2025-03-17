// ParentComponent.jsx
import React from 'react';
import CategoryPage from '../components/CategoryPage';

const Category = () => {
  const bannerData = {
    title: 'Featured Products',
    description: 'Check out our latest collection of premium products',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f6eb5b0'
  };

  const products = [
    {
      id: 1,
      title: 'Wireless Headphones',
      description: 'High-quality sound with 20-hour battery life and noise cancellation',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    },
    {
      id: 2,
      title: 'Smart Watch',
      description: 'Track your fitness goals with heart rate monitoring and GPS tracking',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },
    {
      id: 3,
      title: 'Bluetooth Speaker',
      description: 'Portable waterproof speaker with 360° sound and 15-hour playtime',
      image: 'https://images.unsplash.com/photo-1564419374384-0e1c505f04d5'
    }
  ];

  return <CategoryPage banner={bannerData} products={products} />;
};

export default Category;