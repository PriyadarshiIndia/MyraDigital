"use client"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  Info,
  HelpCircle,
  Package,
  Menu,
  ChevronDown,
  Home as HomeIcon,
  Clock,
} from "lucide-react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null)
  const location = useLocation()

  // Close the mobile menu when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdownIndex(null)
  }, [location])

  // Handle scroll behavior (only for desktop)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        const currentScrollPos = window.scrollY
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
        setPrevScrollPos(currentScrollPos)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  const productCategories = [
    { name: "Chargers", link: "/chargers", submenu: ["20W PD Charger", "25W PD Charger", "25w Type C PD charger", "45w Type C PD charger", "67w PD charger", "80w Type C PD charger"] },
    { name: "Car Chargers", link: "/car-chargers", submenu: ["Coming Soon"], comingSoon: true },
    { name: "Data Cables", link: "/data-cables", submenu: ["C to C Braided Cable", "C to C Cable", "Type C to Lightning Cable", "Dash Cable", "PVC USB to Type C", "Red Braided USB to Lightning Cable"] },
    { name: "Projectors", link: "/projectors", submenu: ["HY300 Projector", "X-1 Pro Projector", "X3 Pro Projector", "X6 Pro Projector", "X9 Gimbal Projector", "X30 Pro Projector", "F1 Smart Projector", "GTV Google TV Projector", "Laser UST01 Projector","CUBE Projector","RD852 Projector", "RD853 Projector"] },
    { name: "Note Counting Machine", link: "/currency-counting-machine", submenu: ["V30 Note Counting Machine"] },
    { name: "Power Banks", link: "/power-banks", submenu: ["Product 1", "Product 2", "Product 3"] },
  ]

  // Toggle dropdown in mobile view
  const toggleDropdown = (index: number) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null)
    } else {
      setOpenDropdownIndex(index)
    }
  }

  // Function to handle smooth scrolling to the product
  const scrollToProduct = (hash: string) => {
    const elementId = hash.split('#')[1]
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Function to handle product link clicks
  const handleProductClick = (e: React.MouseEvent, categoryLink: string, productName: string, isComingSoon = false) => {
    if (isComingSoon) {
      e.preventDefault()
      return
    }

    const productHash = `product-${productName.toLowerCase().replace(/\s+/g, '-')}`
    const fullHash = `${categoryLink}#${productHash}`

    if (location.pathname === categoryLink) {
      e.preventDefault()
      scrollToProduct(fullHash)
      // Update URL without reload
      window.history.pushState(null, '', fullHash)
    }
    // If not on the same page, let the default Link behavior handle it
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
            <Link to="/" className="flex items-center space-x-2 group relative">
              <HomeIcon size={20} className="group-hover:text-pink-500 transition-colors" />
              <span className="group-hover:text-pink-500 transition-colors">Home</span>
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link to="/about" className="flex items-center space-x-2 group relative">
              <Info size={20} className="group-hover:text-pink-500 transition-colors" />
              <span className="group-hover:text-pink-500 transition-colors">About Us</span>
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link to="/oem" className="flex items-center space-x-2 group relative">
              <Package size={20} className="group-hover:text-pink-500 transition-colors" />
              <span className="group-hover:text-pink-500 transition-colors">OEM Solutions</span>
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* <Link to="/products" className="flex items-center space-x-2 group relative">
              <Package size={20} className="group-hover:text-pink-500 transition-colors" />
              <span className="group-hover:text-pink-500 transition-colors">Products</span>
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link> */}

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

            {/* WhatsApp Button */}
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
                <Link 
                  to={category.link} 
                  className={`flex items-center space-x-2 ${category.comingSoon ? 'text-gray-400' : 'text-gray-700 hover:text-pink-500'} transition-colors`}
                >
                  <Package size={20} className="group-hover:scale-110 transition-transform" />
                  <span>{category.name}</span>
                  {category.comingSoon && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full ml-1">
                      Coming Soon
                    </span>
                  )}
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                </Link>
                <div className="absolute bg-white mt-2 py-2 w-48 rounded-md shadow-lg z-10 border border-pink-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {category.submenu.map((item, i) => (
                    <div key={i}>
                      {category.comingSoon ? (
                        <div className="flex items-center px-4 py-2 text-gray-400 cursor-not-allowed">
                          <Clock size={16} className="mr-2" />
                          {item}
                        </div>
                      ) : (
                        <Link
                          to={`${category.link}#product-${item.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={(e) => handleProductClick(e, category.link, item)}
                          className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        >
                          {item}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src="img/logo.png"
              alt="Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2"
          >
            <Menu size={24} className="text-gray-500 hover:text-pink-500 transition-colors" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          {/* Common Items */}
          <div className="space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-pink-500 transition-colors px-3 py-2">
              <HomeIcon size={20} className="inline-block mr-2" /> Home
            </Link>

            <Link to="/about" className="block text-gray-700 hover:text-pink-500 transition-colors px-3 py-2">
              <Info size={20} className="inline-block mr-2" /> About Us
            </Link>

            <Link to="/oem" className="block text-gray-700 hover:text-pink-500 transition-colors px-3 py-2">
              <Package size={20} className="inline-block mr-2" /> OEM Solutions
            </Link>

            {/* <Link to="/products" className="block text-gray-700 hover:text-pink-500 transition-colors px-3 py-2">
              <Package size={20} className="inline-block mr-2" /> Products
            </Link> */}

            <Link to="/faq" className="block text-gray-700 hover:text-pink-500 transition-colors px-3 py-2">
              <HelpCircle size={20} className="inline-block mr-2" /> FAQ
            </Link>

            <Link to="/contact" className="block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition-all duration-300 mt-2">
              Contact Us
            </Link>

            <a
              href="https://wa.me/9711711185"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-all duration-300 mt-2"
            >
              WhatsApp
            </a>
          </div>

          {/* Product Categories */}
          <div className="mt-4 space-y-2">
            {productCategories.map((category, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className={`flex items-center justify-between w-full ${category.comingSoon ? 'text-gray-400' : 'text-gray-700 hover:text-pink-500'} transition-colors px-3 py-2`}
                  aria-expanded={openDropdownIndex === index}
                >
                  <div className="flex items-center">
                    <span>{category.name}</span>
                    {category.comingSoon && (
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full ml-2">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <ChevronDown size={16} className={`transition-transform ${openDropdownIndex === index ? "rotate-180" : ""}`} />
                </button>
                {openDropdownIndex === index && (
                  <div className="pl-4">
                    {category.submenu.map((item, i) => (
                      <div key={i}>
                        {category.comingSoon ? (
                          <div className="flex items-center px-4 py-2 text-gray-400 cursor-not-allowed">
                            <Clock size={16} className="mr-2" />
                            {item}
                          </div>
                        ) : (
                          <Link
                            to={`${category.link}#product-${item.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={(e) => handleProductClick(e, category.link, item)}
                            className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                          >
                            {item}
                          </Link>
                        )}
                      </div>
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