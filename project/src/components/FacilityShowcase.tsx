"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

export default function FacilityShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <div className="inline-block rounded-lg bg-neonpink-100 px-3 py-1 text-sm text-neonpink-800 mb-4">
            Manufacturing Excellence
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            State-of-the-Art In-House Manufacturing Facilities
          </h2>
          <p className="text-muted-foreground md:text-xl">
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
              className="flex items-start space-x-2 rounded-lg border border-neonpink-100 p-4 bg-white hover:border-neonpink-300 transition-colors"
            >
              <Check className="h-5 w-5 text-neonpink-600 shrink-0 mt-0.5" />
              <p className="text-muted-foreground">{facility}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Back-to-Back Buying from China for Electronic Products</h3>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            To complement our manufacturing capabilities, Myra Digital India Pvt Ltd engages in back-to-back buying from
            China to source high-quality electronic products that meet international standards. This strategy allows us
            to introduce innovative and cost-effective solutions to the Indian market, giving our customers a
            competitive edge.
          </p>
        </div>
      </div>
    </section>
  );
}