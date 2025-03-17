import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
  category: string;
  sku: string;
  availability: string;
}

const productsData: Product[] = [
  // Electronics
  {
    id: 1,
    title: "Wireless Headphones Pro",
    image: "https://via.placeholder.com/300",
    description: "Premium wireless headphones with 30-hour battery life and noise cancellation",
    price: "$199.99",
    category: "Electronics",
    sku: "ELEC-001",
    availability: "In Stock",
  },
  {
    id: 2,
    title: "Smartwatch X3",
    image: "https://via.placeholder.com/300",
    description: "Advanced health tracking smartwatch with GPS",
    price: "$299.99",
    category: "Electronics",
    sku: "ELEC-002",
    availability: "In Stock",
  },

  // Fashion
  {
    id: 3,
    title: "Slim Fit Business Suit",
    image: "https://via.placeholder.com/300",
    description: "Italian wool blend suit for professional looks",
    price: "$499.99",
    category: "Fashion",
    sku: "FASH-001",
    availability: "In Stock",
  },
  {
    id: 4,
    title: "Designer Handbag",
    image: "https://via.placeholder.com/300",
    description: "Luxury leather handbag with gold-tone hardware",
    price: "$399.99",
    category: "Fashion",
    sku: "FASH-002",
    availability: "In Stock",
  },

  // Books
  {
    id: 5,
    title: "React Mastery",
    image: "https://via.placeholder.com/300",
    description: "Comprehensive guide to React development",
    price: "$49.99",
    category: "Books",
    sku: "BOOK-001",
    availability: "In Stock",
  },
  {
    id: 6,
    title: "JavaScript Fundamentals",
    image: "https://via.placeholder.com/300",
    description: "Essential JS concepts for modern developers",
    price: "$39.99",
    category: "Books",
    sku: "BOOK-002",
    availability: "In Stock",
  },

  // Home
  {
    id: 7,
    title: "Modern Floor Lamp",
    image: "https://via.placeholder.com/300",
    description: "Adjustable LED floor lamp with dimming feature",
    price: "$129.99",
    category: "Home",
    sku: "HOME-001",
    availability: "In Stock",
  },
  {
    id: 8,
    title: "Ergonomic Desk Chair",
    image: "https://via.placeholder.com/300",
    description: "Comfortable office chair with lumbar support",
    price: "$249.99",
    category: "Home",
    sku: "HOME-002",
    availability: "In Stock",
  },
];

const ProductsPage = () => {
  const categories = ["Electronics", "Fashion", "Books", "Home"];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEnquireModal, setShowEnquireModal] = useState(false);

  const handleViewAll = (category: string) => {
    window.location.href = `/category/${category.toLowerCase()}`;
  };

  const openDetails = (product: Product) => {
    setSelectedProduct(product);
    setShowDetailsModal(true);
  };

  const openEnquire = (product: Product) => {
    setSelectedProduct(product);
    setShowEnquireModal(true);
  };

  const closeModals = () => {
    setShowDetailsModal(false);
    setShowEnquireModal(false);
    setSelectedProduct(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted for:", selectedProduct?.title);
    closeModals();
  };

  return (
    <div className="min-h-screen pt-36 bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Shop Premium Products | Electronics, Fashion, Books & Home Goods</title>
        <meta
          name="description"
          content="Discover our wide range of premium products across categories: Electronics, Fashion, Books, and Home goods. Free shipping on orders over $50."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://example.com/products" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Premium Products Store" />
        <meta property="og:description" content="Shop high-quality products across multiple categories" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/products" />
        <meta property="og:image" content="https://example.com/social-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Products Store" />
        <meta name="twitter:description" content="Shop high-quality products across multiple categories" />
        <meta name="twitter:image" content="https://example.com/social-image.jpg" />
      </Helmet>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="text-gray-500 hover:text-gray-800">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
                <a href="/products" className="ml-1 text-gray-500 hover:text-gray-800">Products</a>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Category Sections */}
      {categories.map((category) => {
        const categoryProducts = productsData.filter(p => p.category === category);
        
        return (
          <section key={category} className="container mx-auto px-4 py-12">
            {/* Category Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                {category} Collection
              </h2>
              <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto">
                {category === "Electronics" && "Latest tech innovations for modern living"}
                {category === "Fashion" && "Trendy apparel and accessories for every occasion"}
                {category === "Books" && "Curated selection of best-selling titles"}
                {category === "Home" && "Stylish and functional home essentials"}
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Product Cards */}
              {categoryProducts.slice(0, 4).map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.title} - ${product.category}`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center gap-2">
                      <button
                        onClick={() => openDetails(product)}
                        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors w-full"
                      >
                        See Details
                      </button>
                      <button
                        onClick={() => openEnquire(product)}
                        className="bg-transparent border border-pink-500 text-pink-500 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition-colors w-full"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* View All Card */}
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => handleViewAll(category)}
              >
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">View All</span>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">Explore More</h3>
                  <p className="text-gray-500">Browse all {category} products</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Details Modal */}
      {showDetailsModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 relative">
            <button
              onClick={closeModals}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {selectedProduct.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {selectedProduct.description}
                </p>
                <p className="text-lg font-semibold mb-4">
                  Price: {selectedProduct.price}
                </p>
                <p className="text-gray-600 mb-4">
                  Availability: {selectedProduct.availability}
                </p>
                <p className="text-gray-600">
                  SKU: {selectedProduct.sku}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enquire Modal */}
      {showEnquireModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
            <button
              onClick={closeModals}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">
              Enquire about {selectedProduct.title}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Your message"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors w-full"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;