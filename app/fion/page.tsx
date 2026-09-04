import type {
  Metadata,
} from "next";

import DetailHeader from "@/app/components/pages/DetailHeader";
import DetailLavaBackground from "@/app/components/pages/DetailLavaBackground";
import DetailContactCTA from "@/app/components/pages/DetailContactCTA";

import FionHero from "@/app/components/sections/fion/FionHero";
import FionManifesto from "@/app/components/sections/fion/FionManifesto";
import FionNotUs from "@/app/components/sections/fion/FionNotUs";

export const metadata: Metadata = {
  title:
    "Fion",

  description:
    "Fion Medya'nın yaratıcı bakış açısını, çalışma biçimini ve markalara yaklaşımını keşfedin.",

  alternates: {
    canonical: "/fion",
  },
};

export default function FionPage() {
  return (
    <main
      className="
        relative
        isolate

        min-h-screen

        overflow-x-clip

        bg-black
        text-[#f4efe9]
      "
    >
      {/* =============================================
          BACKGROUND
      ============================================== */}

      <DetailLavaBackground
        variant="fion"
      />

      {/* =============================================
          PAGE
      ============================================== */}

      <div className="relative z-10">
        <DetailHeader />

        <FionHero />

        <FionManifesto />

        <FionNotUs />

        <DetailContactCTA />
      </div>
    </main>
  );
}