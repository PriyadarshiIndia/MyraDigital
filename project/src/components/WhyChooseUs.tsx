"use client"

import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl py-24 px-4 rounded-3xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
          alt="Ongoing meeting"
          className="rounded-lg shadow-lg w-full hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-shadow duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-3/4 text-center md:text-left">
        {/* Welcome Tag */}
        <p className="text-sm text-pink-400 uppercase font-medium tracking-wider">
          Why Choose Us
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
          Your Success, Our Priority
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          Whether article spirits new her covered hastily sitting her. Money witty books nor son add.
        </p>

        {/* Features Grid */}
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {[
            { 
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg", 
              title: "Time Prompt", 
              desc: "We value your time and ensure prompt service." 
            },
            { 
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg", 
              title: "User Friendly", 
              desc: "Our services are designed to be intuitive and easy to use." 
            },
            { 
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg", 
              title: "Creative Ideas", 
              desc: "We bring innovative and fresh ideas to the table." 
            },
            { 
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg", 
              title: "Achievements", 
              desc: "Our track record speaks for itself with numerous success stories." 
            }
          ].map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className="w-12 h-12 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-base text-gray-600 mt-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:scale-105 font-medium">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;