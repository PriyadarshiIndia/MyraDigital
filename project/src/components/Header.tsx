import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-neutral-900 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a href="/" className="text-[#4A90E2]">SmartAccessories</a>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#products" className="hover:text-[#4A90E2]">Products</a>
            <a href="#categories" className="hover:text-[#4A90E2]">Categories</a>
            <a href="#about" className="hover:text-[#4A90E2]">About</a>
            <a href="#contact" className="hover:text-[#4A90E2]">Contact</a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 animate__animated animate__fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#products" className="hover:text-[#4A90E2]">Products</a>
              <a href="#categories" className="hover:text-[#4A90E2]">Categories</a>
              <a href="#about" className="hover:text-[#4A90E2]">About</a>
              <a href="#contact" className="hover:text-[#4A90E2]">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;