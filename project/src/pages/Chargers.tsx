import { useState, useEffect } from "react";
import ReactGA from "react-ga4"; // Import the default export for Google Analytics
import EnquiryModal from "../components/EnquiryModal";
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

export default function Chargers() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Track page view when the component mounts
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/chargers" });
  }, []);

  const chargers: Product[] = [
    {
      id: 1,
      title: "20W PD Charger",
      description:
        "Boost charging speed with our 20W PD Charger, designed for OEMs seeking reliable, high-efficiency power solutions. Featuring USB-C Power Delivery (PD) technology, it ensures fast, safe, and efficient charging for smartphones, tablets, and other devices. Built with compact design, overvoltage protection, and premium components, our charger meets global safety standards for seamless integration into your product lineup. Custom branding and bulk orders available.",
      image: "img/chargers/PD-20w-charger.jpg",
      specifications: {
        Input: "100-240V AC, 50/60Hz",
        Output: "20W",
        Compatibility: "All kind of  devices",
        Features: "Temperature control, Foreign object detection",
        Dimensions: "100mm x 100mm x 10mm",
        Weight: "120g",
      },
    },
    {
      id: 2,
      title: "25W PD Charger",
      description:
        "Upgrade to 25W PD Fast Charging with our high-performance USB-C Power Delivery (PD) charger, designed for OEMs. Delivering ultra-fast, efficient, and safe charging, it’s perfect for smartphones, tablets, and other PD-enabled devices. Engineered with advanced safety features, compact design, and premium components, it meets global quality standards for seamless OEM integration. Custom branding and bulk orders available.",
      image: "img/chargers/PD-25w-charger.jpg",
      specifications: {
        Input: "100-240V AC, 50/60Hz",
        Output: "65W Max (USB-C PD)",
        Protocols: "USB-PD, QC 4.0, PPS",
        Technology: "GaN (Gallium Nitride)",
        Dimensions: "55mm x 55mm x 30mm",
        Weight: "100g",
      },
    },
    {
      id: 3,
      title: "25W Type C PD Charger",
      description:
        "Power up with our 25W Type-C PD Charger, engineered for fast, efficient, and safe charging. Designed for OEMs, it features USB-C Power Delivery (PD) technology to deliver high-speed charging for smartphones, tablets, and other devices. With a compact design, advanced safety features, and premium components, it meets global quality standards for seamless integration. Custom branding and bulk orders available.",
      image: "img/chargers/PD-25w-typeC-charger.jpg",
      specifications: {
        Input: "100-240V AC, 50/60Hz",
        "Total Output": "100W Max",
        Ports: "4x USB-A, 2x USB-C",
        "USB-A Output": "5V/2.4A per port",
        "USB-C Output": "20W PD per port",
        Dimensions: "120mm x 80mm x 25mm",
        Weight: "250g",
      },
    },
    {
      id: 4,
      title: "45W Type C PD Charger",
      description:
        "Experience ultra-fast charging with our 45W USB-C PD Charger, designed for OEMs seeking high-efficiency power solutions. Equipped with Power Delivery (PD) technology, it delivers lightning-fast, safe, and reliable charging for laptops, smartphones, tablets, and other USB-C devices. Featuring a compact design, advanced safety protections, and premium components, it meets global quality standards for seamless OEM integration. Custom branding and bulk orders available.",
      image: "img/chargers/PD-45w-charger.jpg",
      specifications: {
        Input: "100-240V AC, 50/60Hz",
        "Total Output": "100W Max",
        Ports: "4x USB-A, 2x USB-C",
        "USB-A Output": "5V/2.4A per port",
        "USB-C Output": "20W PD per port",
        Dimensions: "120mm x 80mm x 25mm",
        Weight: "250g",
      },
    },
    {
      id: 5,
      title: "67W PD Charger",
      description:
        "Unlock blazing-fast charging with our 67W USB-C PD Charger, designed for OEMs seeking high-performance power solutions. With Power Delivery (PD) technology, it delivers efficient, safe, and rapid charging for laptops, smartphones, tablets, and other USB-C devices. Engineered with advanced safety features, a compact design, and premium components, it meets global quality standards for seamless OEM integration. Custom branding and bulk orders available.",
      image: "img/chargers/PD-67w-charger.jpg",
      specifications: {
        Input: "100-240V AC, 50/60Hz",
        "Total Output": "100W Max",
        Ports: "4x USB-A, 2x USB-C",
        "USB-A Output": "5V/2.4A per port",
        "USB-C Output": "20W PD per port",
        Dimensions: "120mm x 80mm x 25mm",
        Weight: "250g",
      },
    },
    {
      id: 6,
      title: "80W Type C PD Charger",
      description:
        "Power up with our 80W Type-C PD Charger, engineered for fast, efficient, and safe charging. Designed for OEMs, it features USB-C Power Delivery (PD) technology to deliver high-speed charging for smartphones, tablets, and other devices. With a compact design, advanced safety features, and premium components, it meets global quality standards for seamless integration. Custom branding and bulk orders available.",
      image: "img/chargers/PD-80w-charger.jpg",
      specifications: {
        Input: "100-240V AC, 50/60Hz",
        "Total Output": "100W Max",
        Ports: "4x USB-A, 2x USB-C",
        "USB-A Output": "5V/2.4A per port",
        "USB-C Output": "20W PD per port",
        Dimensions: "120mm x 80mm x 25mm",
        Weight: "250g",
      },
    },
  ];
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // Track hash navigation event
        ReactGA.send({
          hitType: "event",
          eventCategory: "Navigation",
          eventAction: "Hash Navigation",
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
      hitType: "event",
      eventCategory: "User Interaction",
      eventAction: "Button Click",
      eventLabel: `Get Quote - ${product.title}`,
    });
  };

  const closeModals = () => {
    setIsEnquireModalOpen(false);
    setSelectedProduct(null);

    // Track modal close event
    ReactGA.send({
      hitType: "event",
      eventCategory: "User Interaction",
      eventAction: "Modal Close",
      eventLabel: "Enquiry Modal",
    });
  };

  const handleBannerClick = () => {
    // Track banner click event
    ReactGA.send({
      hitType: "event",
      eventCategory: "User Interaction",
      eventAction: "Banner Click",
      eventLabel: "Chargers Banner",
    });
  };

  const handleCTAClick = () => {
    // Track "Contact Us" button click
    ReactGA.send({
      hitType: "event",
      eventCategory: "User Interaction",
      eventAction: "Button Click",
      eventLabel: "Contact Us - CTA",
    });
  };

  return (
    <div className="min-h-screen bg-white">

       <Helmet>
        <title>High-Performance Chargers for OEMs | Fast & Reliable Power Solutions</title>
        <meta name="description" content="Explore premium fast chargers like 20W PD, 25W Type-C, 45W, 67W, and 80W USB-C PD chargers. Designed for OEMs, these reliable power solutions ensure efficient, safe, and rapid charging for all devices." />
        <meta name="keywords" content="USB-C PD chargers, fast charging solutions, OEM chargers, 20W PD charger, 25W Type-C charger, 45W PD charger, 67W PD charger, 80W PD charger, high-efficiency power solutions, custom branding chargers" />
        <link rel="canonical" href="https://www.myra-digital.com/chargers" />
        <meta property="og:title" content="High-Performance Chargers for OEMs | Fast & Reliable Power Solutions" />
        <meta property="og:description" content="Explore premium fast chargers like 20W PD, 25W Type-C, 45W, 67W, and 80W USB-C PD chargers. Designed for OEMs, these reliable power solutions ensure efficient, safe, and rapid charging for all devices." />
        <meta property="og:image" content="https://www.myra-digital.com/img/chargers/charger_hero.png" />
        <meta property="og:url" content="https://www.myra-digital.com/chargers" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="High-Performance Chargers for OEMs | Fast & Reliable Power Solutions" />
        <meta name="twitter:description" content="Explore premium fast chargers like 20W PD, 25W Type-C, 45W, 67W, and 80W USB-C PD chargers. Designed for OEMs, these reliable power solutions ensure efficient, safe, and rapid charging for all devices." />
        <meta name="twitter:image" content="https://www.myra-digital.com.com/img/logo.png" />
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
            src="img/chargers/charger_hero.png"
            alt="Chargers Background"
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
                    Power Solutions
                  </span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-fuchsia-500 mb-8 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-md">
                  Explore our premium collection of fast, reliable, and efficient
                  charging solutions for all your devices.
                </p>
              </div>
              {/* Right Image (hidden on mobile) */}
              <div className="hidden lg:block relative">
                <img
                  src="/hero-product.png"
                  alt="Featured Charger"
                  className="absolute -right-16 -bottom-16 w-[600px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="introduction">
  <div className="container mx-auto px-4 pt-8">
    <div className="max-w-7xl mx-auto text-center">
      
      <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-fuchsia-500 mb-8 mx-auto rounded-full"></div>
      
      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
        As a <strong>leading charger manufacturer</strong>, we specialize in high-performance PD fast charging solutions for smartphones, tablets, and laptops. Our <strong>USB-C Power Delivery chargers</strong> combine cutting-edge technology, safety certifications, and OEM-ready designs for businesses seeking reliable power solutions.
      </p>
      </div>
    </div>
  </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">Featured</span> Chargers
        </h2>
        <div className="space-y-32">
          {chargers.map((product, index) => {
            const productHash = `product-${product.title.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <div
                key={product.id}
                id={productHash}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-[700px] relative rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 border-2 border-pink-500/30 rounded-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/5 to-transparent z-10"></div>
                  <img
                    src={product.image || "/placeholder.jpg"}
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
          <a
            href="/contact"
            className="px-10 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-[0_2px_15px_rgba(236,72,153,0.4)]"
          >
            Contact Us
          </a>
        </div>
      </div>
      <EnquiryModal isOpen={isEnquireModalOpen} onClose={closeModals} product={selectedProduct} />
    </div>
  );
}