const projects = [
  {
    number: "01",
    title: "FUYAPI",
    service: "Sosyal Medya Yönetimi",
    description:
      "Kreatif içerikler ve reklam çalışmalarıyla markanın görünürlüğünü güçlendiren iletişim süreci.",
  },
  {
    number: "02",
    title: "MOTO EXPRESS",
    service: "Sosyal Medya Yönetimi",
    description:
      "Markanın ürün deneyimini yaratıcı kısa video fikirleriyle görünür hâle getiren içerik sistemi.",
  },
  {
    number: "03",
    title: "CAFE ROMA",
    service: "QR Menü Tasarımı",
    description:
      "Markanın fiziksel deneyimini dijital bir menü sistemiyle birleştiren tasarım çalışması.",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen z-10 border-t border-white/[0.07] px-6 py-24 sm:px-10 sm:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-wine-light">
            Seçili işler
          </p>

          <h2 className="font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.88] tracking-[-0.055em]">
            Fikirden
            <br />
            <em className="text-white/65">sonuca.</em>
          </h2>
        </div>

        <div
          data-wine-handoff
          className="relative z-20 grid gap-12 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <article key={project.number} className="group">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/[0.08] bg-[#10090c]">
                <span className="absolute left-5 top-5 text-[10px] text-white/40">
                  {project.number}
                </span>

                <span className="absolute bottom-6 left-6 font-serif text-4xl tracking-[-0.04em] text-white/80 transition-transform duration-700 group-hover:translate-x-2">
                  {project.title}
                </span>
              </div>

              <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-wine-light">
                {project.service}
              </p>

              <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
