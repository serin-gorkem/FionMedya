import type { Metadata } from "next";

import DetailPageShell from "@/app/components/pages/DetailPageShell";

import ServiceDetailSection from "@/app/components/sections/services/detail/ServiceDetailSection";

import { serviceDetails } from "@/app/components/sections/services/detail/services-detail.data";
import DetailLavaBackground from "@/app/components/pages/DetailLavaBackground";
import DetailContactCTA from "../components/pages/DetailContactCTA";

export const metadata: Metadata = {
  title: "Hizmetler",

  description:
    "Fion Medya sosyal medya yönetimi, grafik tasarım ve dijital reklam yönetimi hizmetleri. Strateji, kreatif üretim ve reklam süreçlerini aynı marka hedefi etrafında birleştiriyoruz.",
};

export default function HizmetlerPage() {
  return (
    <DetailPageShell
      background={<DetailLavaBackground variant="services" />}
      eyebrow="Fion / Hizmetler"
      title={
        <>
          Fikri
          <br />
          görünür,
          <br />
          <em className="text-white/55">hatırlanır</em>
          <br />
          ve etkili
          <br />
          hale getiriyoruz.
        </>
      }
      description="Sosyal medya, grafik tasarım ve reklamı ayrı ayrı teslim edilen işler olarak değil, markanın aynı dili konuşan parçaları olarak ele alıyoruz."
    >
      {/* SERVICES */}

      <div>
        {serviceDetails.map((service) => (
          <ServiceDetailSection key={service.number} service={service} />
        ))}
      </div>
      
      <DetailContactCTA />
    </DetailPageShell>
  );
}
