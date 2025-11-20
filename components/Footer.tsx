import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  Facebook02Icon,
  Linkedin02Icon,
  Mail01Icon,
  CallIcon
} from '@hugeicons/core-free-icons';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col items-start">
          <div className="mb-6 relative w-24 h-8">
            <Image
              src="/brand/P54.svg"
              alt="P54 Logo"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Maximizamos el potencial de tu propiedad vacacional con gestión experta y tecnología de punta.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6">Explorar</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Propiedades</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Servicios</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6">Contacto</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li className="flex items-center gap-3">
              <HugeiconsIcon icon={Mail01Icon} size={20} />
              <a href="mailto:hola@p54.mx" className="hover:text-white transition-colors">hola@p54.mx</a>
            </li>
            <li className="flex items-center gap-3">
              <HugeiconsIcon icon={CallIcon} size={20} />
              <a href="tel:+525512345678" className="hover:text-white transition-colors">+52 (55) 1234 5678</a>
            </li>
          </ul>

          <div className="mt-8">
            <h5 className="text-sm font-bold mb-4">Síguenos</h5>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <HugeiconsIcon icon={InstagramIcon} size={24} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <HugeiconsIcon icon={Facebook02Icon} size={24} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <HugeiconsIcon icon={Linkedin02Icon} size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter/Form */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6">Mantente informado</h4>
          <p className="text-zinc-400 text-sm mb-4">
            Recibe noticias y consejos sobre el mercado de rentas vacacionales.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors rounded-sm"
            />
            <button className="bg-brand text-white px-6 py-3 text-sm font-bold tracking-wider hover:bg-brand-light transition-colors rounded-sm">
              SUSCRIBIRSE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <p>&copy; {new Date().getFullYear()} P54. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
