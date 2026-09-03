import type { Metadata } from "next";

import DetailPageShell from "@/app/components/pages/DetailPageShell";

import ProjectDetailShowcase from "@/app/components/sections/projects/detail/ProjectDetailShowcase";

import { projects } from "@/app/components/sections/projects/projects.data";

export const metadata: Metadata = {
  title: "İşler | Fion Medya",

  description:
    "Fion Medya sosyal medya, dijital reklam, tasarım ve dijital deneyim projelerinden seçili çalışmalar.",
};
import DetailLavaBackground from "@/app/components/pages/DetailLavaBackground";
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
      description="Gerçek markalar için ürettiğimiz işlerden seçtiklerimiz. Sonucu söze değil, işe bırakıyoruz."
    >
      <div>
        {projects.map((project) => (
          <ProjectDetailShowcase key={project.number} project={project} />
        ))}
      </div>
    </DetailPageShell>
  );
}
