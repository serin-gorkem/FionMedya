export default function FooterLocation() {
  const googleMapsUrl =
    "https://maps.app.goo.gl/tpZyyJBApizv4rtA8";

  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746.5405218887634!2d27.26566906445552!3d37.86043779432667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bea9a84eec8121%3A0x850d235896bc6c3d!2sFion%20Medya!5e0!3m2!1str!2str!4v1788613476512!5m2!1str!2str";

  return (
    <section
      className="
        border-t
        border-white/10
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          grid
          gap-12

          xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]
          xl:items-start
          xl:gap-14
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div className="max-w-[560px]">
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-wine-light
            "
          >
            Konum
          </p>

          <h2
            className="
              mt-5

              font-serif
              text-[clamp(3.2rem,6vw,6.2rem)]
              leading-[0.86]
              tracking-[-0.06em]
              text-ivory
            "
          >
            Kuşadası
            <br />
            <em className="text-white/55">merkezli.</em>
          </h2>

          <p
            className="
              mt-8
              max-w-[470px]

              text-[15px]
              leading-8
              text-white/58
            "
          >
            Kuşadası merkezli çalışıyor; Aydın, İzmir ve çevresindeki markalarla
            strateji, içerik, tasarım ve reklam projeleri üretiyoruz.
          </p>

          <div
            className="
              mt-10
              border-t
              border-white/10
              pt-8
            "
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.28em]
                text-white/35
              "
            >
              Fion Medya
            </p>

            <address
              className="
                mt-5
                not-italic

                text-[15px]
                leading-8
                text-white/72
              "
            >
              Türkmen
              <br />
              Candan Tarhan Blv. No:72
              <br />
              09400 Kuşadası / Aydın
            </address>
          </div>

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-x-6
              gap-y-3
            "
          >
            {["Kuşadası", "Aydın", "İzmir"].map((city) => (
              <span
                key={city}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-white/32
                "
              >
                {city}
              </span>
            ))}
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              mt-10
              inline-flex
              w-full
              max-w-[420px]
              items-center
              justify-between

              border-y
              border-white/10

              py-5

              text-[10px]
              uppercase
              tracking-[0.2em]
              text-ivory

              transition-colors
              duration-300

              hover:text-white
            "
          >
            <span>Yol tarifi / Haritada görüntüle</span>

            <span
              className="
                text-wine-light

                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            >
              ↗
            </span>
          </a>
        </div>

        {/* =================================================
            MAP
        ================================================== */}

        <div className="w-full xl:pt-1">
          <div
            className="
              overflow-hidden

              border
              border-white/12

              bg-black/20
            "
          >
            {/* TOP STRIP */}

            <div
              className="
                flex
                items-center
                justify-between

                border-b
                border-white/10

                px-5
                py-4
              "
            >
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.26em]
                  text-white/40
                "
              >
                Fion / Konum
              </span>

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.26em]
                  text-white/28
                "
              >
                Kuşadası / Aydın
              </span>
            </div>

            {/* MAP FRAME */}

            <div
              className="
                mx-auto
                w-full
                max-w-[760px]
                p-4
                sm:p-5
              "
            >
              <div
                className="
                  overflow-hidden
                  border
                  border-white/12
                  bg-black
                "
              >
                <div className="relative aspect-[4/3] w-full">
                  <iframe
                    title="Fion Medya Kuşadası Konum"
                    src={embedUrl}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                    "
                  />
                </div>
              </div>
            </div>

            {/* BOTTOM META */}

            <div
              className="
                flex
                flex-col
                gap-3

                border-t
                border-white/10

                px-5
                py-4

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-white/30
                "
              >
                Türkmen · Candan Tarhan Blv. No:72
              </span>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2

                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-wine-light

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                Google Maps’te aç
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
