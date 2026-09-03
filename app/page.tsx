import HeaderNavigation from "@/app/components/HeaderNavigation";
import QuickNavigation from "@/app/components/QuickNavigation";
import WineJourneyShell from "@/app/components/WineJourneyShell";
import SmoothNavigationProvider from "@/app/components/navigation/SmoothNavigationProvider";
import AboutSection from "@/app/components/sections/about/AboutSection";
import Footer from "@/app/components/sections/footer/Footer";
import Hero from "@/app/components/sections/hero/Hero";
import ProjectsSection from "@/app/components/sections/projects/ProjectsSection";
import ServicesSection from "@/app/components/sections/services/ServicesSection";

export default function Home() {
  return (
    <SmoothNavigationProvider>
      <main className="bg-black text-ivory">
        <HeaderNavigation />
        <QuickNavigation />
        <Hero />

        <WineJourneyShell>
          <ServicesSection />
          <ProjectsSection />
          <AboutSection />
          <Footer />
        </WineJourneyShell>
      </main>
    </SmoothNavigationProvider>
  );
}
