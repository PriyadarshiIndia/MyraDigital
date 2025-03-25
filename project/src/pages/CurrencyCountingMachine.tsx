'use client';
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4'; // Import the default export for Google Analytics
import EnquiryModal from '../components/EnquiryModal';
import { Helmet } from 'react-helmet-async';

interface Specification {
  [key: string]: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  specifications: Specification;
}

const CurrencyCountingMachine = () => {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Track page view when the component mounts
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/currency-counting-machine' });
  }, []);

  const bannerData = {
    title: 'Currency Counting Machine',
    description: 'Check out our latest collection of premium products',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f6eb5b0',
  };

  const products: Product[] = [
    {
      id: 1,
      title: 'V30 Note Counting Machine',
      description:
        'The V30 LED Display Mini Portable Currency Counting Machine is a high-speed, OEM-ready solution designed for efficient cash handling. With a counting speed of 600 notes per minute and an adjustable speed feature, it ensures smooth operation for INR, USD, and EURO currencies. Its LED touch screen interface provides seamless control, while its battery and AC adapter compatibility offer ultimate portability. Ideal for OEMs, this compact yet powerful machine supports batch counting and denomination breakup, making it perfect for banks, retail, and financial institutions. Order in bulk for OEM customization!',
      image: 'img/countingMachine/v30.jpeg',
      specifications: {
        'Counting Speed': '600 notes/min',
        'Detection Technology': 'UV Sensor',
        'Suitable Currency': 'INR, USD, EURO',
        'Adjustable Speed': 'Yes',
        'Hopper Capacity': '600 Notes',
        'Display Type': 'LED',
      },
    },
  ];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });

        // Track hash navigation event
        ReactGA.send({
          hitType: 'event',
          eventCategory: 'Navigation',
          eventAction: 'Hash Navigation',
          eventLabel: hash,
        });
      }
    }
  }, []);

  const openEnquireModal = (product: Product) => {
    setSelectedProduct(product);
    setIsEnquireModalOpen(true);

    // Track "Get Quote" button click
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'User Interaction',
      eventAction: 'Button Click',
      eventLabel: `Get Quote - ${product.title}`,
    });
  };

  const closeModals = () => {
    setIsEnquireModalOpen(false);
    setSelectedProduct(null);

    // Track modal close event
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'User Interaction',
      eventAction: 'Modal Close',
      eventLabel: 'Enquiry Modal',
    });
  };

  const handleBannerClick = () => {
    // Track banner click event
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'User Interaction',
      eventAction: 'Banner Click',
      eventLabel: 'Currency Counting Machine Banner',
    });
  };

  const handleCTAClick = () => {
    // Track "Contact Us" button click
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'User Interaction',
      eventAction: 'Button Click',
      eventLabel: 'Contact Us - CTA',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Currency Counting Machine | High-Speed OEM Solutions for Cash Handling</title>
        <meta
          name="description"
          content="Explore our V30 LED Display Mini Portable Currency Counting Machine, designed for efficient cash handling with UV detection, adjustable speed, and batch counting. Ideal for banks, retail, and financial institutions. Custom OEM solutions available."
        />
        <meta name="keywords" content="currency counting machine, cash handling solutions, OEM currency counter, V30 counting machine, portable cash counter, UV sensor counting machine, INR USD EURO counting machine" />
        <link rel="canonical" href="https://www.myra-digital.com/currency-counting-machine" />
        <meta property="og:title" content="Currency Counting Machine | High-Speed OEM Solutions for Cash Handling" />
        <meta
          property="og:description"
          content="Explore our V30 LED Display Mini Portable Currency Counting Machine, designed for efficient cash handling with UV detection, adjustable speed, and batch counting. Ideal for banks, retail, and financial institutions. Custom OEM solutions available."
        />
        <meta property="og:image" content="https://www.myra-digital.com/img/countingMachine/currencyCounting_hero.png" />
        <meta property="og:url" content="https://www.myra-digital.com/currency-counting-machine" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Currency Counting Machine | High-Speed OEM Solutions for Cash Handling" />
        <meta
          name="twitter:description"
          content="Explore our V30 LED Display Mini Portable Currency Counting Machine, designed for efficient cash handling with UV detection, adjustable speed, and batch counting. Ideal for banks, retail, and financial institutions. Custom OEM solutions available."
        />
        <meta name="twitter:image" content="https://www.myra-digital.com/img/countingMachine/currencyCounting_hero.png" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Banner Section */}
      <div
        className="relative h-[600px] overflow-hidden cursor-pointer"
        onClick={handleBannerClick}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="img/countingMachine/currencyCounting_hero.png"
            alt="Currency Counting Machine Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left Content */}
              <div className="flex flex-col justify-center py-24 lg:py-0">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                    {bannerData.title}
                  </span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-fuchsia-500 mb-8 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-md">
                  {bannerData.description}
                </p>
              </div>

              {/* Right Image (hidden on mobile) */}
              <div className="hidden lg:block relative">
                <img
                  src="/hero-product.png"
                  alt="Featured Currency Counting Machine"
                  className="absolute -right-16 -bottom-16 w-[600px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">Featured</span> Products
        </h2>

        <div className="space-y-32">
          {products.map((product, index) => {
            const productHash = `product-${product.title.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <div
                key={product.id}
                id={productHash}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-[750px] relative rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 border-2 border-pink-500/30 rounded-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent z-10"></div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-3xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                        {product.title}
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                        {product.title}
                      </span>
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                      <span className="h-px w-6 bg-pink-500 mr-3"></span>
                      Specifications
                    </h4>
                    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
                      <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="divide-y divide-gray-200">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <tr key={key} className="hover:bg-pink-50 transition-colors duration-150">
                              <td className="px-6 py-4 text-sm font-medium text-pink-500 w-1/3">
                                {key}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <button
                    onClick={() => openEnquireModal(product)}
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold rounded-xl hover:from-pink-600 hover:to-fuchsia-600 transition-all duration-300 shadow-[0_2px_15px_rgba(236,72,153,0.3)] hover:shadow-[0_4px_20px_rgba(236,72,153,0.4)] transform hover:-translate-y-1"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-pink-100 to-fuchsia-100 py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-pink-500">Power Up</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Contact our team for custom charging solutions tailored to your specific needs.
          </p>
          <button
            onClick={handleCTAClick}
            className="px-10 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-[0_2px_15px_rgba(236,72,153,0.4)]"
          >
            Contact Us
          </button>
        </div>
      </div>

      <EnquiryModal isOpen={isEnquireModalOpen} onClose={closeModals} product={selectedProduct} />
    </div>
  );
};

export default CurrencyCountingMachine;