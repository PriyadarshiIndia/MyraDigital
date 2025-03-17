"use client";

import { useEffect, useState } from "react";

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  product_title: string;
  message: string;
  createdAt: string;
}

// Helper function to format date
function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch("https://myra-digital-backend.vercel.app/api/enquiries");
        if (!response.ok) throw new Error("Failed to fetch enquiries");

        const data = await response.json();
        setEnquiries(data);
      } catch (err) {
        console.error("Error fetching enquiries:", err);
        setError("Failed to load enquiries. Please check your internet connection or try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-16">
      <div className="container mx-auto p-6 pt-24">
        {/* Animated Header with Neon Pink Effect */}
        <h2 className="text-4xl font-bold mb-8 text-center text-pink-500 neon-text">
          Admin Dashboard
        </h2>

        {/* Loading Animation */}
        {loading && (
          <div className="flex flex-col justify-center items-center h-40">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500"></div>
            <p className="mt-4 text-gray-600">Loading enquiries...</p>
          </div>
        )}

        {/* Error Message with Animation */}
        {error && (
          <div className="text-center p-4 bg-pink-100 border border-pink-300 rounded-lg animate-bounce">
            <p className="text-pink-600">{error}</p>
          </div>
        )}

        {/* Table with Neon Pink Styling */}
        {!loading && !error && (
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-pink-100 text-pink-600">
                  <th scope="col" className="p-4 border-b-2 border-pink-300">Name</th>
                  <th scope="col" className="p-4 border-b-2 border-pink-300">Email</th>
                  <th scope="col" className="p-4 border-b-2 border-pink-300">Phone</th>
                  <th scope="col" className="p-4 border-b-2 border-pink-300">Product</th>
                  <th scope="col" className="p-4 border-b-2 border-pink-300">Message</th>
                  <th scope="col" className="p-4 border-b-2 border-pink-300">Date</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.length > 0 ? (
                  enquiries.map((enquiry, index) => (
                    <tr
                      key={enquiry._id}
                      className="text-center hover:bg-pink-100 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <td className="p-4 border-b border-pink-200">{enquiry.name}</td>
                      <td className="p-4 border-b border-pink-200">{enquiry.email}</td>
                      <td className="p-4 border-b border-pink-200">{enquiry.phone}</td>
                      <td className="p-4 border-b border-pink-200">{enquiry.product_title}</td>
                      <td className="p-4 border-b border-pink-200">{enquiry.message}</td>
                      <td className="p-4 border-b border-pink-200">
                        <span className="bg-pink-500 px-3 py-1 rounded-full text-white animate-glow">
                          {formatDate(enquiry.createdAt)}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-400">
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-12 h-12 text-pink-500 mb-4 animate-pulse"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="animate-pulse">No enquiries found.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}