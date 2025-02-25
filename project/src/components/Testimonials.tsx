import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  verified: boolean;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "The wireless charging pad is amazing! Fast charging and sleek design. Exactly what I needed for my home office setup.",
      verified: true
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "The mini projector exceeded my expectations. Crystal clear image and easy setup. Perfect for movie nights!",
      verified: true
    },
    {
      name: "Emily Wilson",
      rating: 5,
      comment: "Customer service was exceptional. They helped me choose the perfect charging solution for my needs.",
      verified: true
    }
  ];

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, testimonials.length - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-[#333333] mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued customers
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={trackRef}
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full md:min-w-[33.333%] p-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#4A90E2]/20 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-[#4A90E2]" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-[#333333]">{testimonial.name}</h4>
                        <div className="flex text-[#4A90E2]">{'★'.repeat(testimonial.rating)}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                    {testimonial.verified && (
                      <span className="text-sm text-[#50C5B7]">Verified Purchase</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-[#4A90E2] hover:text-white transition-colors disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === testimonials.length - 1}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-[#4A90E2] hover:text-white transition-colors disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;