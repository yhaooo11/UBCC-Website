import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Events from "@/components/sections/Events";
import FeaturedPhotosSection from "@/components/sections/FeaturedPhotosSection";
import AboutSection from "@/components/sections/AboutSection";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="w-full md:pt-38">
      <Navigation />
      <HeroSection />
      <Events />
      <AboutSection />
      <FeaturedPhotosSection />
      <FAQ />
      <Footer />
    </main>
  );
}
