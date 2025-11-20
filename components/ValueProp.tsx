import { HugeiconsIcon } from "@hugeicons/react";
import { Home12Icon } from '@hugeicons/core-free-icons'
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";

export default function ValueProp() {
  return (
    <section className="w-full px-6 flex flex-col gap-12 py-40  md:px-12 lg:px-24 bg-white">

      <SectionHeader
        icon={<HugeiconsIcon icon={Home12Icon} size={32} />}
        title="Tu propiedad puede dar mucho más"
        description="Optimizamos cada aspecto de tu inversión para maximizar el retorno y minimizar tus preocupaciones."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        {/* Row 1: 1/2 proportion */}
        <FeatureCard
          className="md:col-span-1"
          title="Servicio Total Market"
          description="Nos encargamos de todo. Desde la publicación en múltiples plataformas hasta la limpieza y mantenimiento."
          imageSrc="/assets/photos/feature-couple.jpg"
        />
        <FeatureCard
          className="md:col-span-2"
          title="Maximiza el valor de tu activo"
          description="Estrategias de precios dinámicos y gestión profesional para asegurar la mayor ocupación y el mejor precio por noche, superando el rendimiento del mercado tradicional."
          imageSrc="/assets/photos/feature-home.jpg"
        />

        {/* Row 2: 2/1 proportion */}
        <FeatureCard
          className="md:col-span-2"
          title="Mantenimiento impecable"
          description="Cuidamos tu propiedad como si fuera nuestra. Inspecciones regulares, mantenimiento preventivo y reparaciones inmediatas para que siempre esté en perfectas condiciones."
          imageSrc="/assets/photos/feature-woman.jpg"
        />
        <FeatureCard
          className="md:col-span-1"
          title="Transparencia Total"
          description="Acceso a reportes detallados en tiempo real sobre el rendimiento, ocupación y estado de tu propiedad."
          imageSrc="/assets/photos/feature-marina.jpg"
        />
      </div>

    </section>
  );
}
