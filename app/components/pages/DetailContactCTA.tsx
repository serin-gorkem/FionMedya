import { getWhatsAppUrl } from "@/app/config/contact";

export default function DetailContactCTA() {
  return (
    <section
      className="
        relative
        left-1/2

        w-screen
        -translate-x-1/2

        overflow-hidden

        border-t
        border-white/10
    "
    >
      {/* =================================================
          PAGE-CONTINUING ATMOSPHERE
          Ayrı background yok.
          Sadece lokal wine ışıkları.
      ================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[12%]
          top-[5%]

          size-[620px]

          rounded-full

          bg-[#591323]/20

          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[55%]
          left-[15%]

          size-[500px]

          rounded-full

          bg-[#c45a78]/8

          blur-[130px]
        "
      />

      {/* GHOST FION */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -bottom-[0.15em]
          right-[0.12em]

          hidden

          select-none

          font-serif
          text-[clamp(10rem,19vw,23rem)]
          leading-none
          tracking-[-0.09em]

          text-white/[0.018]

          xl:block
        "
      >
        FION
      </span>

      {/* =================================================
          CONTENT
      ================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1500px]

          px-5
          py-20

          sm:px-8
          sm:py-24

          lg:px-12
          lg:py-32
        "
      >
        {/* META */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-8
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <span
              aria-hidden="true"
              className="
                size-1.5

                rotate-45

                bg-[#c45a78]
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.32em]

                text-white/40
              "
            >
              Birlikte Çalışalım
            </span>
          </div>

          <span
            className="
              hidden

              text-[7px]
              uppercase
              tracking-[0.25em]

              text-white/20

              sm:block
            "
          >
            Fion / Contact
          </span>
        </div>

        {/* =================================================
            MAIN
        ================================================== */}

        <div
          className="
            mt-12

            grid
            gap-16

            lg:mt-16
            lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.65fr)]
            lg:items-end
            lg:gap-24
          "
        >
          {/* LEFT */}

          <div>
            <h2
              className="
                max-w-[900px]

                font-serif
                text-[clamp(4.2rem,8vw,9rem)]
                leading-[0.78]
                tracking-[-0.07em]

                text-[#f4efe9]
              "
            >
              Markanı
              <br />
              <em className="text-white/42">konuşalım.</em>
            </h2>

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

                  bg-[#591323]
                "
              />

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.25em]

                  text-white/25
                "
              >
                Bir fikirle başlayabiliriz
              </span>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              border-t
              border-white/10

              pt-7

              lg:border-l
              lg:border-t-0
              lg:pl-10
              lg:pt-0
            "
          >
            <p
              className="
                max-w-md

                text-sm
                leading-7

                text-white/48

                sm:text-[15px]
                sm:leading-8
              "
            >
              Nereden başlayacağından emin olman gerekmiyor. Markanı anlat,
              doğru yolu birlikte bulalım.
            </p>

            {/* ===========================================
                CTA
            ============================================ */}

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="
                group
                relative

                mt-10

                flex
                w-full
                items-center
                justify-between

                overflow-hidden

                border-y
                border-white/12

                px-5
                py-5

                text-[9px]
                font-medium
                uppercase
                tracking-[0.24em]

                text-white/60

                transition-colors
                duration-500

                hover:text-[#f4efe9]
              "
            >
              {/* FLOW FILL */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0

                  origin-left
                  scale-x-0

                  bg-[#591323]/22

                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:scale-x-100
                "
              />

              {/* MOVING LIGHT */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  top-1/2

                  h-px
                  w-full

                  -translate-x-full
                  -translate-y-1/2

                  bg-gradient-to-r
                  from-transparent
                  via-[#c45a78]
                  to-transparent

                  opacity-0

                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:translate-x-full
                  group-hover:opacity-100
                "
              />

              <span
                aria-hidden="true"
                className="
                  relative
                  z-10

                  mr-4
                  size-1.5

                  shrink-0

                  rotate-45

                  bg-[#c45a78]

                  transition-transform
                  duration-700

                  group-hover:scale-[1.35]
                "
              />

              <span
                className="
                  relative
                  z-10

                  flex-1

                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:translate-x-1.5
                "
              >
                WhatsApp&apos;tan konuşalım
              </span>

              <span
                aria-hidden="true"
                className="
                  relative
                  z-10

                  ml-6

                  flex
                  size-8

                  shrink-0

                  items-center
                  justify-center

                  border-l
                  border-white/15

                  text-sm
                  text-[#c45a78]

                  transition-all
                  duration-700

                  group-hover:translate-x-1
                  group-hover:border-[#c45a78]/40
                "
              >
                ↗
              </span>

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0

                  h-px
                  w-16

                  bg-[#591323]

                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:w-full
                  group-hover:bg-[#c45a78]/70
                "
              />
            </a>
          </div>
        </div>

        {/* =================================================
            FOOT META
        ================================================== */}

        <div
          className="
            mt-20

            flex
            flex-col
            gap-4

            border-t
            border-white/[0.08]

            pt-5

            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mt-28
          "
        >
          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.26em]

              text-white/20
            "
          >
            Sosyal Medya · Tasarım · Reklam · Marka Stratejisi
          </span>

          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.24em]

              text-white/18
            "
          >
            Kuşadası · Aydın · İzmir
          </span>
        </div>
      </div>
    </section>
  );
}
