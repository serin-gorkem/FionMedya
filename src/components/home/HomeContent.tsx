import { AboutSection } from "./AboutSection";
import { AnswerSection } from "./AnswerSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { ProblemSection } from "./ProblemSection";
import { RevealSection } from "./RevealSection";
import { ServicesSection } from "./ServicesSection";
import { TrustSection } from "./TrustSection";
import { WorksSection } from "./WorksSection";

export function HomeContent() {
  return (
    <main className="home-content">
      <HeroSection />

      <RevealSection />

      <ProblemSection />

      <AnswerSection />

      <WorksSection />

      <ServicesSection />

      <TrustSection />

      <AboutSection />

      <ContactSection />
    </main>
  );
}