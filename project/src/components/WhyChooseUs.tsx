"use client";

import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl py-24 px-4 rounded-3xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
          alt="Manufacturing Facility"
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
          Trusted OEM Partner for High-Quality Electronics
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          We specialize in manufacturing premium mobile accessories, projectors, and currency counting machines for OEMs. 
          With state-of-the-art technology, stringent quality control, and a commitment to innovation, we ensure that your brand gets the best-in-class products.
        </p>

        {/* Features Grid */}
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg",
              title: "Advanced Manufacturing",
              desc: "Equipped with cutting-edge technology for precision and efficiency.",
            },
            {
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg",
              title: "Stringent Quality Control",
              desc: "Every product undergoes rigorous testing to meet industry standards.",
            },
            {
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg",
              title: "Scalable Production",
              desc: "From small batches to mass production, we cater to all requirements.",
            },
            {
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg",
              title: "Custom OEM Solutions",
              desc: "Tailored product designs to match your brand’s unique specifications.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img src={feature.icon} alt={feature.title} className="w-12 h-12 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-base text-gray-600 mt-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:scale-105 font-medium">
          Partner with Us
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
