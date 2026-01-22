import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Events from "@/components/sections/Events";
import AboutSection from "@/components/sections/AboutSection";
import ExecMembers from "@/components/sections/ExecMembers";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      {/* <HeroSection />
      <Events />
      <AboutSection />
      <ExecMembers />
      <FAQ />
      <Footer /> */}
    </main>
  );
}
