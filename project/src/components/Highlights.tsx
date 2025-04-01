import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Highlights = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [counts, setCounts] = useState({
    years: 0,
    cities: 0,
    products: 0,
    clients: 0,
  });

  const targetValues = {
    years: 12,
    cities: 50,
    products: 100,
    clients: 500,
  };

  const animationDuration = 2000; // Total animation duration in ms
  const frameRate = 60; // Frames per second
  const totalFrames = (animationDuration / 1000) * frameRate;

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + animationDuration;

    const animateCounts = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / animationDuration);

      setCounts({
        years: Math.floor(progress * targetValues.years),
        cities: Math.floor(progress * targetValues.cities),
        products: Math.floor(progress * targetValues.products),
        clients: Math.floor(progress * targetValues.clients),
      });

      if (now < endTime) {
        requestAnimationFrame(animateCounts);
      } else {
        // Ensure we reach the exact target values
        setCounts(targetValues);
      }
    };

    const animationId = requestAnimationFrame(animateCounts);

    return () => cancelAnimationFrame(animationId);
  }, [isInView]);

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div ref={sectionRef} className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {/* Box 1: Years of Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-2 p-4 md:p-6 border-2 border-[#FF1493] bg-white rounded-lg hover:bg-[#FF1493]/5 transition-colors duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#FF1493]">
              {counts.years}+
            </h3>
            <p className="text-sm md:text-base font-medium text-[#FF1493]">
              Years of Experience
            </p>
          </motion.div>

          {/* Box 2: Cities Served */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2 p-4 md:p-6 border-2 border-[#FF1493] bg-white rounded-lg hover:bg-[#FF1493]/5 transition-colors duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#FF1493]">
              {counts.cities}+
            </h3>
            <p className="text-sm md:text-base font-medium text-[#FF1493]">
              Cities Served
            </p>
          </motion.div>

          {/* Box 3: Product Variants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 p-4 md:p-6 border-2 border-[#FF1493] bg-white rounded-lg hover:bg-[#FF1493]/5 transition-colors duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#FF1493]">
              {counts.products}+
            </h3>
            <p className="text-sm md:text-base font-medium text-[#FF1493]">
              Product Variants
            </p>
          </motion.div>

          {/* Box 4: Satisfied Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2 p-4 md:p-6 border-2 border-[#FF1493] bg-white rounded-lg hover:bg-[#FF1493]/5 transition-colors duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#FF1493]">
              {counts.clients}+
            </h3>
            <p className="text-sm md:text-base font-medium text-[#FF1493]">
              Satisfied Clients
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;