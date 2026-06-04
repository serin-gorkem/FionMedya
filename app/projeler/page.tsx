import { ArrowUpRight, Play } from "lucide-react";
import { InnerPageShell } from "@/components/layout/InnerPageShell";

const projects = [
  {
    title: "FU PALAZZO",
    category: "Emlak & İnşaat",
    description:
      "Premium villa projesinin dijital algısını güçlendiren video ve reklam kreatifleri.",
    video: "/videos/works/fu-palazzo.mp4",
  },
  {
    title: "CAFE ROMA",
    category: "Restoran & Kafe",
    description:
      "Mekan atmosferini ve menü deneyimini dijital ortamda daha davetkar hale getiren içerikler.",
    video: "/videos/works/cafe-roma.mp4",
  },
  {
    title: "MOTOEXPRESS 09",
    category: "Mağaza & Ürün",
    description:
      "Ürün tanıtımları ve reels içerikleriyle sosyal medya görünürlüğünü artıran çalışmalar.",
    video: "/videos/works/motoexpress.mp4",
  },
];

export default function ProjectsPage() {
  return (
    <InnerPageShell
      eyebrow="Projeler"
      title="Markaların Daha Güçlü Görünmesini Sağladığımız İşler."
      description="Her proje, markanın daha güvenilir, daha profesyonel ve daha tercih edilebilir görünmesi için tasarlanır."
      background="/images/home/BG_4_H.png"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-[var(--red-border)] hover:bg-[var(--red-soft)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
              <video
                src={project.video}
                className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75" />

              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md"
              >
                <Play size={18} fill="currentColor" />
              </button>
            </div>

            <div className="p-6">
              <p className="font-[var(--font-inter)] text-xs text-zinc-500">
                {project.category}
              </p>

              <h2 className="mt-2 font-[var(--font-inter)] text-sm font-bold uppercase tracking-[0.18em] text-white">
                {project.title}
              </h2>

              <p className="mt-5 font-[var(--font-inter)] text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              <a
                href="/iletisim"
                className="mt-6 inline-flex items-center gap-2 font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--red-bright)] transition hover:text-white"
              >
                Benzer Proje İstiyorum
                <ArrowUpRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </InnerPageShell>
  );
}