import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <img 
              src="https://media.licdn.com/dms/image/v2/C4E0BAQEpgVuSiqrjPw/company-logo_200_200/company-logo_200_200/0/1630641630431?e=1748476800&v=beta&t=WhKNl1ttxc1SV3ab2nRAXuBO89-1e80WG9SGr_U9G8s" 
              alt="Bright Industries Logo" 
              className="h-16"
            />
            <p className="text-gray-400">
              Leading manufacturer of mobile accessories in Delhi, providing quality products across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                'About Us',
                'Privacy Policy',
                'Terms & Conditions',
                'Shipping Policy',
                'Return Policy',
                'Contact Us'
              ].map((link, index) => (
                <li key={index}>
                  <a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              {[
                'Mobile Chargers',
                'Data Cables',
                'Power Banks',
                'Bluetooth Speakers',
                'Earphones'
              ].map((product, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                Delhi, India
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                info@myra-digital.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                +91 1234567890
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Myra Digital India. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};