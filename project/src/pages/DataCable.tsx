'use client';
import { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
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

export default function DataCable() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      title: "C to C Braided Cable",
      description: "Upgrade to durability and fast charging with our USB-C to USB-C Braided Cable, designed for OEMs seeking premium connectivity solutions. Built with high-quality, tangle-free nylon braiding, it ensures superior strength, flexibility, and longevity. Supporting fast charging and high-speed data transfer, it’s perfect for smartphones, tablets, laptops, and other USB-C devices. Engineered for enhanced durability and universal compatibility, it meets global quality standards for seamless OEM integration. Custom branding and bulk orders available.",
      image: "img/dataCables/c-to-c-braided.jpg",
      specifications: {
        "Battery Life": "20 hours",
        Connectivity: "Bluetooth 5.0",
        Features: "Active noise cancellation, Touch controls",
        Compatibility: "iOS/Android devices",
        Weight: "250g"
      }
    },
    {
      id: 2,
      title: "C to C Cable",
      description: "Our USB-C to USB-C Cable is designed for fast charging and high-speed data transfer, making it the perfect choice for OEMs. Engineered for durability and efficiency, it supports Power Delivery (PD) charging for smartphones, tablets, laptops, and other USB-C devices. With universal compatibility, premium materials, and reinforced connectors, it ensures long-lasting performance. Meets global quality standards for seamless OEM integration. Custom branding and bulk orders available.",
      image: "img/dataCables/c-to-c.jpg",
      specifications: {
        Display: "1.5\" OLED",
        Battery: "7-day续航",
        Features: "Heart rate monitor, GPS, 5ATM waterproof",
        Compatibility: "iOS 12+/Android 8+",
        Weight: "50g"
      }
    },
    {
      id: 4,
      title: "Type C to Lightning Cable",
      description: "Our USB-C to Lightning Cable is designed for fast charging and high-speed data transfer, making it the ideal choice for OEMs. MFi-certified for seamless Apple device compatibility, it supports Power Delivery (PD) fast charging for iPhones, iPads, and more. Built with premium materials and reinforced connectors, it ensures durability and reliable performance. Meets global quality standards for smooth OEM integration. Custom branding and bulk orders available.",
      image: "img/dataCables/c-to-i.jpg",
      specifications: {
        Battery: "15 hours",
        Connectivity: "Bluetooth 5.2",
        Features: "IPX7 waterproof, 360° sound",
        Dimensions: "100mm × 100mm × 50mm",
        Weight: "450g"
      }
    },
    {
      id: 5,
      title: "Dash Cable",
      description: "Our 4-in-1 Multi Charging Cable is designed for versatility, durability, and fast charging, making it the ideal choice for OEMs. Featuring USB-A & USB-C inputs with Lightning and USB-C outputs, it supports universal compatibility for smartphones, tablets, and other devices. Built with premium materials, reinforced connectors, and a tangle-free design, it ensures long-lasting performance and reliability. Meets global quality standards for seamless OEM integration. Custom branding and bulk orders available.",
      image: "img/dataCables/four-in-one.jpg",
      specifications: {
        Battery: "15 hours",
        Connectivity: "Bluetooth 5.2",
        Features: "IPX7 waterproof, 360° sound",
        Dimensions: "100mm × 100mm × 50mm",
        Weight: "450g"
      }
    },
    {
      id: 6,
      title: "PVC USB to Type C",
      description: "Our USB to Type-C PVC Cable is designed for fast charging and reliable data transfer, making it an excellent choice for OEMs. Crafted with high-quality PVC material, it offers flexibility, durability, and tangle-free usage. Compatible with smartphones, tablets, and other USB-C devices, it ensures efficient power delivery and stable connectivity. Meets global quality standards for seamless OEM integration. Custom branding and bulk orders available.",
      image: "img/dataCables/pvc-to-typeC-cable.jpg",
      specifications: {
        Battery: "15 hours",
        Connectivity: "Bluetooth 5.2",
        Features: "IPX7 waterproof, 360° sound",
        Dimensions: "100mm × 100mm × 50mm",
        Weight: "450g"
      }
    },
    {
      id: 7,
      title: "Red Braided USB to Lightning Cable",
      description: "Our Red Braided USB to Lightning Cable combines style, durability, and fast charging, making it the perfect choice for OEMs. Built with premium nylon braiding, it offers exceptional strength, tangle-free usage, and long-lasting performance. MFi-certified for seamless Apple device compatibility, it supports fast charging and high-speed data transfer for iPhones, iPads, and more. Meets global quality standards for smooth OEM integration. Custom branding and bulk orders available.",
      image: "img/dataCables/red-braided-usb-to-i.jpg",
      specifications: {
        Battery: "15 hours",
        Connectivity: "Bluetooth 5.2",
        Features: "IPX7 waterproof, 360° sound",
        Dimensions: "100mm × 100mm × 50mm",
        Weight: "450g"
      }
    }
  ];

  useEffect(() => {
    // Track page view
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });

    // Scroll to hash if present
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const openEnquireModal = (product: Product) => {
    setSelectedProduct(product);
    setIsEnquireModalOpen(true);

    // Track "Get Quote" button click
    ReactGA.event({
      category: 'Engagement',
      action: 'Clicked Get Quote',
      label: product.title,
    });
  };

  const closeModals = () => {
    setIsEnquireModalOpen(false);
    setSelectedProduct(null);

    // Track modal close
    ReactGA.event({
      category: 'Engagement',
      action: 'Closed Enquiry Modal',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588872657578-7efd1f6eb5b0"
            alt="Data Cables Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="flex flex-col justify-center py-24 lg:py-0">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                    Data Solutions
                  </span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-fuchsia-500 mb-8 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-md">
                  Explore our premium collection of high-performance data cables and connectivity solutions
                </p>
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
                <div className="w-full lg:w-1/2 h-[600px] relative rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 border-2 border-pink-500/30 rounded-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/5 to-transparent z-10"></div>
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
            Ready to <span className="text-pink-500">Connect</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Contact our team for custom connectivity solutions tailored to your specific needs
          </p>
          <button
            onClick={() => {
              ReactGA.event({
                category: 'Engagement',
                action: 'Clicked Contact Us',
                label: 'DataCable Page',
              });
            
            }}
            className="px-10 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-[0_2px_15px_rgba(236,72,153,0.4)]"
          >
            <a href="/contact">Contact</a>
          </button>
        </div>
      </div>

      <EnquiryModal isOpen={isEnquireModalOpen} onClose={closeModals} product={selectedProduct} />
    </div>
  );
}