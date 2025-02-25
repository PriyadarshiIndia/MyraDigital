import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image?: string;
  badge?: string;
  rating?: number;
  reviews?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  image,
  badge,
  rating = 5,
  reviews = 0
}) => {
  return (
    <div className="bg-[#F5F5F5] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2">
      <div className="relative">
        <div className="bg-white rounded-lg p-4 aspect-square flex items-center justify-center">
          <div className="w-48 h-48 bg-[#4A90E2]/10 rounded-lg">
            {image && <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />}
          </div>
        </div>
        {badge && (
          <span className="absolute top-4 right-4 bg-[#50C5B7] text-white px-3 py-1 rounded-full text-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-[#333333]">{title}</h3>
        {rating && (
          <div className="flex items-center mt-2 mb-3">
            <div className="flex text-[#4A90E2]">
              {'★'.repeat(rating)}
            </div>
            {reviews > 0 && (
              <span className="text-gray-500 text-sm ml-2">({reviews} reviews)</span>
            )}
          </div>
        )}
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-[#4A90E2] font-bold text-xl">{price}</span>
          <button className="bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-[#50C5B7] transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;