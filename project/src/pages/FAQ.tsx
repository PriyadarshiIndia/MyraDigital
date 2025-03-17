import React from 'react'
import { Search, User, Shield, CreditCard, PaintBucket, Package, Settings } from 'lucide-react';

const FAQ = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative pt-36 pb-20 bg-gradient-to-b from-fuchsia-600 to-pink-500 animate-pulse-gradient">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center my-8 animate-fade-in">
            Frequently Asked Questions
          </h1>
          
        </div>
      </div>

       {/* FAQ Sections */}
       <div className="container mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[ 
            { icon: <Package />, title: 'Getting Started', desc: 'Installation and setup instructions' },
            { icon: <User />, title: 'User Account', desc: 'Account management and security' },
            { icon: <Settings />, title: 'Product Features', desc: 'Feature guides and tutorials' },
            { icon: <PaintBucket />, title: 'Customization', desc: 'Theme and layout customization' },
            { icon: <CreditCard />, title: 'Payment', desc: 'Gateway integration and billing' },
            { icon: <Shield />, title: 'Security', desc: 'Data protection and compliance' },
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-pink-100 rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="flex space-x-4 items-center">
                <div className="text-pink-600 w-12 h-12 p-2 rounded-lg bg-white shadow-md flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-700 mb-2">{item.title}</h3>
                  <p className="text-sm text-pink-500">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Team */}
      <div className="bg-pink-100  py-16">
        <div className="container  mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-8 animate-fade-in-up">
            Didn’t find an answer?
          </h2>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-neon-pink">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );

}

export default FAQ