import React, { useState, useEffect } from 'react';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://m.media-amazon.com/images/I/51vZQIsS4KL.jpg',
    'https://m.media-amazon.com/images/I/51FJTKKTr-L.jpg',
    'https://m.media-amazon.com/images/I/41NmJg+hDdL._SX522_.jpg',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/battery-charger/z/g/f/25-w-quick-charge-3-1-a-mobile-charger-white-nexcen-original-imagxg8uexuz9mug.jpeg?q=70&crop=false'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="pt-20  md:pt-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-[70vh]">
      <div className="mx-4">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Smart Accessories for a Smarter Life
            </h1>
            <p className="text-xl text-blue-100">
              Leading Mobile Charger & Accessories Manufacturer in Delhi. Quality products at competitive prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Shop Now
              </a>
              <a href="#contact" className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative animate__animated animate__fadeInRight w-full">
            <div className="carousel relative overflow-hidden rounded-lg shadow-xl w-full">
              <div 
                className="carousel-inner flex transition-transform duration-500 w-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <img 
                    key={index}
                    src={slide} 
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[400px] object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};