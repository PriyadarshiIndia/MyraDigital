import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const FeaturedProductSection = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle redirection to the product details page
  const handleViewDetails = () => {
    navigate("/projectors#product-hy300-free-style-projector"); // Replace with your actual product page route
  };

  return (
    <section className="py-8">
      <div className="xl:mx-auto xl:container">
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            
            {/* Image Section */}
            <div className="w-full lg:w-1/2 md:py-9 py-6">
              <img 
                src="img/projectors/hy300.jpg" // Replace with your projector image URL
                alt="Projector"
                className="lg:w-full h-full object-cover object-center w-full"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
              <p className="text-sm leading-none text-pink-800 pb-2">Featured</p>
              <p className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 lg:pb-6 md:pb-4 pb-2">
                High-Definition Projector
              </p>
              <p className="text-sm leading-5 text-gray-600 md:pb-10 pb-8">
                Experience cinema-like visuals with our high-definition projector. Perfect for home theaters, presentations, and outdoor movie nights. Bright, crisp, and immersive.
              </p>

              {/* Button */}
              <div className="md:block flex items-center justify-center">
                <button
                  onClick={handleViewDetails} // Redirect to product details page
                  className="lg:w-auto w-full border border-pink-600 hover:text-gray-50 hover:bg-pink-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3 text-sm leading-none text-pink-800 dark:bg-transparent border-dark text-dark dark:hover:bg-pink-600 rounded-md"
                >
                  View Details
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductSection;