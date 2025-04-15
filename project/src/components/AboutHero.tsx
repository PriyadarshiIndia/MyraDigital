"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function AboutHero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-neonpink-600 to-neonpink-800 text-white">
      <div className="container px-4 md:px-6">
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
            <img
              src="/img/slide_5.jpg"
              alt="Myra Digital India"
              className="object-cover w-full h-full"
            />

          </motion.div>
        </div>
      </div>
    </section>
  );
}