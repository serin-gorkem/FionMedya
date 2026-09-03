const disciplines = [
  "Sosyal Medya",
  "Grafik Tasarım",
  "Dijital Reklam",
  "Strateji",
  "Dijital Deneyim",
];

/* =========================================================
   MINI CAMERA
========================================================= */

function MiniCamera() {
  return (
    <div
      aria-hidden="true"
      className="
        relative
        flex
        h-[70px]
        w-[86px]
        rotate-[6deg]
        items-center
        justify-center
        rounded-[18px]
        border
        border-[#5a1b30]
        bg-[#10070a]
      "
    >
      <div
        className="
          relative
          h-9
          w-12
          rounded-[8px]
          border
          border-[#c45a78]/65
        "
      >
        {/* lens */}

        <span
          className="
            absolute
            left-1/2
            top-1/2
            h-5
            w-5
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#c45a78]/70
          "
        />

        {/* camera top */}

        <span
          className="
            absolute
            -top-[7px]
            left-[8px]
            h-[7px]
            w-[15px]
            rounded-t-[4px]
            bg-[#6d1e37]
          "
        />

        {/* indicator */}

        <span
          className="
            absolute
            right-[5px]
            top-[5px]
            h-[4px]
            w-[4px]
            rounded-full
            bg-[#c45a78]
          "
        />
      </div>
    </div>
  );
}

/* =========================================================
   STUDIO BOARD
========================================================= */

function StudioBoard() {
  return (
    <div className="group/board relative w-full max-w-[560px]">
      {/* =====================================================
          SMALL CAMERA
      ====================================================== */}

      <div
        className="
          absolute
          -right-4
          -top-8
          z-20
          hidden
          transition-transform
          duration-700

          group-hover/board:-rotate-[5deg]

          xl:block
        "
      >
        <MiniCamera />
      </div>

      {/* =====================================================
          REAR CARD
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          -left-[5%]
          top-[12%]

          hidden

          h-[58%]
          w-[38%]

          -rotate-[7deg]

          rounded-[22px]

          border
          border-[#4e1426]

          bg-[#16080d]

          opacity-65

          transition-all
          duration-700

          group-hover/board:-translate-x-3
          group-hover/board:-rotate-[10deg]

          xl:block
        "
      />

      {/* =====================================================
          MAIN BOARD
      ====================================================== */}

      <div
        className="
          relative
          z-10

          overflow-hidden

          rounded-[30px]

          border
          border-[#5d1a30]

          bg-[#090909]

          p-6

          shadow-[0_28px_90px_rgba(72,12,31,0.25)]

          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover/board:-translate-y-2
        "
      >
        {/* =================================================
            BOARD HEADER
        ================================================== */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-4

            border-b
            border-white/10

            pb-5
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-[#c45a78]
              "
            >
              Fion Medya
            </p>

            <p
              className="
                mt-2
                text-xs
                text-white/42
              "
            >
              Kuşadası / Aydın / İzmir
            </p>
          </div>

          <span
            className="
              shrink-0
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/25
            "
          >
            Creative Studio
          </span>
        </div>

        {/* =================================================
            BIG STATEMENT
        ================================================== */}

        <div className="py-8">
          <p
            className="
              max-w-[440px]

              font-serif

              text-[clamp(2.4rem,3.5vw,4rem)]

              leading-[0.92]
              tracking-[-0.05em]

              text-[#f4efe9]
            "
          >
            Fikir önce gelir.
            <br />

            <em className="text-white/58">
              Geri kalanı
              <br />
              onun etrafında kurarız.
            </em>
          </p>
        </div>

        {/* =================================================
            EXPERTISE
        ================================================== */}

        <div
          className="
            border-t
            border-white/10
            pt-5
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/30
            "
          >
            Uzmanlık Alanları
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {disciplines.map((discipline) => (
              <span
                key={discipline}
                className="
                  rounded-full

                  border
                  border-[#4f1628]

                  bg-[#16080d]

                  px-4
                  py-2

                  text-[8px]
                  uppercase
                  tracking-[0.14em]

                  text-white/58
                "
              >
                {discipline}
              </span>
            ))}
          </div>
        </div>

        {/* =================================================
            QUICK CARDS
        ================================================== */}

        <div
          className="
            mt-6

            grid
            grid-cols-2
            gap-3
          "
        >
          {/* card 1 */}

          <div
            className="
              flex
              min-h-[140px]
              flex-col
              justify-between

              rounded-[20px]

              border
              border-white/10

              bg-[#111111]

              p-5
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              Yaklaşım
            </span>

            <p
              className="
                font-serif
                text-[25px]
                leading-[0.95]
                tracking-[-0.04em]
                text-[#f4efe9]
              "
            >
              Az laf.
              <br />
              Net fikir.
            </p>
          </div>

          {/* card 2 */}

          <div
            className="
              flex
              min-h-[140px]
              flex-col
              justify-between

              rounded-[20px]

              border
              border-[#6c2038]

              bg-[#591323]

              p-5
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/45
              "
            >
              Fion
            </span>

            <p
              className="
                font-serif
                text-[25px]
                leading-[0.95]
                tracking-[-0.04em]
                text-[#f4efe9]
              "
            >
              Sıradan
              <br />
              Olanı Unut.
            </p>
          </div>
        </div>

        {/* =================================================
            BOARD FOOTER
        ================================================== */}

        <div
          className="
            mt-6

            flex
            items-center
            justify-between

            border-t
            border-white/10

            pt-4
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.24em]
              text-white/25
            "
          >
            Strategy / Creative / Growth
          </span>

          <span
            className="
              h-[6px]
              w-[6px]
              rounded-full
              bg-[#c45a78]
            "
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ABOUT SECTION
========================================================= */

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="
        relative

        overflow-hidden

        border-t
        border-white/10

        bg-[#000000]
      "
    >
      {/* =====================================================
          LOCKED WINE LANE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          left-1/2
          top-0

          z-[1]

          hidden

          w-[460px]

          -translate-x-1/2

          border-x
          border-[#35101d]

          xl:block
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20

          mx-auto
          max-w-[1600px]

          px-6
          py-24

          sm:px-10
          sm:py-32

          xl:py-40
        "
      >
        {/* =================================================
            MAIN ABOUT
        ================================================== */}

        <div
          className="
            xl:grid

            xl:min-h-[760px]

            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]

            xl:items-center
            xl:gap-10
          "
        >
          {/* ===============================================
              LEFT / SEO COPY
          ================================================ */}

          <div className="max-w-[550px]">
            <p
              className="
                mb-7

                text-[10px]
                uppercase
                tracking-[0.42em]

                text-[#c45a78]
              "
            >
              Fion Medya Hakkında
            </p>

            <h2
              id="about-title"
              className="
                font-serif

                text-[clamp(4rem,6.5vw,7.2rem)]

                leading-[0.83]
                tracking-[-0.06em]

                text-[#f4efe9]
              "
            >
              Biz
              <br />
              Fion&apos;uz.
            </h2>

            {/* =================================================
                PRIMARY SEO MESSAGE
            ================================================== */}

            <p
              className="
                mt-9

                max-w-[460px]

                font-serif

                text-[clamp(1.75rem,2.2vw,2.45rem)]

                leading-[1.03]
                tracking-[-0.04em]

                text-white/72
              "
            >
              Markaların
              <span className="text-[#f4efe9]">
                {" "}
                fark edilmesini{" "}
              </span>
              ve doğru müşterilere ulaşmasını sağlayan yaratıcı işler
              üretiyoruz.
            </p>

            {/* =================================================
                SEO SUPPORT COPY
            ================================================== */}

            <p
              className="
                mt-7

                max-w-[430px]

                text-sm
                leading-7

                text-white/48
              "
            >
              Kuşadası merkezli Fion Medya; sosyal medya, grafik tasarım,
              dijital reklam ve marka iletişimini tek bir yaratıcı strateji
              altında buluşturur.
            </p>

            {/* =================================================
                QUICK SCAN TAGS
            ================================================== */}

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Strateji",
                "İçerik",
                "Tasarım",
                "Reklam",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full

                    border
                    border-[#4f1628]

                    bg-[#12070b]

                    px-4
                    py-2

                    text-[8px]
                    uppercase
                    tracking-[0.18em]

                    text-white/55
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* LOCATION */}

            <div
              className="
                mt-10

                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-12
                  bg-[#c45a78]
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.28em]

                  text-[#c45a78]
                "
              >
                Kuşadası / Aydın / İzmir
              </span>
            </div>
          </div>

          {/* ===============================================
              STRICTLY EMPTY WINE LANE
          ================================================ */}

          <div
            aria-hidden="true"
            className="
              hidden
              h-full
              xl:block
            "
          />

          {/* ===============================================
              RIGHT / STUDIO BOARD
          ================================================ */}

          <div
            className="
              mt-16

              xl:mt-0
              xl:flex
              xl:justify-end
            "
          >
            <StudioBoard />
          </div>
        </div>

        {/* =================================================
            MANIFESTO
        ================================================== */}

        <div
          className="
            mt-24

            border-t
            border-white/10

            pt-12

            xl:grid

            xl:min-h-[560px]

            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]

            xl:items-center
            xl:gap-10
          "
        >
          {/* ===============================================
              LEFT TYPOGRAPHY
          ================================================ */}

          <div className="max-w-[570px]">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.36em]
                text-white/28
              "
            >
              Nasıl çalışıyoruz?
            </p>

            <div className="mt-8">
              {/* MARKA */}

              <p
                className="
                  font-serif

                  text-[clamp(2.8rem,4vw,4.8rem)]

                  leading-[0.88]
                  tracking-[-0.055em]

                  text-[#f4efe9]
                "
              >
                Markaya bakarız.
              </p>

              {/* CUSTOMER */}

              <p
                className="
                  mt-2

                  font-serif

                  text-[clamp(2.8rem,4vw,4.8rem)]

                  leading-[0.88]
                  tracking-[-0.055em]

                  text-[#f4efe9]
                "
              >
                Müşteriyi düşünürüz.
              </p>

              {/* WORK */}

              <p
                className="
                  mt-2

                  font-serif
                  italic

                  text-[clamp(2.7rem,3.8vw,4.5rem)]

                  leading-[0.88]
                  tracking-[-0.055em]

                  text-white/55
                "
              >
                Sonra işi üretiriz.
              </p>
            </div>

            <div
              className="
                mt-9

                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-12
                  bg-[#c45a78]/60
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-[#c45a78]
                "
              >
                Strateji önce gelir
              </span>
            </div>
          </div>

          {/* ===============================================
              EMPTY WINE LANE
          ================================================ */}

          <div
            aria-hidden="true"
            className="
              hidden
              h-full
              xl:block
            "
          />

          {/* ===============================================
              RIGHT TYPOGRAPHY
          ================================================ */}

          <div
            className="
              mt-16

              xl:mt-0
              xl:flex
              xl:justify-end
            "
          >
            <div
              className="
                w-full
                max-w-[470px]
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.36em]
                  text-[#c45a78]
                "
              >
                Fion yaklaşımı
              </p>

              <div className="mt-8">
                {/* SMALL INTRO */}

                <p
                  className="
                    max-w-[400px]

                    text-[clamp(1.2rem,1.5vw,1.6rem)]

                    leading-[1.15]
                    tracking-[-0.035em]

                    text-white/48
                  "
                >
                  Daha fazla içerik üretmek için değil,
                </p>

                {/* BIG */}

                <p
                  className="
                    mt-5

                    font-serif

                    text-[clamp(3.1rem,4.5vw,5.3rem)]

                    leading-[0.84]
                    tracking-[-0.065em]

                    text-[#f4efe9]
                  "
                >
                  daha iyi
                  <br />
                  fikirler
                </p>

                {/* ITALIC */}

                <p
                  className="
                    mt-3

                    font-serif
                    italic

                    text-[clamp(2.2rem,3.1vw,3.7rem)]

                    leading-[0.9]
                    tracking-[-0.055em]

                    text-white/55
                  "
                >
                  üretmek için
                </p>

                {/* WINE ACCENT */}

                <p
                  className="
                    mt-2

                    font-serif

                    text-[clamp(3rem,4.4vw,5.2rem)]

                    leading-[0.84]
                    tracking-[-0.06em]

                    text-[#c45a78]
                  "
                >
                  buradayız.
                </p>

                {/* SUPPORT */}

                <p
                  className="
                    mt-8

                    max-w-[360px]

                    text-sm
                    leading-7

                    text-white/42
                  "
                >
                  Strateji, yaratıcı fikir ve doğru reklam yaklaşımı aynı
                  hedefe çalıştığında marka yalnızca görünmez; hatırlanır.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            QUICK SEO / TRUST SUMMARY
        ================================================== */}

        <div
          className="
            mt-20

            border-t
            border-white/10

            pt-10

            xl:grid
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:items-end
            xl:gap-10
          "
        >
          {/* LEFT */}

          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-white/28
              "
            >
              Ne için buradayız?
            </p>

            <p
              className="
                mt-5

                max-w-[440px]

                font-serif

                text-[clamp(2rem,2.8vw,3.4rem)]

                leading-[0.95]
                tracking-[-0.045em]

                text-[#f4efe9]
              "
            >
              Görünmek için değil.
              <br />

              <em className="text-white/55">
                Hatırlanmak için.
              </em>
            </p>
          </div>

          {/* WINE */}

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          {/* RIGHT */}

          <div
            className="
              mt-10

              xl:mt-0
              xl:flex
              xl:justify-end
            "
          >
            <a
              href="#contact"
              className="
                group

                flex
                w-full
                max-w-[390px]

                items-center
                justify-between

                border-b
                border-white/15

                pb-4

                text-[10px]
                uppercase
                tracking-[0.26em]

                text-white/58

                transition-colors
                duration-300

                hover:text-white
              "
            >
              Bir proje konuşalım

              <span
                className="
                  text-[#c45a78]

                  transition-transform
                  duration-500

                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}