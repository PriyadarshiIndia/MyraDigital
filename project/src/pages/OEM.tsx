'use client'
import { useState } from "react";
import EnquiryModal from "../components/EnquiryModal";

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

export default function OEM() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      title: "Custom Wireless Earbuds",
      description: "OEM true wireless earbuds with customizable branding and audio profiles",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      specifications: {
        "Battery Life": "8h (earbuds) + 24h (case)",
        Connectivity: "Bluetooth 5.3",
        Features: "Custom EQ settings, IPX5 waterproof",
        Customization: "Logo printing, Color options",
        Certification: "CE, FCC, RoHS"
      }
    },
    {
      id: 2,
      title: "Smart Fitness Tracker",
      description: "White-label wearable device with health monitoring features",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      specifications: {
        Display: "0.96\" OLED",
        Battery: "10-day续航",
        Features: "Heart rate monitor, Sleep tracking",
        Customization: "Firmware branding, Strap colors",
        Compatibility: "iOS/Android SDK"
      }
    },
    {
      id: 3,
      title: "Portable Power Bank",
      description: "Customizable 20000mAh power bank with fast charging technology",
      image: "https://images.unsplash.com/photo-1564419374384-0e1c505f04d5",
      specifications: {
        Capacity: "20000mAh",
        Outputs: "2x USB-A, 1x USB-C",
        Features: "PD 3.0, QC 3.0",
        Customization: "Laser engraving, Packaging design",
        Safety: "Overcharge/overheat protection"
      }
    }
  ];

  const openEnquireModal = (product: Product) => {
    setSelectedProduct(product);
    setIsEnquireModalOpen(true);
  };

  const closeModals = () => {
    setIsEnquireModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588872657578-7efd1f6eb5b0"
            alt="OEM Solutions Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="flex flex-col justify-center py-24 lg:py-0">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                    OEM Solutions
                  </span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-fuchsia-500 mb-8 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-md">
                  Premium custom manufacturing for electronic accessories and smart devices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">Custom</span> Products
        </h2>
        <div className="space-y-32">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 h-[450px] relative rounded-2xl overflow-hidden group">
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
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-pink-100 to-fuchsia-100 py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-pink-500">Manufacture</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Partner with us for full-cycle OEM/ODM production of electronic accessories and smart devices
          </p>
          <button className="px-10 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-[0_2px_15px_rgba(236,72,153,0.4)]">
            Contact Us
          </button>
        </div>
      </div>

      <EnquiryModal isOpen={isEnquireModalOpen} onClose={closeModals} product={selectedProduct} />
    </div>
  );
}