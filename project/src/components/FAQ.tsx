import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your warranty policy?",
      answer: "We offer a 6-month warranty on all our products against manufacturing defects. The warranty covers replacement or repair of the product at our discretion."
    },
    {
      question: "What are your shipping terms?",
      answer: "We offer free shipping on orders above ₹1000. Standard delivery takes 3-5 business days across India. Express delivery options are available at additional cost."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 7 days of delivery. Products must be unused and in original packaging. Refunds are processed within 5-7 business days."
    },
    {
      question: "Do you offer bulk order discounts?",
      answer: "Yes, we offer special discounts for bulk orders. Please contact our sales team for custom quotes and bulk pricing details."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our products and services</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`px-6 py-4 border-t border-gray-100 transition-all duration-200 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};