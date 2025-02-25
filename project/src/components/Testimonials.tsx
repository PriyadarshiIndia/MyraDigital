import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Electronics Retailer",
      image: "https://brightcharger.in/img/gallery/ceo-manoj-roy.jpg",
      content: "Excellent quality chargers and accessories. Fast delivery and great customer service. Highly recommended!"
    },
    {
      name: "Priya Singh",
      role: "Regular Customer",
      image: "https://brightcharger.in/img/thumb.jpg",
      content: "The data cables and chargers are very durable. Using them for months without any issues. Great value for money!"
    },
    {
      name: "Amit Patel",
      role: "Mobile Shop Owner",
      image: "https://brightcharger.in/img/gallery/ceo-manoj-roy.jpg",
      content: "Best wholesale supplier for mobile accessories. Quality products with competitive pricing. Timely delivery every time!"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">Trusted by businesses and individuals across India</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};