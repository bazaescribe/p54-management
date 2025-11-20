'use client';

import React from "react";
import { motion, Variants } from "framer-motion";

interface SectionHeaderProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ icon, title, description, className = "" }: SectionHeaderProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <motion.div
      className={`flex flex-col items-center text-center mb-16 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {icon && (
        <motion.div variants={itemVariants} className="text-brand mb-4 flex justify-center">
          {icon}
        </motion.div>
      )}
      <motion.h2
        variants={itemVariants}
        className="text-3xl max-w-3xl mx-auto md:text-4xl font-bold text-brand mb-4 font-serif"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={itemVariants}
          className="text-gray-600 max-w-3xl mx-auto text-sm"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
