import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const categoryProducts = {
  charging: [
    {
      title: "Smart Charging Hub",
      description: "Multi-port charging station with intelligent power distribution",
      price: "$49.99",
      badge: "Best Seller",
      reviews: 128
    },
    {
      title: "Wireless Power Bank",
      description: "20000mAh high-capacity portable charger",
      price: "$79.99",
      reviews: 64
    }
  ],
  projectors: [
    {
      title: "4K Mini Projector",
      description: "Portable HD projector with wireless connectivity",
      price: "$299.99",
      badge: "New",
      reviews: 95
    },
    {
      title: "Desktop Projector",
      description: "4K HDR home theater projector",
      price: "$599.99",
      badge: "Premium",
      reviews: 45
    }
  ]
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const products = categoryProducts[category as keyof typeof categoryProducts] || [];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 capitalize">
            {category?.replace('-', ' ')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium {category?.replace('-', ' ')} solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;