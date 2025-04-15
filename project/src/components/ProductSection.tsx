import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import EnquiryModal from "../components/EnquiryModal"; // Import the reusable EnquiryModal

interface Specification {
  [key: string]: string;
}

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  specifications?: Specification; // Make specifications optional to match both use cases
}

const products: Product[] = [
  {
    id: 1,
    title: "25W PD Charger",
    image: "img/chargers/PD-25w-charger.jpg",
    description: "High-quality product with advanced features",
    specifications: {
      "Output": "25W",
      "Port Type": "USB-C",
      "Compatibility": "PD compatible devices",
      "Features": "Fast charging, compact design"
    }
  },
  {
    id: 2,
    title: "C to C braided Cable",
    image: "img/dataCables/c-to-c-braided.jpg",
    description: "Premium product with warranty",
    specifications: {
      "Length": "1 meter",
      "Connector type": "C to C",
      "Compatibility": "USB-C devices",
      "Features": "Data Transfer, Fast charging, Durable"
    }
  },
  {
    id: 3,
    title: "20W PD charger",
    image: "img/chargers/PD-20w-charger.jpg",
    description: "Eco-friendly and durable",
    specifications: {
      "Output": "20W",
      "Port Type": "USB-C",
      "Compatibility": "PD compatible devices",
      "Features": "Fast charging, compact design"
    }
  },
  {
    id: 4,
    title: "Projectors",
    image: "img/projectors/hy300.jpg",
    description: "Modern design with smart features",
    specifications: {
      "Resolution": "1080p",
      "Brightness": "3000 lumens",
      "Features": "Smart TV, WiFi, Bluetooth"
    }
  },
  {
    id: 5,
    title: "Currency Counting Machine",
    image: "img/countingMachine/v30.jpeg",
    description: "Modern design with smart features",
    specifications: {
      "Counting Speed": "1000 notes/min",
      "Detection": "UV, MG, IR",
      "Features": "Batch counting, counterfeit detection"
    }
  },
];

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  // Function to open the Enquire Modal
  const openEnquireModal = (product: Product) => {
    setSelectedProduct(product);
    setIsEnquireModalOpen(true);
  };

  // Function to close the Enquire Modal
  const closeModals = () => {
    setIsEnquireModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to={`/product/${product.id}`}
                  className="bg-white text-gray-800 px-6 py-2 rounded-lg mr-2 hover:bg-gray-100 transition-colors duration-300"
                >
                  Details
                </Link>
                <button
                  onClick={() => openEnquireModal(product)}
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquireModalOpen}
          onClose={closeModals}
          product={selectedProduct}
        />
      </div>
    </section>
  );
};

export default ProductSection;