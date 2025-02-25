import React from 'react';
import { Check } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: "https://brightcharger.in/img/icons/img-1.png",
      title: "Premium Quality",
      description: "Our products undergo rigorous quality testing to ensure durability and performance that exceeds industry standards."
    },
    {
      icon: "https://brightcharger.in/img/icons/img-2.png",
      title: "Advanced Technology",
      description: "Incorporating the latest charging technologies for faster, safer, and more efficient power delivery."
    },
    {
      icon: "https://brightcharger.in/img/icons/img-3.png",
      title: "Customer Support",
      description: "Dedicated customer service team available to assist you with any queries or concerns."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600">Experience excellence in mobile accessories with our premium products</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <img src={benefit.icon} alt={benefit.title} className="w-12 h-12" />
                <h3 className="text-xl font-semibold text-gray-800 ml-4">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <img 
              src="https://brightcharger.in/img/about-us-img.jpg" 
              alt="About Us" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-6 animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-bold text-gray-800">Our Commitment to Excellence</h3>
            <div className="space-y-4">
              {['Fast Charging Technology', 'Durable Materials', 'Safety Certified Products'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-blue-600" />
                  <p className="ml-3 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};