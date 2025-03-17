import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // If using lucide-react icons

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      backgroundImage: "url('/img/slide-1.jpg')",
      title: "Premium Collection",
      description: "Explore our curated selection of high-quality products",
      buttonText: "Shop Now",
      link: "/products",
    },
    {
      backgroundImage: "url('/img/slide-2.png')",
      title: "Summer Fashion",
      description: "Explore our latest collection of summer outfits",
      buttonText: "View Collection",
      link: "/summer-collection",
    },
    {
      backgroundImage: "url('/img/slide-3.jpg')",
      title: "Tech Essentials",
      description: "Discover the perfect gadgets for your needs",
      buttonText: "Browse Gadgets",
      link: "/gadgets",
    },
    {
      backgroundImage: "url('/img/slide-4.jpg')",
      title: "Travel Deals",
      description: "Plan your dream vacation with exclusive deals",
      buttonText: "Explore Deals",
      link: "/travel-deals",
    },
    {
      backgroundImage: "url('/img/slide-5.jpg')",
      title: "Smart Home",
      description: "Upgrade your home with smart essentials",
      buttonText: "Discover Solutions",
      link: "/smart-home",
    },
  ];

  const totalSlides = slides.length;

  // Navigate to previous or next slide
  const navigate = (direction:any) => {
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
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
            style={{
              backgroundImage: slide.backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center p-8 md:p-16">
              <div className="max-w-3xl text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                <div className="flex gap-4">
                  {/* Primary Button */}
                  <a href={slide.link}>
                    <button
                      className="bg-primary text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary-dark transition-colors"
                      style={{
                        backgroundColor: "#1e40af", // Example primary color
                        
                      }}
                    >
                      {slide.buttonText}
                    </button>
                  </a>

                  {/* Secondary Button */}
                  <button
                    className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                    style={{
                      borderColor: "white",
                      color: "white",
                    }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
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