"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import {
  Check,
  ChevronRight,
  Factory,
  Phone,
  Smartphone,
  TrendingUp,
  Shield,
  Truck,
  Wrench,
  Award,
  MapPin,
} from "lucide-react"

// Button Component
const Button = ({ children, className = "", size = "default", variant = "default", asChild = false, ...props }) => {
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }

  const variantClasses = {
    default: "bg-[#FF1493] text-white hover:bg-[#FF1493]/90",
    outline: "border border-[#FF1493] text-[#FF1493] hover:bg-[#FF1493]/10",
  }

  const Comp = asChild ? React.Children.only(children).type : "button"
  const childProps = asChild ? React.Children.only(children).props : {}

  return (
    <Comp
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1493] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
      {...childProps}
    >
      {asChild ? React.Children.only(children).props.children : children}
    </Comp>
  )
}

// About Hero Component
const AboutHero = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="w-full py-12 md:py-24 lg:py-36 bg-gradient-to-b from-[#FF1493]/90 to-[#FF1493] text-white">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Myra Digital India Pvt Ltd</h1>
            <p className="text-xl text-white/90 md:text-2xl">
              India's Leading Importer and OEM Provider for LED and LCD Projectors since 2011
            </p>
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-white rounded-full"></div>
              <p className="text-white/90">Excellence in Technology</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-[400px] overflow-hidden rounded-xl"
          >
            <img src="https://placehold.co/1200x800" alt="Myra Digital India" className="object-cover w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Product Showcase Component
const ProductShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const products = [
    {
      title: "High-lumen LED Projectors",
      description: "Bright, vibrant, and sharp visuals in various lighting conditions.",
    },
    {
      title: "Portable Projectors",
      description: "For on-the-go presentations and home entertainment.",
    },
    {
      title: "Short-throw Projectors",
      description: "Ideal for confined spaces without compromising image quality.",
    },
    {
      title: "Smart Projectors",
      description: "With wireless connectivity, app integration, and smart controls.",
    },
    {
      title: "4K Ultra HD Projectors",
      description: "Offering crystal-clear resolution and a cinema-like viewing experience.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <div className="inline-block rounded-lg bg-[#FFD1E8] px-3 py-1 text-sm text-[#FF1493] mb-4">
            Product Range
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Wide Range of LED and LCD Projectors
          </h2>
          <p className="text-gray-600 md:text-xl">
            At Myra Digital India Pvt Ltd, we offer a diverse selection of LED and LCD projectors that deliver
            exceptional performance and durability.
          </p>
        </div>

        <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col overflow-hidden rounded-xl bg-white border border-[#FFD1E8] shadow-sm transition-all hover:shadow-lg hover:border-[#FF69B4]"
            >
              <div className="relative h-48">
                <img src="https://placehold.co/600x400" alt={product.title} className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <div className="mt-2 flex items-start">
                    <Check className="mr-2 h-5 w-5 text-[#FF1493] shrink-0 mt-0.5" />
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Facility Showcase Component
const FacilityShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const facilities = [
    "1 SMT (Surface Mount Technology) Line – Ensuring precise and high-speed assembly of electronic components.",
    "1 SMT Printer – Delivering accurate and efficient printing for PCBs.",
    "1 Heat Wave Oven – For high-temperature reflow soldering, ensuring strong connections.",
    "1 Wave Soldering Machine – Ideal for soldering through-hole components with precision.",
    "4 Molding Lines – Producing durable casings and housings for chargers and cables.",
    "3 Soldering Lines – Ensuring consistent and reliable soldering of electronic circuits.",
    "Aging Machine – Testing the durability and performance of chargers and power banks.",
    "Spot Welder and Ultrasonic Welding Machine – Providing seamless joints for electronic components.",
    "UV Printing Machine – Offering high-quality branding and labeling on products.",
    "Extrusion Line for Cable Manufacturing – Enabling high-speed and precision production of data cables.",
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <div className="inline-block rounded-lg bg-[#FFD1E8] px-3 py-1 text-sm text-[#FF1493] mb-4">
            Manufacturing Excellence
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            State-of-the-Art In-House Manufacturing Facilities
          </h2>
          <p className="text-gray-600 md:text-xl">
            Our cutting-edge in-house manufacturing facility is equipped with the latest technology to ensure the
            highest standards of quality and innovation in mobile accessories production.
          </p>
        </div>

        <div ref={ref} className="grid gap-6 md:grid-cols-2">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-2 rounded-lg border border-[#FFD1E8] p-4 bg-white hover:border-[#FF69B4] transition-colors"
            >
              <Check className="h-5 w-5 text-[#FF1493] shrink-0 mt-0.5" />
              <p className="text-gray-600">{facility}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Back-to-Back Buying from China for Electronic Products</h3>
          <p className="text-gray-600 max-w-[800px] mx-auto">
            To complement our manufacturing capabilities, Myra Digital India Pvt Ltd engages in back-to-back buying from
            China to source high-quality electronic products that meet international standards. This strategy allows us
            to introduce innovative and cost-effective solutions to the Indian market, giving our customers a
            competitive edge.
          </p>
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Component
const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const reasons = [
    {
      icon: <Award className="h-10 w-10" />,
      title: "Comprehensive Expertise",
      description: "Proven experience in projectors, mobile accessories, and electronics.",
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Advanced Manufacturing Infrastructure",
      description: "Equipped with cutting-edge machinery for superior quality.",
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Strong Supply Chain Network",
      description: "Ensuring reliable and timely delivery across India.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "OEM and Customization Options",
      description: "Personalized solutions tailored to brand requirements.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <div className="inline-block rounded-lg bg-[#FFD1E8] px-3 py-1 text-sm text-[#FF1493] mb-4">
            Our Advantages
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Why Partner with Myra Digital India Pvt Ltd?
          </h2>
          <p className="text-gray-600 md:text-xl">
            Discover the advantages that make us the preferred partner for leading brands across India.
          </p>
        </div>

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-[#FFD1E8] hover:border-[#FF69B4] transition-colors"
            >
              <div className="mb-4 text-[#FF1493]">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="inline-block rounded-lg bg-[#FFD1E8] px-3 py-1 text-sm text-[#FF1493] mb-4">
            Our Commitment
          </div>
          <h3 className="text-2xl font-bold text-center mb-4">Commitment to Quality and Innovation</h3>
          <p className="text-gray-600 text-center max-w-[800px]">
            We consistently deliver superior products and services, ensuring our partners receive the best solutions for
            their business needs.
          </p>
        </div>
      </div>
    </section>
  )
}

// Stats Counter Component
const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [counts, setCounts] = useState({ years: 0, cities: 0, products: 0, clients: 0 });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCounts((prev) => {
          const newYears = prev.years < 12 ? prev.years + 1 : 12;
          const newCities = prev.cities < 50 ? prev.cities + 5 : 50;
          const newProducts = prev.products < 100 ? prev.products + 10 : 100;
          const newClients = prev.clients < 500 ? prev.clients + 50 : 500;

          if (newYears === 12 && newCities === 50 && newProducts === 100 && newClients === 500) {
            clearInterval(interval);
          }

          return {
            years: newYears,
            cities: newCities,
            products: newProducts,
            clients: newClients,
          };
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div ref={ref} className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Box 1: Years of Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 p-6 border-2 border-[#FF1493] bg-white rounded-lg text-[#FF1493]"
          >
            <h3 className="text-4xl font-bold">{counts.years}+</h3>
            <p className="text-[#FF1493]">Years of Experience</p>
          </motion.div>

          {/* Box 2: Cities Served */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2 p-6 border-2 border-[#FF1493] bg-white rounded-lg text-[#FF1493]"
          >
            <h3 className="text-4xl font-bold">{counts.cities}+</h3>
            <p className="text-[#FF1493]">Cities Served</p>
          </motion.div>

          {/* Box 3: Product Variants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 p-6 border-2 border-[#FF1493] bg-white rounded-lg text-[#FF1493]"
          >
            <h3 className="text-4xl font-bold">{counts.products}+</h3>
            <p className="text-[#FF1493]">Product Variants</p>
          </motion.div>

          {/* Box 4: Satisfied Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2 p-6 border-2 border-[#FF1493] bg-white rounded-lg text-[#FF1493]"
          >
            <h3 className="text-4xl font-bold">{counts.clients}+</h3>
            <p className="text-[#FF1493]">Satisfied Clients</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


// City Network Component
const CityNetwork = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const cities = [
    {
      name: "Delhi NCR",
      description: "A growing hub for technology and corporate sectors.",
    },
    {
      name: "Mumbai",
      description: "Meeting the high demand of the media and entertainment industries.",
    },
    {
      name: "Bengaluru",
      description: "Catering to the booming IT and education industries.",
    },
    {
      name: "Chennai",
      description: "Serving the industrial and educational sectors.",
    },
    {
      name: "Hyderabad",
      description: "Supporting the growing tech and business ecosystem.",
    },
    {
      name: "Pune",
      description: "Providing solutions for education and corporate sectors.",
    },
    {
      name: "Kolkata",
      description: "Delivering quality products to Eastern India.",
    },
    {
      name: "Ahmedabad",
      description: "Supporting the industrial and commercial growth.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <div className="inline-block rounded-lg bg-[#FFD1E8] px-3 py-1 text-sm text-[#FF1493] mb-4">
            Nationwide Presence
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Supplying LED and LCD Projectors to Leading Online Brands and Major Cities in India
          </h2>
          <p className="text-gray-600 md:text-xl">Our extensive supply network reaches all major Indian cities.</p>
        </div>

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col p-6 rounded-xl bg-white border border-[#FFD1E8] hover:border-[#FF1493] transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-[#FF1493]" />
                <h3 className="text-xl font-bold">{city.name}</h3>
              </div>
              <div className="mt-2 flex items-start">
                <Check className="mr-2 h-5 w-5 text-[#FF1493] shrink-0 mt-0.5" />
                <p className="text-gray-600">{city.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main About Page Component
const MyraAboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <AboutHero />

      {/* Company Overview */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#FFD1E8] px-3 py-1 text-sm text-[#FF1493]">
                Established 2011
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                India's Leading Importer and OEM Provider
              </h2>
              <p className="text-gray-600 md:text-xl">
                Since 2011, Myra Digital India Pvt Ltd has been a trusted importer and OEM provider of premium-quality
                LED and LCD projectors for top brands in India.
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  We supply a wide range of LED and LCD projectors to renowned brands across all major cities in India,
                  catering to industries such as corporate offices, educational institutions, entertainment sectors, and
                  home theater systems.
                </p>
                <p className="text-gray-600">
                  Many leading online brands and e-commerce platforms source their LED and LCD projectors from Myra
                  Digital India Pvt Ltd, leveraging our high-quality products, competitive pricing, and timely delivery.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <img
                src="https://placehold.co/1200x800"
                alt="Myra Digital India Office"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <ProductShowcase />

      {/* OEM Solutions */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-xl order-2 lg:order-1">
              <img src="https://placehold.co/1200x800" alt="OEM Solutions" className="object-cover w-full h-full" />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-[#FFD1E8] px-3 py-1 text-sm text-[#FF1493]">Customization</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                OEM Solutions for LED and LCD Projectors
              </h2>
              <p className="text-gray-600 md:text-xl">
                We provide custom OEM solutions for brands looking to personalize their LED and LCD projectors.
              </p>
              <p className="text-gray-600">
                Our OEM services allow brands to design projectors with unique features, specifications, and branding,
                enabling them to capture a larger market share with tailored projection solutions.
              </p>
              <div className="flex items-center pt-4">
                <Button
                  className="bg-[#FF1493] text-white hover:bg-[#FF1493]/90"
                  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                >
                  Explore OEM Solutions
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Network */}
      <CityNetwork />

      {/* Mobile Accessories */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <div className="inline-block rounded-lg bg-[#FFD1E8] px-3 py-1 text-sm text-[#FF1493] mb-4">
              Expanding Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Manufacturing Mobile Accessories in India
            </h2>
            <p className="text-gray-600 md:text-xl">
              In addition to our projector expertise, Myra Digital India Pvt Ltd has become a leading manufacturer of
              premium mobile accessories in India.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative group overflow-hidden rounded-xl bg-slate-50 p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD1E8] text-[#FF1493]">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">High-wattage Chargers</h3>
              <p className="text-gray-600 mt-2">
                Compatible with Apple, Samsung, OnePlus, and other major smartphones.
              </p>
            </div>
            <div className="relative group overflow-hidden rounded-xl bg-slate-50 p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD1E8] text-[#FF1493]">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Premium Data Cables</h3>
              <p className="text-gray-600 mt-2">
                USB to C, USB to Micro, USB to iPhone, C to C, and C to Lightning (C to L).
              </p>
            </div>
            <div className="relative group overflow-hidden rounded-xl bg-slate-50 p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD1E8] text-[#FF1493]">
                <Factory className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Power Banks</h3>
              <p className="text-gray-600 mt-2">
                10,000 mAh capacity, designed for extended battery life and convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <FacilityShowcase />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-[#FF1493] text-white">
  <div className="container px-4 md:px-6 mx-auto max-w-6xl">
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl drop-shadow-md">
          Contact Us Today
        </h2>
        <p className="mx-auto max-w-[700px] text-white/95 md:text-xl">
          Explore our extensive range of LED and LCD projectors and mobile accessories and discover how we can
          help your brand achieve its growth goals with high-quality, innovative solutions.
        </p>
      </div>
      <div className="w-full max-w-sm space-y-2">
        <Button 
          size="lg" 
          className="w-full bg-white text-pink-600 hover:bg-gray-100 font-semibold border-2 border-white transition-colors shadow-lg"
        >
          <Phone className="mr-2 h-4 w-4 text-[#FF1493]" />
          <a href="/contact"><span className="text-[#FF1493]">Contact Us</span></a>
        </Button>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

// CSS for neon effects
const neonStyles = `
  .neon-glow {
    text-shadow: 0 0 5px #FF1493, 0 0 10px #FF1493, 0 0 15px #FF1493;
  }

  .neon-box {
    box-shadow: 0 0 5px #FF1493, 0 0 10px #FF1493;
  }

  @keyframes neon-pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }

  .neon-pulse {
    animation: neon-pulse 2s infinite;
  }
`

// Export the main component
export default MyraAboutPage

