import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { SelectedWorksSection } from "@/components/home/SelectedWorksSection";
import { TrustSection } from "@/components/home/TrustSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <SelectedWorksSection />
      <TrustSection />
      <FinalCTASection />
    </main>
  );
}