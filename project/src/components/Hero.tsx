import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-neutral-900 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Smart Solutions for 
              <span className="text-[#4A90E2]"> Modern Technology</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl">
              Discover our premium collection of smart accessories, from high-speed charging solutions to professional-grade equipment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#4A90E2] hover:bg-[#50C5B7] text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2 animate__animated animate__pulse animate__infinite">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-[#4A90E2] text-white px-8 py-4 rounded-lg hover:bg-[#4A90E2] transition-all duration-300">
                Contact Sales
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <h3 className="text-[#50C5B7] text-3xl font-bold">500+</h3>
                <p className="text-gray-400">Products</p>
              </div>
              <div className="text-center">
                <h3 className="text-[#50C5B7] text-3xl font-bold">24/7</h3>
                <p className="text-gray-400">Support</p>
              </div>
              <div className="text-center">
                <h3 className="text-[#50C5B7] text-3xl font-bold">100%</h3>
                <p className="text-gray-400">Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate__animated animate__fadeInRight">
            <div className="bg-gradient-to-r from-[#4A90E2]/20 to-[#50C5B7]/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-800 rounded-lg p-4 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-32 bg-neutral-700 rounded-lg mb-4"></div>
                  <h3 className="text-white text-lg font-semibold">Smart Chargers</h3>
                </div>
                <div className="bg-neutral-800 rounded-lg p-4 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-32 bg-neutral-700 rounded-lg mb-4"></div>
                  <h3 className="text-white text-lg font-semibold">Projectors</h3>
                </div>
                <div className="bg-neutral-800 rounded-lg p-4 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-32 bg-neutral-700 rounded-lg mb-4"></div>
                  <h3 className="text-white text-lg font-semibold">Cables</h3>
                </div>
                <div className="bg-neutral-800 rounded-lg p-4 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-32 bg-neutral-700 rounded-lg mb-4"></div>
                  <h3 className="text-white text-lg font-semibold">Accessories</h3>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#50C5B7] rounded-full blur-2xl opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#4A90E2] rounded-full blur-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;