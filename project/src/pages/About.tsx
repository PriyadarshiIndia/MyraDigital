import React from 'react';
import ReactGA from 'react-ga4'; // Import the default export for Google Analytics

export default function About() {
  // Function to track a custom event
  const handleImageClick = () => {
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'User Interaction',
      eventAction: 'Image Click',
      eventLabel: 'About Page Image',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Add an onClick handler to track image clicks */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
              alt="Team"
              className="rounded-lg shadow-xl cursor-pointer" // Add cursor pointer for interactivity
              onClick={handleImageClick} // Track the click event
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}