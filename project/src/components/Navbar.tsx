"use client"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  Info,
  HelpCircle,
  Package,
  Menu,
  ChevronDown,
} from "lucide-react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null) // Track open dropdown
  const location = useLocation()

  // Close the mobile menu when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdownIndex(null) // Close dropdowns on route change
  }, [location])

  // Handle scroll behavior (only for desktop)
  useEffect(() => {
    if (window.innerWidth >= 768) { // Only apply scroll behavior for desktop
      const handleScroll = () => {
        const currentScrollPos = window.scrollY
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
        setPrevScrollPos(currentScrollPos)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos])

  const productCategories = [
    { name: "Chargers", link: "/chargers", submenu: ["20W PD Charger", "25W PD Charger", "25w Type C PD charger", "45w Type C PD charger", "67w PD charger", "80w Type C PD charger"] },
    { name: "Car Chargers", link: "/car-chargers", submenu: ["Product 1", "Product 2", "Product 3"] },
    { name: "Data Cables", link: "/data-cables", submenu: ["C to C Braided Cable", "C to C Cable", "Type C to Lightning Cable", "Dash Cable", "PVC USB to Type C", "Red Braided USB to Lightning Cable"] },
    { name: "Projectors", link: "/projectors", submenu: ["HY300 Free Style Projector", "Handy Projector", "P6 Projector", "P7 Projector", "Q3 White Projector", "X1 Pro Projector", "X3 Pro Projector", "X4 Projector", "RD828 Projector"] },
    { name: "Note Counting Machine", link: "/currency-counting-machine", submenu: ["V30 Note Counting Machine"] },
    { name: "Power Banks", link: "/power-banks", submenu: ["Product 1", "Product 2", "Product 3"] },
    { name: "OEM Solutions", link: "/oem", submenu: ["Product 1", "Product 2", "Product 3"] },
  ]

  // Toggle dropdown in mobile view
  const toggleDropdown = (index : any) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null) // Close if already open
    } else {
      setOpenDropdownIndex(index) // Open the clicked dropdown
    }
  }

  return (
    <nav className={`fixed w-full bg-white shadow-md transition-transform duration-300 ease-in-out z-50 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* First Row - Logo + Nav Items + Contact */}
        <div className="hidden md:flex justify-between items-center h-16 border-b border-gray-200">
          {/* Left Section - Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="img/logo.png"
                alt="Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Center Section - Nav Items */}
          <div className="flex-grow flex justify-center space-x-8 mx-4">
            <Link to="/about" className="flex items-center space-x-2 group relative">
              <Info size={20} className="group-hover:text-pink-500 transition-colors" />
              <span className="group-hover:text-pink-500 transition-colors">About Us</span>
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/products" className="flex items-center space-x-2 group relative">
              <Package size={20} className="group-hover:text-pink-500 transition-colors" />
              <span className="group-hover:text-pink-500 transition-colors">Products</span>
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/faq" className="flex items-center space-x-2 group relative">
              <HelpCircle size={20} className="group-hover:text-pink-500 transition-colors" />
              <span className="group-hover:text-pink-500 transition-colors">FAQ</span>
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Right Section - Contact Button */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/contact"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
            >
              Contact Us
            </Link>

            {/* New WhatsApp Button */}
            <a
              href="https://wa.me/9711711185"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] flex items-center space-x-2"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Second Row - Product Categories */}
        <div className="hidden md:flex justify-center items-center h-16">
          <div className="flex flex-wrap justify-center gap-6">
            {productCategories.map((category, index) => (
              <div key={index} className="relative group">
                <Link to={category.link} className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors">
                  <Package size={20} className="group-hover:scale-110 transition-transform" />
                  <span>{category.name}</span>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                </Link>
                <div className="absolute bg-white mt-2 py-2 w-48 rounded-md shadow-lg z-10 border border-pink-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {category.submenu.map((item, i) => {
                    const productHash = `product-${item.toLowerCase().replace(/\s+/g, '-')}`;
                    return (
                      <Link
                        key={i}
                        to={`${category.link}#${productHash}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src=" img/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu size={24} className="text-gray-500 hover:text-pink-500 transition-colors" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          {/* Common Items */}
          <div className="space-y-2">
            <Link to="/about" className="block text-gray-700 hover:text-pink-500 transition-colors px-3 py-2">
              <Info size={20} className="inline-block mr-2" /> About Us
            </Link>
            <Link to="/faq" className="block text-gray-700 hover:text-pink-500 transition-colors px-3 py-2">
              <HelpCircle size={20} className="inline-block mr-2" /> FAQ
            </Link>
            <Link to="/contact" className="block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition-all duration-300 mt-2">
              Contact Us
            </Link>
          </div>

          {/* Product Categories */}
          <div className="mt-4 space-y-2">
            {productCategories.map((category, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)} // Toggle dropdown on click
                  className="flex items-center justify-between w-full text-gray-700 hover:text-pink-500 transition-colors px-3 py-2"
                >
                  <span>{category.name}</span>
                  <ChevronDown size={16} className={`transition-transform ${openDropdownIndex === index ? "rotate-180" : ""}`} />
                </button>
                {openDropdownIndex === index && ( // Show submenu if dropdown is open
                  <div className="pl-4">
                    {category.submenu.map((item, i) => (
                      <Link
                        key={i}
                        to={`${category.link}#product-${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}