"use client";

import { ArrowUpRight, Play } from "lucide-react";

const works = [
  {
    title: "FU PALAZZO",
    category: "Emlak & İnşaat",
    description:
      "Premium villa projesinin dijital algısını güçlendiren video ve reklam kreatifleri.",
    video: "/videos/works/fu-palazzo.mp4",
    tags: ["Video Prodüksiyon", "Reklam Videosu"],
  },
  {
    title: "CAFE ROMA",
    category: "Restoran & Kafe",
    description:
      "Mekan atmosferini ve menü deneyimini dijital ortamda daha davetkar hale getiren içerikler.",
    video: "/videos/works/cafe-roma.mp4",
    tags: ["Sosyal Medya", "Reels", "Fotoğraf"],
  },
  {
    title: "MOTOEXPRESS 09",
    category: "Mağaza & Ürün",
    description:
      "Ürün tanıtımları ve reels içerikleriyle markanın sosyal medyada görünürlüğünü artıran çalışmalar.",
    video: "/videos/works/motoexpress.mp4",
    tags: ["Ürün Videosu", "Reels İçerikleri"],
  },
];

export function SelectedWorksSection() {
  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/home/BG_3.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/home/BG_3_H.png')]" />

      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#030303] via-[#030303]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[#030303]/70 to-[#030303]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red)]">
              Seçili İşler
            </p>

            <h2 className="mt-5 max-w-2xl font-[var(--font-playfair)] text-4xl leading-tight tracking-[-0.03em] text-white md:text-6xl">
              Markaların Daha Güçlü Görünmesini Sağladığımız İşler.
            </h2>
          </div>

          <p className="max-w-xl font-[var(--font-inter)] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            Her işte amaç yalnızca güzel görünen içerik üretmek değil; markanın
            daha güvenilir, profesyonel ve tercih edilebilir algılanmasını
            sağlamaktır.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {works.map((work) => (
            <article
              key={work.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black/35 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/[0.04]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <video
                  src={work.video}
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
                      {work.category}
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
                  href="/projeler"
                  className="mt-6 inline-flex items-center gap-2 font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--red)] transition duration-300 hover:text-white"
                >
                  Detayları İncele
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/projeler"
            className="group inline-flex h-14 w-full items-center justify-center gap-3 border border-red-500/30 bg-black/25 px-6 font-[var(--font-inter)] text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-red-500/70 hover:bg-red-500/10 md:w-auto md:min-w-[320px]"
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
