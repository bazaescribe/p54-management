import type { Metadata } from "next";
import { Playfair_Display, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "P54 - Rendimiento real",
  description: "Convierte tu propiedad en un negocio real",
  icons: {
    icon: "/brand/favicon.png",
    shortcut: "/brand/favicon.png",
    apple: "/brand/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${instrumentSerif.variable} ${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
