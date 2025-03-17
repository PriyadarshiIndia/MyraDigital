'use client'

import React, { useState } from 'react';
import EnquiryModal from '../components/EnquiryModal';

interface Specification {
  [key: string]: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  specifications: Specification;
}

const CarChargers = () => {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const bannerData = {
    title: 'Car Chargers',
    description: 'Check out our latest collection of premium products',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f6eb5b0'
  };

  const products: Product[] = [
    {
      id: 1,
      title: 'Wireless Headphones',
      description: 'High-quality sound with 20-hour battery life and noise cancellation',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      specifications: {
        'Battery Life': '20 hours',
        'Noise Cancellation': 'Yes',
        'Connectivity': 'Bluetooth 5.0',
        'Weight': '250g',
        'Dimensions': '18cm x 16cm x 6cm'
      }
    },
    {
      id: 2,
      title: 'Smart Watch',
      description: 'Track your fitness goals with heart rate monitoring and GPS tracking',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      specifications: {
        'Battery Life': '7 days',
        'Heart Rate Monitoring': 'Yes',
        'GPS Tracking': 'Yes',
        'Water Resistance': '50m',
        'Weight': '50g'
      }
    },
    {
      id: 3,
      title: 'Bluetooth Speaker',
      description: 'Portable waterproof speaker with 360° sound and 15-hour playtime',
      image: 'https://images.unsplash.com/photo-1564419374384-0e1c505f04d5',
      specifications: {
        'Playtime': '15 hours',
        'Waterproof': 'Yes',
        'Sound': '360°',
        'Weight': '600g',
        'Dimensions': '20cm x 20cm x 10cm'
      }
    }
  ];

  const openEnquireModal = (product: Product) => {
    setSelectedProduct(product);
    setIsEnquireModalOpen(true);
  };

  const closeModals = () => {
    setIsEnquireModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={bannerData.image}
            alt="Car Chargers Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left Content */}
              <div className="flex flex-col justify-center py-24 lg:py-0">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                    {bannerData.title}
                  </span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-fuchsia-500 mb-8 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-md">
                  {bannerData.description}
                </p>
              </div>

              {/* Right Image (hidden on mobile) */}
              <div className="hidden lg:block relative">
                <img
                  src="/hero-product.png"
                  alt="Featured Car Charger"
                  className="absolute -right-16 -bottom-16 w-[600px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">Featured</span> Products
        </h2>
        
        <div className="space-y-32">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 h-[450px] relative rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 border-2 border-pink-500/30 rounded-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent z-10"></div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-3xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                      {product.title}
                    </span>
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                      {product.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                    <span className="h-px w-6 bg-pink-500 mr-3"></span>
                    Specifications
                  </h4>
                  <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="divide-y divide-gray-200">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <tr key={key} className="hover:bg-pink-50 transition-colors duration-150">
                            <td className="px-6 py-4 text-sm font-medium text-pink-500 w-1/3">
                              {key}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <button
                  onClick={() => openEnquireModal(product)}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold rounded-xl hover:from-pink-600 hover:to-fuchsia-600 transition-all duration-300 shadow-[0_2px_15px_rgba(236,72,153,0.3)] hover:shadow-[0_4px_20px_rgba(236,72,153,0.4)] transform hover:-translate-y-1"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-pink-100 to-fuchsia-100 py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-pink-500">Power Up</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Contact our team for custom charging solutions tailored to your specific needs.
          </p>
          <button className="px-10 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-[0_2px_15px_rgba(236,72,153,0.4)]">
            Contact Us
          </button>
        </div>
      </div>

      <EnquiryModal isOpen={isEnquireModalOpen} onClose={closeModals} product={selectedProduct} />
    </div>
  );
};

export default CarChargers;