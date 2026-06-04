"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { useMemo, useState } from "react";

const filters = ["Tümü", "Restoran", "Emlak", "Mağaza"];

const works = [
  {
    title: "FU PALAZZO",
    sector: "Emlak & İnşaat",
    category: "Emlak",
    description:
      "Villa projesinin premium yaşam algısını güçlendirmek için video prodüksiyon ve reklam kreatifleri ürettik.",
    video: "/videos/works/fu-palazzo.mp4",
    tags: ["Video Prodüksiyon", "Reklam Videosu"],
  },
  {
    title: "CAFE ROMA",
    sector: "Restoran & Kafe",
    category: "Restoran",
    description:
      "Menü ve marka deneyimini dijital ortama taşıyarak kullanıcıda davetkar bir his ve özel içerikler hazırladık.",
    video: "/videos/works/cafe-roma.mp4",
    tags: ["Web Tasarım", "Grafik", "Fotoğraf"],
  },
  {
    title: "MOTOEXPRESS 09",
    sector: "Mağaza & Ürün",
    category: "Mağaza",
    description:
      "Ürün tanıtımları ve reels içerikleriyle markanın sosyal medyada görünürlüğünü ve etkileşimini artırdık.",
    video: "/videos/works/motoexpress.mp4",
    tags: ["Reels İçerikleri", "Ürün Videosu"],
  },
];

export function WorksSection() {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  const filteredWorks = useMemo(() => {
    if (activeFilter === "Tümü") {
      return works;
    }

    return works.filter((work) => work.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/H_BG.png')] bg-cover bg-center bg-no-repeat opacity-10 md:bg-[url('/images/V_BG.png')]" />
      <div className="absolute inset-0 bg-[#030303]/92" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030303] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#030303]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div>
          <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red)]">
            Seçili İşlerimiz
          </p>

          <h2 className="mt-5 max-w-2xl font-[var(--font-playfair)] text-4xl leading-tight tracking-[-0.03em] text-white md:text-6xl">
            Başarı Hikayeleri
          </h2>
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={[
                  "shrink-0 rounded-xl border px-5 py-3 font-[var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.16em] transition duration-300",
                  isActive
                    ? "border-red-500/70 bg-red-500/10 text-white"
                    : "border-white/10 bg-white/[0.025] text-zinc-500 hover:border-red-500/40 hover:text-white",
                ].join(" ")}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <article
              key={work.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/[0.035]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                <video
                  src={work.video}
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/60" />

                <button
                  type="button"
                  aria-label={`${work.title} videosunu oynat`}
                  className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition duration-300 group-hover:border-red-500/60 group-hover:bg-red-500/20"
                >
                  <Play size={18} fill="currentColor" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-[var(--font-inter)] text-sm font-bold uppercase tracking-[0.18em] text-white">
                      {work.title}
                    </h3>

                    <p className="mt-1 font-[var(--font-inter)] text-xs text-zinc-500">
                      {work.sector}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="mt-1 text-[var(--red)] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                <p className="mt-5 font-[var(--font-inter)] text-sm leading-7 text-zinc-500">
                  {work.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 font-[var(--font-inter)] text-[10px] font-medium text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--red)] transition duration-300 hover:text-white"
                >
                  Detayları İncele
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center">
            <p className="font-[var(--font-inter)] text-sm text-zinc-500">
              Bu kategori için henüz proje eklenmedi.
            </p>
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex h-14 w-full items-center justify-center gap-3 border border-red-500/30 bg-black/20 px-6 font-[var(--font-inter)] text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-red-500/70 hover:bg-red-500/10 md:w-auto md:min-w-[320px]"
          >
            Tüm Projeleri Gör
            <ArrowUpRight
              size={16}
              className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}