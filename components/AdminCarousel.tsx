"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from '@hugeicons/core-free-icons'
import Carousel from "./Carousel";
import { useRef } from "react";

const services = [
  {
    title: "Operación y comunicación",
    desc: "Coordinamos check in, check out y atención inmediata para cada huésped.",
    image: "/assets/photos/service-support.jpg"
  },
  {
    title: "Limpieza profesional",
    desc: "Equipos confiables que dejan tu propiedad impecable en cada estancia.",
    image: "/assets/photos/service-cleaning.jpg"
  },
  {
    title: "Mantenimiento preventivo",
    desc: "Revisiones y arreglos ligeros para mantener todo funcionando sin sorpresas.",
    image: "/assets/photos/service-maintenance.jpg"
  },
  {
    title: "Gestión de precios y calendario",
    desc: "Optimizamos tarifas y disponibilidad según demanda y temporada.",
    image: "/assets/photos/service-pricing.jpg"
  },
  {
    title: "Administración del anuncio",
    desc: "Publicación, mensajes, reseñas y optimización completa del perfil.",
    image: "/assets/photos/service-admin.jpg"
  },
  {
    title: "Fotografía profesional",
    desc: "Imágenes que elevan la percepción y convierten vistas en reservas.",
    image: "/assets/photos/service-photography.jpg"
  },
  {
    title: "Staging y diseño interior ligero",
    desc: "Ajustes inteligentes que hacen tu propiedad más atractiva al instante.",
    image: "/assets/photos/service-staging.jpg"
  },
  {
    title: "Renta y reposición de muebles",
    desc: "Soluciones rápidas para mejorar o equipar sin inversión inicial.",
    image: "/assets/photos/service-furniture.jpg"
  },
  {
    title: "Domótica y automatización",
    desc: "Cerraduras inteligentes, sensores y sistemas que facilitan la operación.",
    image: "/assets/photos/service-automation.jpg"
  },
  {
    title: "Abastecimiento y amenities",
    desc: "Reposición de básicos y detalles que encantan a los huéspedes.",
    image: "/assets/photos/service-amenities.jpg"
  },
  {
    title: "Decoración estratégica",
    desc: "Toques visuales que elevan el estilo sin necesidad de remodelar.",
    image: "/assets/photos/service-decoration.jpg"
  },
  {
    title: "Remodelación ligera",
    desc: "Cambios puntuales para mejorar estética y funcionalidad.",
    image: "/assets/photos/service-remodel.jpg"
  }
];


export default function AdminCarousel() {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-20">
      <div className="w-full mx-auto flex flex-col gap-12">
        <div className="px-6 md:px-12 lg:px-24">
          <div ref={headerRef} className="w-full h-0" />
          <SectionHeader
            icon={<HugeiconsIcon icon={FavouriteIcon} size={32} />}
            title="Administración experta, resultados consistentes."
            description="La tranquilidad de saber que tu inversión está en las mejores manos."
          />
        </div>

        <Carousel alignToRef={headerRef} className="w-full">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col h-full w-[320px] md:w-[360px] flex-shrink-0 snap-start">
              <div className="relative w-full h-[420px] mb-4 rounded-sm overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="">
                <p className="text-lg font-bold text-brand tracking-wider">
                  {item.title}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section >
  );
}
