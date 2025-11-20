"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChampionIcon } from '@hugeicons/core-free-icons';
import Image from "next/image";

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Parse the numeric value and suffix/prefix if any
  const numericValue = parseFloat(value.replace(/,/g, ""));
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Format based on original string (decimal or integer)
        if (isDecimal) {
          ref.current.textContent = latest.toFixed(1);
        } else {
          ref.current.textContent = Math.round(latest).toLocaleString();
        }
      }
    });
  }, [springValue, isDecimal]);

  return <span ref={ref} />;
}

export default function Stats() {
  const stats = [
    {
      title: "Rating",
      value: "4.8",
      description: "de 5 estrellas",
    },
    {
      title: "Más de",
      value: "4,000",
      description: "Huéspedes felices",
    },
    {
      title: "Más de",
      value: "10,000",
      description: "Noches reservadas",
    },
  ];

  return (
    <section className="w-full py-60 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <SectionHeader
          icon={<HugeiconsIcon icon={ChampionIcon} size={32} />}
          title="Resultados que se sienten."
          description="Más noches reservadas. Más ingresos por mes. Y más tranquilidad para ti."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <span className="text-xs tracking-widest text-gray-500 mb-1">{stat.title}</span>
              <span className="text-6xl font-black md:text-7xl text-brand font-serif mb-6">
                <Counter value={stat.value} />
              </span>
              <span className="text-xs tracking-widest text-gray-500">{stat.description}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-18 relative w-48 h-24 flex justify-center items-center mx-auto">
          <Image
            src="/assets/misc/badge-airbnb.png"
            alt="Airbnb Super Host Badge"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
