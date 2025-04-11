'use client';
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4'; // Import Google Analytics
import EnquiryModal from '../components/EnquiryModal';

interface Specification {
  [key: string]: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  specifications: Specification;
}

export default function Projectors() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Track page view when the component mounts
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/projectors' });
  }, []);

  const products: Product[] = [
    {
      id: 1,
      title: "HY300 Projector",
      description: "Experience crystal-clear visuals with our Native 720P HD Smart Projector, supporting 1080P, 2K, and 4K decoding. Featuring Android 11 OS, built-in Netflix, Prime Video, and YouTube, wireless screen mirroring, and auto keystone correction, it delivers seamless entertainment and presentations. With 260 ANSI Lumens brightness, Hi-Fi stereo sound, HDMI, USB, Wi-Fi, and Bluetooth connectivity, this lightweight, travel-friendly projector is perfect for home, office, or on-the-go use. Long-lasting LED lamp (50,000+ hours) & 180° rotation ensure optimal performance. Ideal for OEMs looking for a high-demand, innovative product.",
      image: "img/projectors/hy300.jpg",
      specifications: {
        Resolution: "720P (Support)",
        Brightness: "4000 lumens",
        Bulb_Life: "30,000 Hours",
        Connectivity: "HDMI / USB / AUX",
        Inbuilt: "Android, Youtube,Bluetooth, Miracast, ISO Cast, WIFI ,RAM/ROM",
        Warranty: "1 Year"
      }
    },
    {
      id: 2,
      title: "X-1 Pro Projector",
      description: "Enjoy stunning True 1080P Full HD resolution with 3000 lumens brightness and 1500:1 contrast ratio for crystal-clear visuals. Featuring 2.4G Wi-Fi for smooth streaming, AI voice control, enhanced stereo sound, and 360° flip projection, this compact, durable projector is perfect for movies, gaming, and presentations. With Bluetooth 4.1, HDMI, USB, and Wi-Fi connectivity, plus a 50,000-hour LED lamp lifespan, it's an ideal home theater or office solution. OEMs – seize the demand for smart, high-quality projection today!",
      image: "img/projectors/x1-pro.jpg",
      specifications: {
        Resolution: "1020*720P (4k Support)",
        Brightness: "6500 lumens",
        Bulb_Life: "30,000 Hours",
        Connectivity: "HDMI / USB / AUX",
        Inbuilt: "Android, Youtube, Bluetooth, Miracast, ISO Cast, WIFI , RAM-2GB/ROM16GB , Elecrtric Focus / AUTO KEYSTONE",
        Weight: "1.8kg"
      }
    },
    {
      id: 3,
      title: "X3 Pro Projector",
      description: "Experience high-quality projection with 700 ANSI lumens brightness and Full HD 1920*1080 resolution (with 4K support). This feature-packed projector offers an exceptional 50,000-hour bulb life and versatile connectivity options including HDMI, USB, AV, AUX, and LAN. With built-in Android OS, YouTube, Bluetooth, Miracast, ISO Cast, and WiFi capabilities, plus RAM/ROM storage, touchpad controls, auto focus, and auto keystone correction, it delivers premium performance for both entertainment and professional use. Backed by a 1-year warranty.",
      image: "img/projectors/x3-pro.jpeg",
      specifications: {
        Model: "X3 Pro",
        Brightness: "700 ANSI Lumens",
        Resolution: "1920*1080 (4K Support)",
        Bulb_Life: "50,000 Hours",
        Connectivity: "HDMI-2 / USB-2 / AV / AUX / LAN",
        Inbuilt: "Android, YouTube, Bluetooth, Miracast, ISO Cast, WiFi, RAM/ROM, With Touchpad, Auto Focus & Auto Keystone",
        Warranty: "1 year"
      }
    },
    {
      id: 4,
      title: "X6 Pro Projector",
      description: "The X6 Pro projector delivers 400 ANSI lumens brightness with versatile connectivity options including HDMI, USB, TF card, LAN, AV, and AUX. Featuring auto focus and auto keystone correction, it projects crisp images from 40 to 200 inches with electronic zoom capability and a 1.4:1 projection ratio. Equipped with Android OS, YouTube, Bluetooth, Miracast, ISO Cast, and WiFi, plus RAM/ROM storage, this energy-efficient projector boasts an impressive LED lamp life exceeding 50,000 hours. Backed by a 1-year warranty, it's perfect for home entertainment and professional presentations.",
      image: "img/projectors/x6-pro.jpeg",
      specifications: {
        Model: "X6 Pro",
        Brightness: "400 ANSI Lumens",
        Interface: "HDMI / USB / TF / LAN / AV / AUX",
        Focus_Mode: "Auto Focus / Auto Keystone",
        Screen_Size: "40-200 Inches",
        Photo_Zoom: "Electronic Zoom",
        Projection_Ratio: "1.4:1",
        Inbuilt: "Android, YouTube, Bluetooth, Miracast, ISO Cast, WiFi, RAM/ROM",
        Led_Lamp: "LED >50,000 Hours",
        Warranty: "1 Year"
      }
    },
    {
      id: 5,
      title: "X9 Gimbal Projector",
      description: "Experience ultra-bright 6500 lumens projection with the advanced X9 Gimbal Projector. Featuring versatile connectivity through HDMI, USB, and TF card inputs, this projector offers electric focus and auto keystone correction for perfect image alignment. Enjoy electronic zoom capability and built-in smart features including Android OS, YouTube, Bluetooth, Miracast, ISO Cast, and WiFi connectivity. With an exceptional LED lamp life exceeding 50,000 hours and backed by a 1-year warranty, this high-performance projector is ideal for both professional and entertainment applications.",
      image: "img/projectors/x9.png",
      specifications: {
        Model: "X9 Gimbal Projector",
        Brightness: "6500 Lumens",
        Interface: "HDMI / USB / TF",
        Focus_Mode: "Electric Focus / Auto",
        Photo_Zoom: "Electronic Zoom",
        Inbuilt: "Android, YouTube, Bluetooth, Miracast, ISO Cast, WiFi",
        Led_Lamp: "LED >50,000 Hours",
        Warranty: "1 Year"
      }
    },
    {
      id: 6,
      title: "X30 Pro Projector",
      description: "The X30 Pro projector delivers 500 ANSI lumens brightness with Full HD 1920x1080 resolution and 4K support, providing crisp and vibrant visuals. Featuring versatile connectivity options including HDMI-2, USB-2, AV, and AUX inputs, this Android-powered projector comes with built-in YouTube, Bluetooth, Miracast, ISO Cast, and WiFi capabilities. With 2GB RAM and 16GB ROM storage, electric focus, and auto keystone correction, it offers convenient operation and excellent performance. The energy-efficient LED lamp lasts up to 50,000 hours, and the projector is backed by a 1-year warranty for peace of mind.",
      image: "img/projectors/x30-pro.jpeg",
      specifications: {
        Model: "X30PRO",
        Brightness: "500 ANSI Lumens",
        Resolution: "1920x1080 (4K Support)",
        Bulb_Life: "50,000 Hours",
        Input_Source: "HDMI-2 / USB-2 / AV / AUX",
        Support_System: "Android",
        Inbuilt_Features: "YouTube, Bluetooth, Miracast, ISO Cast, WiFi, 2GB/16GB, Electric Focus / Auto Keystone",
        Warranty: "1 Year"
      }
    },
    {
      id: 7,
      title: "F1 Smart Projector",
      description: "The F1 Smart Projector delivers versatile performance with 130 ANSI (3800 lumens) brightness and HD 1280x720P resolution. Featuring auto focus and auto keystone correction (±40°), it projects crisp images from 30 to 150 inches with a 1000:1 contrast ratio. Enjoy wireless mirroring and dual-band WiFi (2.4G+5G) on Android 13.0 OS, with 2GB RAM and 16GB ROM storage. Unique interactive functions support touch screen operation, writing, and drawing with included touch pen. The projector includes a built-in 3W speaker, AL Colour Engine for enhanced visuals, and offers multiple connectivity options including USB 2.0, AUX 3.5mm, HDMI 1.4, and DC-in. With 30,000 hours of bulb life and a throw ratio of 1.2m-4.5m, it's perfect for both entertainment and interactive presentations.",
      image: "img/projectors/F1.jpeg",
      specifications: {
        Model: "F1",
        Brightness: "130 ANSI (3800 Lumens)",
        Resolution: "HD 1280x720P",
        Input_Source: "USB 2.0 / Aux 3.5mm / HDMI 1.4 / DC-in",
        Focus_Mode: "Auto Focus",
        Keystone_Correction: "Auto (±40°)",
        Screen_Size: "30-150 Inches",
        Contrast: "1000:1",
        Bulb_Life: "30,000 Hours",
        Mirroring: "Wireless Mirroring",
        OS_Network: "Android 13.0 & WiFi: 2.4G+5G",
        Throw_Ratio: "1.2m-4.5m",
        Memory: "2+16GB",
        Interactive_Function: "Supports Touch Screen, Writing, Drawing with Touch Pen",
        AL_Colour_Engine: "Yes",
        Speakers: "Built-in 3W Speaker"
      }
    },
    {
      id: 9,
      title: "GTV Google TV Projector",
      description: "The GTV Google TV Projector delivers 250 ANSI lumens brightness with Full HD 1920x1080 resolution using LCD projection technology. Featuring electric focus and advanced keystone correction (Auto ±40° Vertical, Manual Horizontal), it projects vibrant images from 40 to 120 inches with a 1.2:1 throw ratio (1.5m-5m projection distance). Powered by the Amlogic T950D4 chip with Android 13 and Google TV, it offers dual-band Wi-Fi (2.4G+5G) and Bluetooth 5.2 connectivity. The ultra-long-life LED light source lasts up to 300,000 hours, while the 3W built-in speakers deliver quality sound. With 1GB RAM + 8GB ROM memory, HDMI/USB/3.5mm inputs, and 80W power consumption, it's an excellent smart entertainment solution.",
      image: "img/projectors/gtv.jpg",
      specifications: {
        Model: "GTV Google TV",
        Brightness: "250 ANSI Lumens",
        Resolution: "1920x1080 Full HD",
        Projection_Technology: "LCD",
        Throw_Ratio: "1.2:1",
        Keystone_Correction: "Auto ±40° (Vertical), Manual (Horizontal)",
        Focus_Mode: "Electric Focus",
        Screen_Size: "40-120 Inches",
        Projection_Distance: "1.5m-5m",
        Light_Source: "LED 300,000 Hours",
        Memory: "1+8GB",
        Chip: "Amlogic T950D4",
        Wi_Fi: "2.4G+5G",
        Bluetooth: "BT5.2",
        Speakers: "3W Built-in",
        Input_Source: "HDMI / USB / 3.5mm",
        Power_Consumption: "80W",
        Support_System: "Android 13 with Google TV"
      }
    },
    {
      id: 10,
      title: "Laser UST01 Projector",
      description: "The LaserUST01 Ultra Short Throw Projector delivers 350 ANSI lumens brightness with advanced TOF technology for instant auto focus and 6-axis auto keystone correction. Featuring an ultra-short 0.26:1 projection ratio, it projects crisp images from 30 to 200 inches with electronic zoom capability. Running Android 9.0 with 2GB RAM and 32GB ROM, it offers Bluetooth 5.0, Miracast, Eshare, and WiFi connectivity through HDMI/USB/earphone interfaces. The premium RGB LED (OSRAM Q6) light source provides 20,000 hours of operation, making it ideal for space-constrained environments requiring large displays. Backed by a 1-year warranty, this projector combines cutting-edge projection technology with smart features for professional and home use.",
      image: "img/projectors/laser_ust01.jpg",
      specifications: {
        Model: "LaserUST01",
        Brightness: "350 ANSI Lumens",
        Interface: "HDMI / USB / Earphone",
        Focus_Mode: "TOF Technology Instant Auto Focus",
        Keystone_Correction: "6-Axis Auto Keystone",
        Screen_Size: "30-200 Inches",
        Photo_Zoom: "Electronic Zoom",
        Projection_Ratio: "0.26:1 (Ultra Short Throw)",
        Inbuilt: "Android 9.0, Bluetooth 5.0, Miracast, Eshare, WiFi, RAM/ROM (2GB/32GB)",
        LED_Lamp: "RGB LED OSRAM Q6 >20,000 Hours",
        Warranty: "1 Year"
      }
    },
    {
      id: 11,
      title: "CUBE Projector",
      description: "The CUBE 4K Smart Projector delivers 1800 ANSI lumens high brightness with Full HD 1080p resolution and 4K support, featuring an exceptional 3000:1 contrast ratio. Equipped with auto focus and advanced auto four-point keystone correction, it projects stunning images from 55 to 300 inches. With Android 12.0 OS and WiFi 6 (2.4G+5G dual-band), it offers wireless mirroring and versatile connectivity through USB 2.0, AUX, HDMI 1.4, and RJ45 ports. The generous 3GB RAM + 64GB ROM memory ensures smooth performance, while the AI Colour Engine enhances visual quality. Featuring a long 50,000-hour bulb life and flexible throw ratio (1.6m to 8.5m), it's perfect for both home theaters and professional settings.",
      image: "img/projectors/cube.jpeg",
      specifications: {
        Model: "CUBE",
        Brightness: "1800 ANSI Lumens",
        Resolution: "1080p Full HD (4K Supported)",
        Input_Source: "USB 2.0 / AUX / HDMI 1.4 / RJ45",
        Focus_Mode: "Auto Focus",
        Keystone_Correction: "Auto Four Point",
        Screen_Size: "55-300 Inches",
        Contrast: "3000:1",
        Bulb_Life: "50,000 Hours",
        Mirroring: "Wireless Mirroring",
        OS_Network: "Android 12.0 & WiFi 6 (2.4G+5G)",
        Throw_Ratio: "1.6m to 8.5m",
        Memory: "3GB RAM + 64GB ROM",
        Technology: "AI Colour Engine"
      }
    },
    {
      id: 12,
      title: "RD852 Projector",
      description: "The RD852 HD Projector delivers powerful 3000 lumens brightness with 1280*720 resolution (1080p support), making it ideal for bright environments. Featuring multiple connectivity options including HDMI, USB, AV, and AUX inputs, this projector comes with built-in WiFi, Miracast, and ISO Cast capabilities. With a long-lasting 30,000-hour bulb life and backed by a 1-year warranty, it offers reliable performance for both home entertainment and business presentations.",
      image: "img/projectors/rd-852.jpg",
      specifications: {
        Model: "RD852",
        Brightness: "3000 Lumens",
        Resolution: "1280*720 (1080p Support)",
        Bulb_Life: "30,000 Hours",
        Input_Source: "HDMI / USB / AV / AUX",
        Inbuilt: "WiFi, Miracast, ISO Cast",
        Warranty: "1 Year"
      }
    },
    {
      id: 13,
      title: "RD853 Projector",
      description: "The RD853 HD Smart Projector delivers powerful 3000 lumens brightness with 1280*720 native resolution (1080p supported), perfect for vibrant presentations and home entertainment. Running on Android OS with built-in YouTube, Bluetooth, Miracast, ISO Cast, and WiFi connectivity, it offers versatile streaming options. With multiple input sources including HDMI, USB, and AV ports, plus RAM/ROM storage for smooth performance, this projector combines functionality with reliability. The long-lasting 30,000-hour bulb life and 1-year warranty ensure extended use with peace of mind.",
      image: "img/projectors/rd853.jpg",
      specifications: {
        Model: "RD853",
        Brightness: "3000 Lumens",
        Resolution: "1280*720 (1080p Supported)",
        Bulb_Life: "30,000 Hours",
        Input_Source: "HDMI / USB / AV",
        Inbuilt: "Android, YouTube, Bluetooth, Miracast, ISO Cast, WiFi, RAM/ROM",
        Warranty: "1 Year"
      }
    }
  ];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });

        // Track hash navigation event
        ReactGA.send({
          hitType: 'event',
          eventCategory: 'Navigation',
          eventAction: 'Hash Navigation',
          eventLabel: hash,
        });
      }
    }
  }, []);

  const openEnquireModal = (product: Product) => {
    setSelectedProduct(product);
    setIsEnquireModalOpen(true);

    // Track "Get Quote" button click
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'User Interaction',
      eventAction: 'Button Click',
      eventLabel: `Get Quote - ${product.title}`,
    });
  };

  const closeModals = () => {
    setIsEnquireModalOpen(false);
    setSelectedProduct(null);

    // Track modal close event
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'User Interaction',
      eventAction: 'Modal Close',
      eventLabel: 'Enquiry Modal',
    });
  };

  const handleBannerClick = () => {
    // Track banner click event
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'User Interaction',
      eventAction: 'Banner Click',
      eventLabel: 'Projectors Banner',
    });
  };

  const handleCTAClick = () => {
    // Track "Contact Us" button click
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'User Interaction',
      eventAction: 'Button Click',
      eventLabel: 'Contact Us - CTA',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div
        className="relative h-[600px] overflow-hidden cursor-pointer"
        onClick={handleBannerClick}
      >
        <div className="absolute inset-0">
          <img
            src="img/projectors/projector_hero.png"
            alt="Projectors Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="flex flex-col justify-center py-24 lg:py-0">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                    Big Screen Experience
                  </span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-fuchsia-500 mb-8 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-md">
                  Premium projectors for home cinema, professional presentations, and large-scale installations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="introduction">
        <div className="container pt-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-fuchsia-500 mb-8 mx-auto rounded-full"></div>

            <p className="text-xl md:text-2xl text-gray-700 mb-2 leading-relaxed">
              As a <strong>leading projector manufacturer in Delhi</strong>, we specialize in high-performance projection solutions for home theaters, businesses, and OEM partners. Our cutting-edge projectors combine <strong>brilliant visuals, smart connectivity, and exceptional durability</strong> to deliver unmatched viewing experiences.
            </p>

           
            </div>
            </div>
            </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">Featured</span> Projectors
        </h2>
        <div className="space-y-32">
          {products.map((product, index) => {
            const productHash = `product-${product.title.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <div
                key={product.id}
                id={productHash}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-12`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-[650px] relative rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 border-2 border-pink-500/30 rounded-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent z-10"></div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-3xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                        {product.title}
                      </span>
                    </h3>
                  </div>
                </div>
                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
                        {product.title}
                      </span>
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                      <span className="h-px w-6 bg-pink-500 mr-3"></span>
                      Specifications
                    </h4>
                    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
                      <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="divide-y divide-gray-200">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <tr key={key} className="hover:bg-pink-50 transition-colors duration-150">
                              <td className="px-6 py-4 text-sm font-medium text-pink-500 w-1/3">
                                {key}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    onClick={() => openEnquireModal(product)}
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold rounded-xl hover:from-pink-600 hover:to-fuchsia-600 transition-all duration-300 shadow-[0_2px_15px_rgba(236,72,153,0.3)] hover:shadow-[0_4px_20px_rgba(236,72,153,0.4)] transform hover:-translate-y-1"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-pink-100 to-fuchsia-100 py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-pink-500">Project</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Transform your viewing experience with our professional projection solutions
          </p>
          <button
            onClick={handleCTAClick}
            className="px-10 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-[0_2px_15px_rgba(236,72,153,0.4)]"
          >
            <a href="/contact">Contact Us</a>
          </button>
        </div>
      </div>

      <EnquiryModal isOpen={isEnquireModalOpen} onClose={closeModals} product={selectedProduct} />
    </div>
  );
}


