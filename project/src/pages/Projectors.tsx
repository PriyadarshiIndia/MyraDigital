'use client';
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4'; // Import Google Analytics
import EnquiryModal from '../components/EnquiryModal';

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

export default function Projectors() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Track page view when the component mounts
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/projectors' });
  }, []);

  const products: Product[] = [
    {
      id: 1,
      title: "HY300 Free Style Projector",
      description: "Experience crystal-clear visuals with our Native 720P HD Smart Projector, supporting 1080P, 2K, and 4K decoding. Featuring Android 11 OS, built-in Netflix, Prime Video, and YouTube, wireless screen mirroring, and auto keystone correction, it delivers seamless entertainment and presentations. With 260 ANSI Lumens brightness, Hi-Fi stereo sound, HDMI, USB, Wi-Fi, and Bluetooth connectivity, this lightweight, travel-friendly projector is perfect for home, office, or on-the-go use. Long-lasting LED lamp (50,000+ hours) & 180° rotation ensure optimal performance. Ideal for OEMs looking for a high-demand, innovative product.",
      image: "img/projectors/hy300.jpg",
      specifications: {
        Resolution: "3840×2160 (4K)",
        Brightness: "2500 lumens",
        Throw_Ratio: "0.25:1",
        Connectivity: "HDMI 2.1, USB-C, Wi-Fi 6",
        Features: "Auto focus, Voice control",
        Dimensions: "450mm x 380mm x 120mm"
      }
    },
    {
      id: 2,
      title: "Handy Projector",
      description: "Enjoy stunning True 1080P Full HD resolution with 3000 lumens brightness and 1500:1 contrast ratio for crystal-clear visuals. Featuring 2.4G Wi-Fi for smooth streaming, AI voice control, enhanced stereo sound, and 360° flip projection, this compact, durable projector is perfect for movies, gaming, and presentations. With Bluetooth 4.1, HDMI, USB, and Wi-Fi connectivity, plus a 50,000-hour LED lamp lifespan, it's an ideal home theater or office solution. OEMs – seize the demand for smart, high-quality projection today!",
      image: "img/projectors/handy.jpg",
      specifications: {
        Resolution: "1920×1080 (Full HD)",
        Brightness: "800 lumens",
        Battery: "8-hour续航",
        Connectivity: "HDMI, USB, Bluetooth",
        Features: "Tripod included, 360° rotation",
        Weight: "1.8kg"
      }
    },
    {
      id: 3,
      title: "P6 Projector",
      description: "Experience sharp, vibrant visuals with 1000 Lumens brightness, native 800x480 resolution (supports Full HD 1080P), and a 1000:1 contrast ratio. Enjoy a 120-inch projection size, manual keystone correction, and multiple connectivity options (HDMI, VGA, USB, AV, 3.5mm audio). With a 50,000-hour lamp life, built-in speaker, and mounting support, this compact, high-performance projector is perfect for home entertainment and presentations. OEMs – bring a budget-friendly, feature-packed projector to your customers today!",
      image: "img/projectors/P6.jpg",
      specifications: {
        Resolution: "4096×2160 (4K DCI)",
        Brightness: "5000 lumens",
        Light_Source: "Laser phosphor",
        Connectivity: "HDBaseT, HDMI 2.0",
        Features: "Lens shift, 3D ready",
        Dimensions: "580mm x 420mm x 240mm"
      }
    },
    {
      id: 4,
      title: "P7 Projector",
      description: "Experience clear and vibrant visuals with 2000 lumens brightness, 800x600 native resolution (supports 720p & 1080p), and a 1000:1 contrast ratio. With a 37-130 inch projection size, manual keystone correction, and multiple connectivity options (HDMI, USB, SD card, VGA, AV, TV input), this projector is perfect for home entertainment and presentations. Featuring a 20,000+ hour LED lamp, built-in 5W speaker, and mounting flexibility, it's an affordable and feature-rich choice. OEMs – offer a high-demand, budget-friendly projector today!",
      image: "img/projectors/P7.jpeg",
      specifications: {
        Resolution: "4096×2160 (4K DCI)",
        Brightness: "5000 lumens",
        Light_Source: "Laser phosphor",
        Connectivity: "HDBaseT, HDMI 2.0",
        Features: "Lens shift, 3D ready",
        Dimensions: "580mm x 420mm x 240mm"
      }
    },
    {
      id: 5,
      title: "Q3 White Projector",
      description: "Enjoy 720P HD resolution (supports 1080P) with 3000 lumens brightness and a 2000:1 contrast ratio for clear, vibrant visuals. Featuring built-in Wi-Fi, iOS Cast & Miracast for wireless streaming, and pre-installed YouTube & Koala TV, this projector is perfect for home entertainment, business, and education. With HDMI, USB, VGA, SD card, and AV ports, ultra-quiet 20dB operation, and a 30,000-hour LED lamp, it’s an ideal choice for OEMs looking for a high-demand, feature-rich projector.",
      image: "img/projectors/HQ3W-8.jpg",
      specifications: {
        Resolution: "4096×2160 (4K DCI)",
        Brightness: "5000 lumens",
        Light_Source: "Laser phosphor",
        Connectivity: "HDBaseT, HDMI 2.0",
        Features: "Lens shift, 3D ready",
        Dimensions: "580mm x 420mm x 240mm"
      }
    },
    {
      id: 6,
      title: "X1 Pro Projector",
      description: "Experience crystal-clear 1080P Full HD projection (supports 4K content) with 6500 lumens brightness for vibrant visuals. Powered by Android 13, enjoy seamless app integration via the Google Play Store for direct streaming. Featuring Wi-Fi 6 & Bluetooth 5.0, auto keystone correction, and built-in high-quality speakers, this projector ensures an immersive home theater experience. With HDMI, USB, and AUX connectivity, it's perfect for movies, gaming, and presentations. OEMs – bring the latest smart projection technology to your customers today!",
      image: "img/projectors/x1-pro.jpg",
      specifications: {
        Resolution: "4096×2160 (4K DCI)",
        Brightness: "5000 lumens",
        Light_Source: "Laser phosphor",
        Connectivity: "HDBaseT, HDMI 2.0",
        Features: "Lens shift, 3D ready",
        Dimensions: "580mm x 420mm x 240mm"
      }
    },
    {
      id: 7,
      title: "X3 Pro Projector",
      description: "Experience stunning 1080P Full HD visuals (supports 4K content) with 10,500 lumens brightness, ensuring crisp, vibrant images in any lighting condition. Powered by Android 12, enjoy built-in apps like YouTube, Prime Video, and Netflix for seamless entertainment. Featuring instant auto-focus, Wi-Fi & Bluetooth connectivity, and a 40-200 inch adjustable screen size, this projector is perfect for home theaters, presentations, and gaming. With dual HDMI, USB, LAN, AUX, and headphone jack, it offers versatile connectivity. OEMs – bring the future of smart projection to your customers today!",
      image: "img/projectors/X3-pro.jpeg",
      specifications: {
        Resolution: "4096×2160 (4K DCI)",
        Brightness: "5000 lumens",
        Light_Source: "Laser phosphor",
        Connectivity: "HDBaseT, HDMI 2.0",
        Features: "Lens shift, 3D ready",
        Dimensions: "580mm x 420mm x 240mm"
      }
    },
    {
      id: 8,
      title: "X4 Projector",
      description: "Experience stunning 1080P Full HD visuals (supports 4K content) with 10,500 lumens brightness, ensuring crystal-clear, vibrant images even in bright environments. Powered by Android 12, stream directly from Netflix, YouTube, and Prime Video without extra devices. Featuring auto-focus, auto keystone correction, and wireless screen mirroring (AirPlay & Miracast), it delivers a hassle-free, immersive viewing experience. With Wi-Fi, Bluetooth 5.0, HDMI, USB, and Dolby Audio dual 5W speakers, it's perfect for home theaters, gaming, and business presentations. OEMs – bring next-gen projection technology to your customers today!",
      image: "img/projectors/X4.jpg",
      specifications: {
        Resolution: "4096×2160 (4K DCI)",
        Brightness: "5000 lumens",
        Light_Source: "Laser phosphor",
        Connectivity: "HDBaseT, HDMI 2.0",
        Features: "Lens shift, 3D ready",
        Dimensions: "580mm x 420mm x 240mm"
      }
    },
    {
      id: 9,
      title: "RD828 Projector",
      description: "Enjoy crisp 720P HD visuals with 3000 lumens brightness and a 1500:1 contrast ratio for clear, vibrant images. Featuring a 3.93-inch LCD TFT display, manual focus, electrical zoom, and ±15° keystone correction, this projector ensures perfect image alignment. With HDMI, USB, AV, and audio out ports, it's compatible with laptops, gaming consoles, and more. The ultra-quiet (<25 dB) operation, 50,000-hour LED lamp life, and portable design make it ideal for home entertainment, business presentations, and travel. OEMs – bring an affordable, high-performance projector to market today!",
      image: "img/projectors/RD828.jpg",
      specifications: {
        Resolution: "4096×2160 (4K DCI)",
        Brightness: "5000 lumens",
        Light_Source: "Laser phosphor",
        Connectivity: "HDBaseT, HDMI 2.0",
        Features: "Lens shift, 3D ready",
        Dimensions: "580mm x 420mm x 240mm"
      }
    }
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
      eventLabel: 'Projectors Banner',
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
      {/* Hero Banner Section */}
      <div
        className="relative h-[600px] overflow-hidden cursor-pointer"
        onClick={handleBannerClick}
      >
        <div className="absolute inset-0">
          <img
            src="img/projectors/projector_hero.png"
            alt="Projectors Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="flex flex-col justify-center py-24 lg:py-0">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                    Big Screen Experience
                  </span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-fuchsia-500 mb-8 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-md">
                  Premium projectors for home cinema, professional presentations, and large-scale installations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">Featured</span> Projectors
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
                <div className="w-full lg:w-1/2 h-[650px] relative rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 border-2 border-pink-500/30 rounded-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent z-10"></div>
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
            Ready to <span className="text-pink-500">Project</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Transform your viewing experience with our professional projection solutions
          </p>
          <button
            onClick={handleCTAClick}
            className="px-10 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-[0_2px_15px_rgba(236,72,153,0.4)]"
          >
            <a href="/contact">Contact Us</a>
          </button>
        </div>
      </div>

      <EnquiryModal isOpen={isEnquireModalOpen} onClose={closeModals} product={selectedProduct} />
    </div>
  );
}


