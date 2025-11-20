import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import LocationsCarousel from "@/components/LocationsCarousel";
import Stats from "@/components/Stats";
import AdminCarousel from "@/components/AdminCarousel";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-20">
      <Navbar />
      <Hero />
      <ValueProp />
      <LocationsCarousel />
      <Stats />
      <AdminCarousel />
      <CallToAction />
      <Footer />
    </main>
  );
}
