import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate__animated animate__fadeIn">
            <h3 className="text-2xl font-bold mb-6 text-[#4A90E2]">SmartAccessories</h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner for premium tech accessories and smart solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#50C5B7] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#50C5B7] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#50C5B7] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#50C5B7] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="animate__animated animate__fadeIn" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#products" className="text-gray-400 hover:text-[#50C5B7] transition-colors">Products</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-[#50C5B7] transition-colors">Categories</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#50C5B7] transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#50C5B7] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="animate__animated animate__fadeIn" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold mb-6">Customer Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#50C5B7] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#50C5B7] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#50C5B7] transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#50C5B7] transition-colors">Order Status</a></li>
            </ul>
          </div>

          <div className="animate__animated animate__fadeIn" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-[#4A90E2]" />
                123 Tech Street, Digital City
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#4A90E2]" />
                +1 (800) 123-4567
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#4A90E2]" />
                support@smartaccessories.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SmartAccessories. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#50C5B7] text-sm">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-[#50C5B7] text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#50C5B7] text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;