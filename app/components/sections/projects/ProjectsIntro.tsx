import SectionOpening from "@/app/components/ui/SectionOpening";

export default function ProjectsIntro() {
  return (
    <SectionOpening
      eyebrow="02 / PROJELER · SEÇİLİ İŞLER"
      titleId="projects-title"
      detailHref="/isler"
      detailLabel="Tüm projeleri gör"
      title={
        <>
          Biz
          <br />
          anlatmayalım.
          <br />

          <em className="text-white/65">
            İşler anlatsın.
          </em>
        </>
      }
    />
  );
}