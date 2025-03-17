import React from "react";

const Highlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Free Shipping",
      description: "Enjoy free shipping on orders above $100.",
      imgLight: "https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg1.svg",
      imgDark: "https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg1dark.svg",
      alt: "Free Shipping",
    },
    {
      id: 2,
      title: "24/7 Customer Support",
      description: "We're here for you anytime at care@support.com.",
      imgLight: "https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg2.svg",
      imgDark: "https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg2dark.svg",
      alt: "24/7 Support",
    },
    {
      id: 3,
      title: "30-Day Money Back",
      description: "Shop with confidence! Hassle-free returns.",
      imgLight: "https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg3.svg",
      imgDark: "https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg3dark.svg",
      alt: "Money Back Guarantee",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-5 p-6 bg-white dark:bg-pink-500 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 flex-shrink-0">
                <img className="dark:hidden" src={item.imgLight} alt={item.alt} />
                <img className="hidden dark:block" src={item.imgDark} alt={item.alt} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-100 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
