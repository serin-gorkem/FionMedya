import TextLink from "@/app/components/ui/TextLink";

export default function FooterSeoSummary() {
  return (
    <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/20 pt-8 lg:flex-row lg:items-end">
      <div>
        <p className="text-[8px] uppercase tracking-[0.32em] text-white/38">
          Fion Medya
        </p>
        <p className="mt-4 max-w-[620px] text-sm leading-7 text-white/54">
          Kuşadası merkezli yaratıcı medya ekibi Fion Medya; sosyal medya
          yönetimi, grafik tasarım ve dijital reklam alanlarında Aydın, İzmir ve
          çevresindeki markalarla çalışır.
        </p>
      </div>
      <TextLink href="#hero" arrow="up" className="shrink-0">
        Başa dön
      </TextLink>
    </div>
  );
}
