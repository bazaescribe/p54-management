'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
  alignToRef?: React.RefObject<HTMLElement | null>;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ children, alignToRef, className }) => {
  const [paddingLeft, setPaddingLeft] = useState(0);
  const [scrollStep, setScrollStep] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId = 0;

    const measureAndApply = () => {
      const carouselEl = carouselRef.current;
      const trackEl = trackRef.current;
      if (!carouselEl) return;

      // Calculate padding based on alignment ref
      let left = 0;
      if (alignToRef?.current) {
        const rect = alignToRef.current.getBoundingClientRect();
        left = Math.max(0, Math.round(rect.left));
      } else {
        // Default fallback if no ref provided, maybe just some container padding
        // For now, let's assume 1rem if no ref, or 0
        left = 16; // 1rem default
      }
      setPaddingLeft(left);

      // Measure first child width and gap to compute scroll step
      if (trackEl && trackEl.firstElementChild) {
        const firstChild = trackEl.firstElementChild as HTMLElement;
        const stylesComputed = getComputedStyle(trackEl);
        const gapPx = parseFloat(stylesComputed.gap) || 0;
        const childWidth = firstChild.offsetWidth || 0;
        const step = Math.round(childWidth + gapPx);
        if (step > 0) setScrollStep(step);
      }
    };

    const scheduleMeasure = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measureAndApply);
    };

    // Initial measure
    scheduleMeasure();

    // Recalculate on scroll/resize
    window.addEventListener('resize', scheduleMeasure, { passive: true });

    // Observe changes
    const ro = new ResizeObserver(scheduleMeasure);
    if (alignToRef?.current) ro.observe(alignToRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    if (carouselRef.current) ro.observe(carouselRef.current);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', scheduleMeasure);
      ro.disconnect();
    };
  }, [alignToRef]);

  const getSnapPoints = () => {
    if (!carouselRef.current || !trackRef.current) return [];
    const carousel = carouselRef.current;
    const track = trackRef.current;
    const items = Array.from(track.children).filter(
      (child) => !child.classList.contains(styles.spacer)
    ) as HTMLElement[];

    if (items.length === 0) return [];

    const containerRect = carousel.getBoundingClientRect();
    const currentScroll = carousel.scrollLeft;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    // Calculate snap position for each item
    // We want item.left to align with container.left + paddingLeft
    // itemPos relative to viewport = itemRect.left
    // containerPos relative to viewport = containerRect.left
    // offset needed = itemRect.left - (containerRect.left + paddingLeft)
    // absolute scroll target = currentScroll + offset

    const points = items.map(item => {
      const itemRect = item.getBoundingClientRect();
      // Target scroll position to align this item to the start (plus padding)
      const target = currentScroll + (itemRect.left - (containerRect.left + paddingLeft));
      return Math.round(target);
    });

    // Add the end snap point (max scroll)
    points.push(maxScroll);

    // Filter out duplicates and sort
    return Array.from(new Set(points)).sort((a, b) => a - b);
  };

  const handlePrev = () => {
    if (!carouselRef.current) return;
    const currentScroll = Math.round(carouselRef.current.scrollLeft);
    const points = getSnapPoints();

    // Find the first point strictly less than currentScroll (with small tolerance)
    const target = points.reverse().find(p => p < currentScroll - 5);

    if (target !== undefined) {
      carouselRef.current.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (!carouselRef.current) return;
    const currentScroll = Math.round(carouselRef.current.scrollLeft);
    const points = getSnapPoints();

    // Find the first point strictly greater than currentScroll (with small tolerance)
    const target = points.find(p => p > currentScroll + 5);

    if (target !== undefined) {
      carouselRef.current.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  // Framer motion variants for the container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className={className}>
      <div
        className={styles.carousel}
        ref={carouselRef}
        style={{
          paddingLeft: paddingLeft,
          // We don't set paddingRight here anymore, we use the spacer
          scrollPaddingLeft: paddingLeft,
          // Pass the padding as a CSS variable for the spacer
          ['--padding-left' as any]: `${paddingLeft}px`,
        }}
      >
        <motion.div
          className={styles.track}
          ref={trackRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {children}
          {/* Spacer for right padding snapping */}
          <div className={styles.spacer} />
        </motion.div>
      </div>

      <div className={styles.controls} style={{ paddingLeft: paddingLeft || '1rem' }}>
        <div className={styles.buttonGroup}>
          <button onClick={handlePrev} className={styles.button} aria-label="Previous slide">
            <ChevronLeft size={16} />
          </button>
          <button onClick={handleNext} className={styles.button} aria-label="Next slide">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
