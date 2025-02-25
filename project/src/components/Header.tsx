import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="https://media.licdn.com/dms/image/v2/C4E0BAQEpgVuSiqrjPw/company-logo_200_200/company-logo_200_200/0/1630641630431?e=1748476800&v=beta&t=WhKNl1ttxc1SV3ab2nRAXuBO89-1e80WG9SGr_U9G8s" alt="Bright Industries Logo" className="h-12" />
        </a>

        <div className="hidden md:flex space-x-6">
          {['Home', 'Products', 'Benefits', 'Testimonials', 'Offers', 'FAQ', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-neutral-700 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-neutral-700 hover:text-blue-600"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 py-3 space-y-3">
            {['Home', 'Products', 'Benefits', 'Testimonials', 'Offers', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-neutral-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};