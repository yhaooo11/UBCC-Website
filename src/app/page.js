import HeroSection from "@/components/HeroSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import AboutSection from "@/components/AboutSection";
import ExecMembers from "@/components/ExecMembers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <UpcomingEvents />
      <AboutSection />
      <ExecMembers />
      <FAQ />
      <Footer />
    </main>
  );
}
