import React from 'react';
import { Zap, Monitor, Banknote, Cpu } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      title: "Charging Solutions",
      description: "Fast chargers, wireless pads, and power banks",
      icon: Zap
    },
    {
      title: "Projectors",
      description: "HD projectors for home and business",
      icon: Monitor
    },
    {
      title: "Money Counters",
      description: "Professional note counting machines",
      icon: Banknote
    },
    {
      title: "Smart Accessories",
      description: "Cables, adapters, and more",
      icon: Cpu
    }
  ];

  return (
    <section id="categories" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-[#333333] mb-4">Browse Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need from our wide range of smart accessories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-[#4A90E2]/10 rounded-xl p-8 mb-4 group-hover:bg-[#4A90E2]/20 transition-colors">
                <category.icon className="w-12 h-12 text-[#4A90E2]" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <a href="#" className="text-[#4A90E2] flex items-center group-hover:text-[#50C5B7] transition-colors">
                View Products
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;