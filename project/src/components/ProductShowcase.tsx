"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <div className="inline-block rounded-lg bg-neonpink-100 px-3 py-1 text-sm text-neonpink-800 mb-4">
            Product Range
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Wide Range of LED and LCD Projectors
          </h2>
          <p className="text-muted-foreground md:text-xl">
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
              className="flex flex-col overflow-hidden rounded-xl bg-white border border-neonpink-100 shadow-sm transition-all hover:shadow-lg hover:border-neonpink-300"
            >
              <div className="relative h-48">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt={product.title} 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <div className="mt-2 flex items-start">
                    <Check className="mr-2 h-5 w-5 text-neonpink-600 shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}