"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, MapPin } from "lucide-react";

export default function CityNetwork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <div className="inline-block rounded-lg bg-neonpink-100 px-3 py-1 text-sm text-neonpink-800 mb-4">
            Nationwide Presence
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Supplying LED and LCD Projectors to Leading Online Brands and Major Cities in India
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Our extensive supply network reaches all major Indian cities.
          </p>
        </div>

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col p-6 rounded-xl bg-white border border-neonpink-100 hover:border-neonpink-500 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-neonpink-600" />
                <h3 className="text-xl font-bold">{city.name}</h3>
              </div>
              <div className="mt-2 flex items-start">
                <Check className="mr-2 h-5 w-5 text-neonpink-600 shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{city.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}