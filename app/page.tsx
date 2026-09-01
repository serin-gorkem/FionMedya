import HeaderNavigation from "@/app/components/HeaderNavigation";
import Hero from "@/app/components/sections/Hero";

import WineJourneyShell from "@/app/components/WineJourneyShell";
import ServicesSection from "@/app/components/sections/ServicesSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import AboutSection from "@/app/components/sections/AboutSection";
import Footer from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black text-ivory">
      <HeaderNavigation />

      <Hero />

      <WineJourneyShell>
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <Footer />
      </WineJourneyShell>
    </main>
  );
}