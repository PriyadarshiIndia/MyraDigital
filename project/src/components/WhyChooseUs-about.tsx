"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Truck, Wrench, Award } from "lucide-react"

export default function WhyChooseUs() {
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
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <div className="inline-block rounded-lg bg-neonpink-100 px-3 py-1 text-sm text-neonpink-800 mb-4">
            Our Advantages
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Why Partner with Myra Digital India Pvt Ltd?
          </h2>
          <p className="text-muted-foreground md:text-xl">
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
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-neonpink-100 hover:border-neonpink-300 transition-colors"
            >
              <div className="mb-4 text-neonpink-600">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="inline-block rounded-lg bg-neonpink-100 px-3 py-1 text-sm text-neonpink-800 mb-4">
            Our Commitment
          </div>
          <h3 className="text-2xl font-bold text-center mb-4">Commitment to Quality and Innovation</h3>
          <p className="text-muted-foreground text-center max-w-[800px]">
            We consistently deliver superior products and services, ensuring our partners receive the best solutions for
            their business needs.
          </p>
        </div>
      </div>
    </section>
  )
}

