import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Slide Components
const Slide1 = () => (
  <div
    className="w-full h-full flex-shrink-0 relative"
    style={{
      backgroundImage: "url('/img/slide-1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="relative z-10 h-full flex items-center p-8 md:p-16">
      <div className="max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Empower Your Devices with Premium Accessories</h1>
        <p className="text-xl md:text-2xl mb-8">
          We specialize in crafting high-quality mobile accessories designed to meet the unique needs of OEMs. Elevate your product offerings with our innovative solutions.
        </p>
        <div className="flex gap-4">
          <a href="/contact">
            <span className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block">
              Contact Us
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
      backgroundImage: "url('/img/slide-2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="relative z-10 h-full flex items-center p-8 md:p-16">
      <div className="max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Tailored Solutions for Every OEM Partner</h1>
        <p className="text-xl md:text-2xl mb-8">
          From custom-branded chargers to bespoke packaging, we deliver scalable accessory solutions tailored to your business requirements.
        </p>
        <div className="flex gap-4">
          <a href="/contact">
            <span className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block">
              Contact Us
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
      backgroundImage: "url('/img/slide-3.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="relative z-10 h-full flex items-center p-8 md:p-16">
      <div className="max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Stay Ahead with Advanced Accessories</h1>
        <p className="text-xl md:text-2xl mb-8">
          Our cutting-edge technology ensures compatibility, durability, and performance. Partner with us to integrate the latest innovations into your lineup.
        </p>
        <div className="flex gap-4">
          <a href="/contact">
            <span className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block">
              Contact Us
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
      backgroundImage: "url('/img/slide-4.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="relative z-10 h-full flex items-center p-8 md:p-16">
      <div className="max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Serving OEMs Worldwide with Reliable Supply Chains</h1>
        <p className="text-xl md:text-2xl mb-8">
          With manufacturing hubs across the globe and localized support, we ensure timely delivery and exceptional service wherever you operate.
        </p>
        <div className="flex gap-4">
          <a href="/contact">
            <span className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block">
              Contact Us
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Slide5 = () => (
  <div
    className="w-full h-full flex-shrink-0 relative"
    style={{
      backgroundImage: "url('/img/slide-5.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="relative z-10 h-full flex items-center p-8 md:p-16">
      <div className="max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Building Long-Term Partnerships for Success</h1>
        <p className="text-xl md:text-2xl mb-8">
          More than just suppliers, we are your trusted partners in innovation. Together, let's create impactful products that drive growth.
        </p>
        <div className="flex gap-4">
          <a href="/contact">
            <span className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block">
              Contact Us
            </span>
          </a>
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

  // Navigate to previous or next slide
  const navigate = (direction: any) => {
    setCurrentIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % totalSlides;
      } else {
        return prev === 0 ? totalSlides - 1 : prev - 1;
      }
    });
  };

  // Auto-rotate slides
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 text-white hover:bg-background/40 rounded-full h-10 w-10 flex items-center justify-center"
        onClick={() => navigate("prev")}
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 text-white hover:bg-background/40 rounded-full h-10 w-10 flex items-center justify-center"
        onClick={() => navigate("next")}
        aria-label="Next Slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 left-0 w-full flex gap-2 justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-3 h-3" : "bg-white/50 w-2 h-2 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}