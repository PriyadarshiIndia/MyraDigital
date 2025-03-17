// ProductList.jsx (Child Component)
import React from 'react';

const CategoryPage = ({ banner, products }:any) => {
  return (
    <div className="container mx-auto px-4 pt-36 pb-20">
      {/* Banner Section */}
      <div className="bg-pink-800 rounded-lg overflow-hidden mb-12">
        <div className="flex flex-col md:flex-row">
          <img 
            src={banner.image} 
            alt={banner.title}
            className="w-full md:w-1/2 object-cover h-64 md:h-auto"
          />
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">{banner.title}</h2>
            <p className="text-gray-600 text-lg">{banner.description}</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="space-y-16">
        {products.map((product:any, index:any) => (
          <div 
            key={product.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center space-y-6 md:space-y-0 md:space-x-8`}
          >
            <div className="md:w-1/2">
              <img 
                src={product.image} 
                alt={product.title}
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;