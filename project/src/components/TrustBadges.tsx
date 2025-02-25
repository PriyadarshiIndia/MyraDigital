import React from 'react';
import { Package, Shield, RefreshCw, Award } from 'lucide-react';

export const TrustBadges = () => {
  const badges = [
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Free Shipping",
      description: "On orders above ₹1000"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure Payment",
      description: "100% secure payment"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
      title: "Money Back Guarantee",
      description: "7-day return policy"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Assured",
      description: "6-month warranty"
    }
  ];

  return (
    <section id="trust-badges" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm text-center animate__animated animate__fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                {badge.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{badge.title}</h3>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold text-gray-800 mb-6">Trusted Payment Partners</h4>
          <div className="flex justify-center items-center space-x-8">
            {['UPI', 'Card', 'COD', 'Net'].map((method, index) => (
              <div 
                key={index}
                className="w-16 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center"
              >
                <span className="text-gray-600 font-semibold">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};