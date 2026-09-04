import type { Metadata } from "next";

import DetailPageShell from "@/app/components/pages/DetailPageShell";
import DetailLavaBackground from "@/app/components/pages/DetailLavaBackground";

import ClientsLogoSlider from "@/app/components/sections/projects/ClientsLogoSlider";
import ClientWorkGallery from "@/app/components/sections/projects/detail/ClientWorkGallery";
import DetailContactCTA from "../components/pages/DetailContactCTA";

export const metadata: Metadata = {
  title: "İşler",

  description:
    "Fion Medya'nın farklı markalar için ürettiği sosyal medya ve dijital deneyim çalışmalarından seçkiler.",
};

export default function IslerPage() {
  return (
    <DetailPageShell
      background={<DetailLavaBackground variant="projects" />}
      eyebrow="Fion / İşler"
      title={
        <>
          Biz
          <br />
          anlatmayalım.
          <br />
          <em className="text-white/55">İşler anlatsın.</em>
        </>
      }
      description="Farklı markalar için ürettiğimiz sosyal medya ve dijital deneyim çalışmalarından seçkiler."
    >
      <ClientsLogoSlider variant="detail" />

      <ClientWorkGallery />

      <DetailContactCTA />
    </DetailPageShell>
  );
}
