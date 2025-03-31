"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function StatsCounter() {
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
    <section className="w-full py-12 md:py-16 bg-neonpink-600 text-white">
      <div ref={ref} className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Box 1: Years of Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 p-6 border-2 border-neonpink-600 bg-white rounded-lg text-neonpink-600"
          >
            <h3 className="text-4xl font-bold">{counts.years}+</h3>
            <p className="text-neonpink-600">Years of Experience</p>
          </motion.div>

          {/* Box 2: Cities Served */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2 p-6 border-2 border-neonpink-600 bg-white rounded-lg text-neonpink-600"
          >
            <h3 className="text-4xl font-bold">{counts.cities}+</h3>
            <p className="text-neonpink-600">Cities Served</p>
          </motion.div>

          {/* Box 3: Product Variants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 p-6 border-2 border-neonpink-600 bg-white rounded-lg text-neonpink-600"
          >
            <h3 className="text-4xl font-bold">{counts.products}+</h3>
            <p className="text-neonpink-600">Product Variants</p>
          </motion.div>

          {/* Box 4: Satisfied Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2 p-6 border-2 border-neonpink-600 bg-white rounded-lg text-neonpink-600"
          >
            <h3 className="text-4xl font-bold">{counts.clients}+</h3>
            <p className="text-neonpink-600">Satisfied Clients</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}