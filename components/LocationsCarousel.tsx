'use client'

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { HugeiconsIcon } from "@hugeicons/react";
import { GlobeIcon } from '@hugeicons/core-free-icons'
import Carousel from "./Carousel";
import { useRef } from "react";

const locations = [
  {
    name: "Ciudad de México",
    image: "/assets/photos/city-mexico.jpg",
  },
  {
    name: "Miami",
    image: "/assets/photos/city-miami.jpg",
  },
  {
    name: "Guadalajara",
    image: "/assets/photos/city-guadalajara.jpg",
  },
  {
    name: "Monterrey",
    image: "/assets/photos/city-monterrey.jpg",
  },
  {
    name: "Orlando",
    image: "/assets/photos/city-orlando.jpg",
  },
  {
    name: "Gainesville",
    image: "/assets/photos/city-gainesville.jpg",
  },
  {
    name: "Cancún",
    image: "/assets/photos/city-cancun.jpg",
  },
  {
    name: "Puerto Vallarta",
    image: "/assets/photos/city-vallarta.jpg",
  },

];

export default function LocationsCarousel() {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-20">
      <div className="w-full mx-auto flex flex-col gap-12">
        <div className="px-6 md:px-12 lg:px-24">
          <div ref={headerRef} className="w-full h-0" />
          <SectionHeader
            icon={<HugeiconsIcon icon={GlobeIcon} size={32} />}
            title="Donde vives. Donde viajamos. Donde operamos contigo."
            description="Cada ciudad tiene su ritmo. Nosotros nos adaptamos a él. Conocemos sus barrios, a sus huéspedes y cómo lograr que tu propiedad destaque justo aquí."
          />
        </div>

        <Carousel alignToRef={headerRef} className="w-full">
          {locations.map((location, index) => (
            <div
              key={index}
              className="relative group aspect-[1/1] w-[280px] md:w-[350px] flex-shrink-0 overflow-hidden rounded-sm shadow-lg snap-start"
            >
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 group-hover:backdrop-blur-[10px] transition-all duration-300" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold font-serif">
                  {location.name}
                </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
