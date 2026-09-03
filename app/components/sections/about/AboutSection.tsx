import SectionContainer from "@/app/components/ui/SectionContainer";
import WineLane from "@/app/components/ui/WineLane";
import AboutIntro from "./AboutIntro";
import AboutManifesto from "./AboutManifesto";
import AboutSummary from "./AboutSummary";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden border-t border-white/10 bg-black">
      <WineLane />
      <SectionContainer>
        <AboutIntro />
        <AboutManifesto />
        <AboutSummary />
      </SectionContainer>
    </section>
  );
}
