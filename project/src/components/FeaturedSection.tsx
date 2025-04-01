import React, { useState } from 'react';
import EnquiryModal from '../components/EnquiryModal'; // Reuse the same EnquiryModal component

const FeaturedSection = () => {
    // State for managing modal visibility and selected product
    const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Function to open the modal with the selected product
    const openEnquireModal = (product:any) => {
        setSelectedProduct(product);
        setIsEnquireModalOpen(true);
    };

    // Function to close the modal
    const closeModals = () => {
        setIsEnquireModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <section className="max-w-7xl py-24 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Projector */}
            <div className="bg-teal-100 p-6 rounded-lg flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-sm text-gray-600">PROJECTOR</h3>
                    <h2 className="text-xl font-semibold mt-2">
                        Experience the best home theater with our HD Projector!
                    </h2>
                    <button
                        onClick={() =>
                            openEnquireModal({
                                id: 1,
                                title: "Projector",
                                description: "Experience the best home theater with our HD Projector!",
                                image: "https://example.com/projector-image.jpg",
                            })
                        }
                        className="mt-4 bg-green-700 text-white px-4 py-2 rounded-md"
                    >
                        Inquire Now
                    </button>
                </div>
                {/* Image Section */}
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                    <img
                        src="img/projectors/hy300_projector.jpg"
                        alt="Projector"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Card 2: Charger */}
            <div className="bg-yellow-100 p-6 rounded-lg flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-sm text-gray-600">CHARGER</h3>
                    <h2 className="text-xl font-semibold mt-2">
                        Fast Charging Adapter for all your devices!
                    </h2>
                    <button
                        onClick={() =>
                            openEnquireModal({
                                id: 2,
                                title: "Charger",
                                description: "Fast Charging Adapter for all your devices!",
                                image: "img/chargers/featured_charger.jpg",
                            })
                        }
                        className="mt-4 bg-green-700 text-white px-4 py-2 rounded-md"
                    >
                        Inquire Now
                    </button>
                </div>
                {/* Image Section */}
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                    <img
                        src="img/chargers/featured_charger.jpg"
                        alt="Charger"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Enquiry Modal */}
            <EnquiryModal
                isOpen={isEnquireModalOpen}
                onClose={closeModals}
                product={selectedProduct}
            />
        </section>
    );
};

export default FeaturedSection;
