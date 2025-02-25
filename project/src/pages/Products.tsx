import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    title: "Smart Charging Hub",
    description: "Multi-port charging station with intelligent power distribution",
    price: "$49.99",
    badge: "Best Seller",
    reviews: 128
  },
  {
    title: "4K Mini Projector",
    description: "Portable HD projector with wireless connectivity",
    price: "$299.99",
    badge: "New",
    reviews: 95
  },
  {
    title: "Note Counter Pro",
    description: "Professional grade currency counting machine",
    price: "$199.99",
    badge: "Popular",
    reviews: 76
  },
  {
    title: "Wireless Power Bank",
    description: "20000mAh high-capacity portable charger",
    price: "$79.99",
    reviews: 64
  },
  {
    title: "Smart USB Hub",
    description: "7-port USB 3.0 hub with power delivery",
    price: "$39.99",
    reviews: 92
  },
  {
    title: "Desktop Projector",
    description: "4K HDR home theater projector",
    price: "$599.99",
    badge: "Premium",
    reviews: 45
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of premium tech accessories and smart solutions
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="font-semibold text-gray-900 mb-4">Filters</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="ml-2 text-gray-600">Charging Solutions</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="ml-2 text-gray-600">Projectors</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="ml-2 text-gray-600">Money Counters</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="ml-2 text-gray-600">Accessories</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>$1000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="ml-2 text-gray-600">
                        {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;