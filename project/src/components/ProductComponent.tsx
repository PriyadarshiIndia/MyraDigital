// ProductPage.jsx (Child Component)
import React, { useState } from 'react';

const ProductComponent = ({ product }:any) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  const openModal = () => setIsEnquireModalOpen(true);
  const closeModal = () => setIsEnquireModalOpen(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', e.target);
    closeModal();
  };

  return (
    <div className="container mx-auto px-4 pt-36 pb-20">
      {/* Product Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-w-16 aspect-h-9">
            <img 
              src={selectedImage} 
              alt={product.title} 
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image :any, index:any) => (
              <img 
                key={index}
                src={image} 
                alt={`${product.title} thumbnail`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                  image === selectedImage ? 'border-2 border-pink-500' : 'border border-gray-200'
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-2xl text-pink-600 font-semibold">{product.price}</p>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-700">Description</h3>
            <p className="text-gray-600">{product.description}</p>
            <h3 className="text-xl font-medium text-gray-700">Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.features.map((feature : any, index : any ) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <button 
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            onClick={openModal}
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      {isEnquireModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Enquire About {product.title}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Product</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                  value={product.title}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                  placeholder="Enter your message"
                  rows={4}
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="submit"
                  className="bg-fuchsia-600 text-white px-6 py-2 rounded-lg hover:bg-fuchsia-700 transition-colors duration-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductComponent;