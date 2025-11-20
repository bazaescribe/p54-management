import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

export default function FeatureCard({ title, description, imageSrc, className = "" }: FeatureCardProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="relative w-full h-[480px] mb-4 overflow-hidden rounded-sm shadow-lg">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <p className="text-lg font-bold text-brand max-w-xl">{title}</p>
      <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
        {description}
      </p>
    </div>
  );
}
