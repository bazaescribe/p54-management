'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Check if we've scrolled past the hero section (with a small buffer)
        setIsScrolledPastHero(heroBottom < 100);
      }

      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Mobile Top Navbar */}
      <nav
        className="flex fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 transition-all duration-300 bg-[#F6F6F2]"
        style={{
          height: '80px',
          boxShadow: isScrolled ? '0 2px 16px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div className="w-full flex items-center justify-between relative">

          {/* Logo - Left on Desktop, Center on Mobile */}
          <div className="flex-1 flex align-center justify-center md:justify-start">
            <div className="cursor-pointer">
              <Image src="/brand/P54.svg" alt="Logo" width={76} height={28} />
            </div>
          </div>

          {/* Desktop CTA - Right side, appears after scroll */}
          <div className="hidden md:block">
            <AnimatePresence>
              {isScrolledPastHero && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-brand text-white px-5 py-3 text-sm font-medium rounded-sm hover:bg-brand-light transition-colors"
                >
                  Quiero rentar mi propiedad
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Mobile Floating CTA - Bottom, appears after scroll */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-6 pointer-events-none">
        <AnimatePresence>
          {isScrolledPastHero && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto"
            >
              <button className="w-full bg-brand text-white py-4 text-base font-medium rounded-sm shadow-lg hover:bg-brand-light transition-colors">
                Quiero rentar mi propiedad
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
