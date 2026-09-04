import SectionOpening from "@/app/components/ui/SectionOpening";

export default function BlogIntro() {
  return (
    <SectionOpening
      eyebrow="03 / Blog · FION NOTLARI"
      titleId="home-blog-title"
      detailHref="/blog"
      detailLabel="Blog'a git"
      title={
        <>
          Fikirler.
          <br />

          <span className="text-white/60">
            Notlar.
          </span>

          <br />

          <em className="text-[#c45a78]">
            Bakışlar.
          </em>
        </>
      }
    />
  );
}