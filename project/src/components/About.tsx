import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Products" }
  ];

  const features = [
    { title: "Premium Quality", description: "All products undergo rigorous quality testing" },
    { title: "24/7 Support", description: "Expert assistance whenever you need it" },
    { title: "Fast Shipping", description: "Quick delivery to your doorstep" }
  ];

  return (
    <section id="about" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h2 className="text-4xl font-bold text-[#333333] mb-6">
              Your Trusted Partner in Smart Technology
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since 2010, we've been at the forefront of providing cutting-edge smart accessories 
              and technology solutions to customers worldwide. Our commitment to quality and 
              innovation has made us a leader in the industry.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-[#4A90E2] text-3xl font-bold mb-2">{stat.number}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-[#50C5B7] rounded-full p-2 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#333333] mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate__animated animate__fadeInRight">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-[#4A90E2]/10 rounded-lg"></div>
                <div className="aspect-square bg-[#50C5B7]/10 rounded-lg"></div>
                <div className="aspect-square bg-[#50C5B7]/10 rounded-lg"></div>
                <div className="aspect-square bg-[#4A90E2]/10 rounded-lg"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#4A90E2] rounded-full opacity-10 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#50C5B7] rounded-full opacity-10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;