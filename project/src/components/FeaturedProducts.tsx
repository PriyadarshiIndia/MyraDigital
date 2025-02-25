import React from 'react';

export const FeaturedProducts = () => {
  const products = [
    {
      image: "https://brightcharger.in/uploaded_files/product_images/thumbs/5%20pin%20charger12_03.jpg",
      name: "5 Pin Charger",
      description: "Fast charging compatible mobile charger with protection features"
    },
    {
      image: "https://brightcharger.in/uploaded_files/product_images/thumbs/DC%202%204%20AMP%20USB%20charger%20CH-0801_15.jpg",
      name: "DC 2.4 AMP USB Charger",
      description: "High-performance USB charger with rapid charging technology"
    },
    {
      image: "https://brightcharger.in/uploaded_files/product_images/thumbs/Type%20C%20Cable%203%201%20A44_43.jpg",
      name: "Type C Cable 3.1A",
      description: "Premium quality Type-C cable for fast data transfer and charging"
    },
    {
      image: "https://brightcharger.in/uploaded_files/product_images/thumbs/Universal%20Super%20Bass%20BH-10247_03.jpg",
      name: "Universal Super Bass BH-102",
      description: "High-quality audio experience with deep bass response"
    }
  ];

  return (
    <section id="featured-products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-600">Discover our premium range of mobile accessories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full w-full hover:bg-blue-700 transition-colors">
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#products" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};