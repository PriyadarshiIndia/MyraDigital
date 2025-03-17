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
            {/* Card 1: Neck Band */}
            <div className="bg-teal-100 p-6 rounded-lg flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-sm text-gray-600">NECK BAND</h3>
                    <h2 className="text-xl font-semibold mt-2">
                        Listen to music, whenever you are in the mood!
                    </h2>
                    <button
                        onClick={() =>
                            openEnquireModal({
                                id: 1,
                                title: "Neck Band",
                                description: "Listen to music, whenever you are in the mood!",
                                image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710438216/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/305521_kukn8j.png?tr=w-600",
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
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710438216/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/305521_kukn8j.png?tr=w-600"
                        alt="Neck Band"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Card 2: Universal Handsfree */}
            <div className="bg-yellow-100 p-6 rounded-lg flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-sm text-gray-600">UNIVERSAL HANDSFREE</h3>
                    <h2 className="text-xl font-semibold mt-2">
                        Best Voice Quality handsfree for Music Aficionados
                    </h2>
                    <button
                        onClick={() =>
                            openEnquireModal({
                                id: 2,
                                title: "Universal Handsfree",
                                description: "Best Voice Quality handsfree for Music Aficionados",
                                image: "https://www.myg.in/images/thumbnails/300/300/detailed/73/adr-removebg-preview-removebg-preview.png.png",
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
                        src="https://www.myg.in/images/thumbnails/300/300/detailed/73/adr-removebg-preview-removebg-preview.png.png"
                        alt="Universal Handsfree"
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