import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Slide Components
const Slide1 = () => (
  <div
    className="w-full h-full flex-shrink-0 relative"
    style={{
      backgroundImage: "url('/img/slide_1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="relative z-10 h-full flex items-center p-8 md:p-16">
      <div className="max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">India's Leading OEM Provider for Projectors & Mobile Accessories</h1>
        <p className="text-xl md:text-2xl mb-8">
          Since 2011, Myra Digital India has been the trusted partner for premium LED/LCD projectors and mobile accessories. Elevate your brand with our high-quality, customizable solutions.
        </p>
        <div className="flex gap-4">
          <a href="/contact">
            <span className="bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition-colors inline-block">
              Partner with Us
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Slide2 = () => (
  <div
    className="w-full h-full flex-shrink-0 relative"
    style={{
      backgroundImage: "url('/img/slide_2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="relative z-10 h-full flex items-center p-8 md:p-16">
      <div className="max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Premium Projectors for Every Need</h1>
        <p className="text-xl md:text-2xl mb-8">
          From high-lumen corporate projectors to 4K Ultra HD home theater systems, we supply cutting-edge projection technology to top brands across India.
        </p>
        <ul className="grid grid-cols-2 gap-2 mb-8">
          <li className="flex items-center">
            <span className="mr-2">✓</span> High-lumen & Portable
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Smart & Short-throw
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> 4K Ultra HD
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Cinema Experience
          </li>
        </ul>
        <div className="flex gap-4">
          <a href="/products">
            <span className="bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition-colors inline-block">
              Explore Our Range
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Slide3 = () => (
  <div
    className="w-full h-full flex-shrink-0 relative"
    style={{
      backgroundImage: "url('/img/slide_3.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="relative z-10 h-full flex items-center p-8 md:p-16">
      <div className="max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Custom OEM Solutions for Your Brand</h1>
        <p className="text-xl md:text-2xl mb-8">
          Choose from our projector models and add your branding—ready for market with your logo and packaging.
        </p>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="flex items-center">
            <span className="text-xl font-bold mr-2">50+</span>
            <span>Projector Models</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-bold mr-2">100%</span>
            <span>Branding Freedom</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-bold mr-2">✓</span>
            <span>No MOQ</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-bold mr-2">✓</span>
            <span>Fast Delivery</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="/oem">
            <span className="bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition-colors inline-block">
              Browse OEM Options
            </span>
          </a>
          <a href="/contact">
            <span className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-block">
              Get Pricing
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);
const Slide4 = () => (
  <div
    className="w-full h-full flex-shrink-0 relative"
    style={{
      backgroundImage: "url('/img/slide_4.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="relative z-10 h-full flex items-center p-8 md:p-16">
      <div className="max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Manufacturing Excellence in Mobile Accessories</h1>
        <p className="text-xl md:text-2xl mb-8">
          Powering India's devices with our state-of-the-art facility: High-wattage chargers, premium data cables, and 10,000mAh power banks—all built to international standards.
        </p>
        <div className="flex items-center gap-8 mb-8">
          <div>
            <div className="text-3xl font-bold">4+</div>
            <p>Molding Lines</p>
          </div>
          <div>
            <div className="text-3xl font-bold">3+</div>
            <p>Soldering Lines</p>
          </div>
          <div>
            <div className="text-3xl font-bold">100%</div>
            <p>Quality Tested</p>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="/mobile-accessories">
            <span className="bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition-colors inline-block">
              View Accessories Catalog
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Slide5 = () => (
  <div className="w-full h-full flex-shrink-0 bg-[#1a365d] flex items-center p-8 md:p-16">
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center justify-between gap-10">
      {/* Left Content */}
      <div className="text-white max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Nationwide Reach, Global Standards</h1>
        <p className="text-xl md:text-2xl mb-8">
          Serving 50+ cities—from Mumbai's entertainment hubs to Bengaluru's IT corridors—with reliable supply chains and China-backed sourcing for competitive pricing.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white/10 p-3 rounded">
            <div className="text-2xl font-bold">12+</div>
            <p className="text-sm">Years Experience</p>
          </div>
          <div className="bg-white/10 p-3 rounded">
            <div className="text-2xl font-bold">500+</div>
            <p className="text-sm">Clients</p>
          </div>
          <div className="bg-white/10 p-3 rounded">
            <div className="text-2xl font-bold">100+</div>
            <p className="text-sm">Product Variants</p>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="/contact">
            <span className="bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition-colors inline-block">
              Contact Our Team
            </span>
          </a>
        </div>
      </div>

      {/* Right Image Card */}
      {/* Right Image Card */}
      <div className="w-full md:w-1/2">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20 h-[400px]">
          <img
            src="/img/slide_5.jpg"
            alt="Global Standards"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
);


// Main HeroSection Component
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />];
  const totalSlides = slides.length;

  const navigate = (direction: "prev" | "next") => {
    setCurrentIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % totalSlides;
      } else {
        return prev === 0 ? totalSlides - 1 : prev - 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      navigate("next");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white hover:bg-white/40 rounded-full h-10 w-10 flex items-center justify-center z-20"
        onClick={() => navigate("prev")}
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white hover:bg-white/40 rounded-full h-10 w-10 flex items-center justify-center z-20"
        onClick={() => navigate("next")}
        aria-label="Next Slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 left-0 w-full flex gap-2 justify-center z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-300 ${index === currentIndex ? "bg-orange-600 w-3 h-3" : "bg-white/50 w-2 h-2 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}