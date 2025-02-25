import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const featuredProducts = [
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
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <section id="featured-products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our collection of premium smart accessories designed for modern life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Categories />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;