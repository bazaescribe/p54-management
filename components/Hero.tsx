'use client';

import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const [badgeState, setBadgeState] = useState<'initial' | 'expanding' | 'counting' | 'finished'>('initial');
  const [year, setYear] = useState(2021);
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBadgeState('expanding');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (badgeState === 'expanding') {
      const timer = setTimeout(() => {
        setBadgeState('counting');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [badgeState]);

  useEffect(() => {
    if (badgeState === 'counting') {
      const interval = setInterval(() => {
        setYear((prev) => {
          if (prev >= 2025) {
            clearInterval(interval);
            setBadgeState('finished');
            return 2025;
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [badgeState]);

  useEffect(() => {
    if (badgeState === 'finished') {
      const timer = setTimeout(() => {
        setShowEmoji(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [badgeState]);

  return (
    <section id="hero" className="relative w-full px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
      <motion.div
        className="max-w-4xl mx-auto py-40 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <motion.div
            className="flex items-center gap-3 p-1 rounded-3xl overflow-hidden"
            initial={{ backgroundColor: "rgba(255, 222, 223, 0)", paddingRight: "0.25rem" }}
            animate={{
              backgroundColor: badgeState === 'initial' ? "rgba(255, 222, 223, 0)" : "#FFE5EA",
              paddingRight: badgeState === 'initial' ? "0.25rem" : "1rem"
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div
              className="flex-shrink-0 flex justify-center items-center gap-2 h-8 w-8 rounded-full"
              style={{ background: "linear-gradient(-45deg, #e6193fff, #FF385C)" }}
            >
              <Image
                src="/assets/logos/airbnb-symbol-white.png"
                style={{ marginTop: "-2px" }}
                alt="Logo"
                width={16} height={16} />
            </div>
            <AnimatePresence>
              {badgeState !== 'initial' && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  className="flex items-center gap-3 whitespace-nowrap"
                >
                  <span className="text-[#FF385C] text-sm">Super Host {year}</span>
                  {showEmoji && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="text-sm"
                    >
                      🎉
                    </motion.span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold md:text-5xl lg:text-6xl text-brand mb-6 leading-tight"
        >
          La mejor manera de rentar tu propiedad vacacional
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-600 max-w-xl mx-auto mb-8 text-sm md:text-base"
        >
          Maximizamos los ingresos de tus propiedades de estancia corta para que tú disfrutes el resultado.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand text-white px-8 py-3 text-sm tracking-wider hover:bg-brand-light transition-colors duration-300 cursor-pointer rounded-sm"
        >
          Quiero rentar mi propiedad
        </motion.button>
      </motion.div>

      <motion.div
        className="w-full mx-auto relative aspect-[100/67] shadow-xl rounded-sm overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <Image
          src="/assets/photos/hero-traveler.jpg"
          alt="Viajero con maleta en apartamento"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {/* Logos placeholder */}
        <div className="h-16 w-32 flex items-center justify-center text-xs font-bold text-gray-400">
          <Image src="/assets/logos/airbnb.png" alt="Airbnb" width={115} height={36} />
        </div>
        <div className="h-16 w-32 flex items-center justify-center text-xs font-bold text-gray-400">
          <Image src="/assets/logos/booking.png" alt="Booking" width={190} height={32} />
        </div>
        <div className="h-16 w-32 flex items-center justify-center text-xs font-bold text-gray-400">
          <Image src="/assets/logos/expedia.png" alt="Expedia" width={149} height={30} />
        </div>
        <div className="h-16 w-32 flex items-center justify-center text-xs font-bold text-gray-400">
          <Image src="/assets/logos/vrbo.png" alt="VRBO" width={100} height={32} />
        </div>
        <div className="h-16 w-32 flex items-center justify-center text-xs font-bold text-gray-400">
          <Image src="/assets/logos/home-to-go.png" alt="Home To Go" width={88} height={48} />
        </div>
      </motion.div>

    </section>
  );
}
