'use client';

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function CallToAction() {
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Magnetic button
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const btnXSpring = useSpring(btnX, { stiffness: 150, damping: 15, mass: 0.1 });
  const btnYSpring = useSpring(btnY, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    btnX.set((e.clientX - centerX) * 0.3);
    btnY.set((e.clientY - centerY) * 0.3);
  };

  const handleButtonMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0, 0, 0, 0.03), transparent 80%)`;

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-full py-64 flex flex-col items-center text-center px-6 overflow-hidden group"
      style={{
        background: "linear-gradient(to bottom, white, transparent)",
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{ background }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-4xl md:text-6xl font-bold text-brand font-serif mb-8 max-w-4xl leading-tight"
      >
        Explota el potencial de tu inversión
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 text-gray-500 mb-12 max-w-xl text-sm"
      >
        Agenda una llamada con nuestro equipo y descubre el potencial de tu inversión.
      </motion.p>

      <motion.button
        ref={buttonRef}
        onMouseMove={handleButtonMouseMove}
        onMouseLeave={handleButtonMouseLeave}
        style={{ x: btnXSpring, y: btnYSpring }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10 bg-brand text-white px-10 py-4 text-sm tracking-wider hover:bg-brand-light transition-colors duration-300 cursor-pointer rounded-sm"
      >
        Comenzar ahora
      </motion.button>
    </section>
  );
}
