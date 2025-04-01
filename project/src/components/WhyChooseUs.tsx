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
          Leading Importer & OEM Provider for Projectors & Mobile Accessories
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          Myra Digital India Pvt Ltd is a trusted name in high-quality LED & LCD projectors and premium mobile accessories. 
          With over a decade of expertise, we deliver cutting-edge technology, superior quality, and customized OEM solutions to brands across India.
        </p>

        {/* Features Grid */}
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {[  
            {
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg",
              title: "Premium Quality Products",
              desc: "Sourcing from globally recognized manufacturers to ensure superior performance.",
            },
            {
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg",
              title: "Custom OEM Solutions",
              desc: "Personalized projector & accessory designs to match brand-specific needs.",
            },
            {
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg",
              title: "Pan-India Supply Network",
              desc: "Reliable logistics ensuring timely delivery across major cities in India.",
            },
            {
              icon: "https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg",
              title: "State-of-the-Art Manufacturing",
              desc: "Advanced in-house production facilities for top-tier mobile accessories.",
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
        <a href="/contact">
            <span className="">
              Partner With Us
            </span>
          </a>
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
