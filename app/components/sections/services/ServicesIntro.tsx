import SectionOpening from "@/app/components/ui/SectionOpening";

export default function ServicesIntro() {
  return (
    <SectionOpening
      eyebrow="01 / HİZMETLER · DİJİTAL MEDYA"
      titleId="services-title"
      detailHref="/hizmetler"
      detailLabel="Hizmetleri incele"
      className="
        !mb-16
        xl:!mb-20
      "
      title={
        <>
          Daha fazla
          <br />

          içerik değil.
          <br />

          <em className="text-white/65">
            Daha iyi fikir.
          </em>
        </>
      }
    />
  );
}