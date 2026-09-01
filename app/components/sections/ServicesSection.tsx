const services = [
  {
    number: "01",
    title: "Sosyal Medya Yönetimi",
    description:
      "Markanızın dijitalde tutarlı, yaratıcı ve akılda kalıcı bir iletişim dili oluşturmasını sağlıyoruz.",
  },
  {
    number: "02",
    title: "Grafik Tasarım",
    description:
      "Markanızın karakterini yalnızca anlatmıyor, her temas noktasında görünür hâle getiriyoruz.",
  },
  {
    number: "03",
    title: "Reklam Yönetimi",
    description:
      "Doğru mesajı doğru kitleyle buluşturuyor, reklam bütçesini stratejik biçimde kullanıyoruz.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-clip
        border-t border-white/[0.07]
        bg-[#0b0809]
      "
    >
      {/* Sağ alanı ayıran editorial çizgi */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-0 top-0
          left-[64%]
          hidden w-px
          bg-white/[0.055]
          lg:block
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10
          mx-auto
          grid max-w-7xl
          px-6
          sm:px-10
          lg:grid-cols-[64%_36%]
        "
      >
        {/* Sol içerik */}
        <div className="lg:pr-16">
          {/* Intro */}
          <div
            className="
              flex
              min-h-[55vh]
              flex-col
              justify-center
              py-24
              sm:py-32
            "
          >
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-wine-light">
              Ne yapıyoruz?
            </p>

            <h2
              className="
                max-w-3xl
                font-serif
                text-[clamp(3.5rem,7vw,7rem)]
                leading-[0.88]
                tracking-[-0.055em]
              "
            >
              Markalar için
              <br />
              <em className="text-white/65">
                etkili işler.
              </em>
            </h2>

            <p className="mt-9 max-w-md text-sm leading-7 text-muted sm:text-[15px]">
              Bir markanın ihtiyacı olan fikri, dili ve görünürlüğü birlikte
              tasarlıyoruz.
            </p>
          </div>

          {/* Services */}
          <div>
            {services.map((service) => (
              <article
                key={service.number}
                className="
                  group
                  flex
                  min-h-[42vh]
                  flex-col
                  justify-center
                  border-t border-white/[0.09]
                  py-16
                "
              >
                <div className="flex items-start gap-8 sm:gap-12">
                  <span
                    className="
                      mt-2
                      text-[10px]
                      tracking-[0.2em]
                      text-wine-light
                    "
                  >
                    {service.number}
                  </span>

                  <div>
                    <h3
                      className="
                        max-w-xl
                        font-serif
                        text-[clamp(2.4rem,4vw,4.3rem)]
                        leading-[0.95]
                        tracking-[-0.04em]
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:translate-x-2
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-7
                        max-w-md
                        text-sm
                        leading-7
                        text-muted
                      "
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Şarap/bardak için sağ alan */}
        <div
          aria-hidden="true"
          className="hidden lg:block"
        />
      </div>

      {/* Bir sonraki section'a yumuşak geçiş */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-0 left-0
          h-40 w-full
          bg-gradient-to-b
          from-transparent
          to-[#0d090b]
        "
      />
    </section>
  );
}