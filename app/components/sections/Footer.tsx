const WHATSAPP_NUMBER = "905056435398";

const WHATSAPP_MESSAGE =
  "Merhaba Fion Medya, markam için sizinle çalışmak istiyorum.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const EMAIL = "info@fionmedya.com";

/*
 * TODO:
 * Gerçek Instagram URL'si doğrulandığında değiştir.
 *
 * Örn:
 * const INSTAGRAM_URL =
 *   "https://www.instagram.com/GERCEK_KULLANICI_ADI/";
 */
const INSTAGRAM_URL = "https://www.instagram.com/fionmedya/";

/* =========================================================
   ARROW
========================================================= */

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="
        inline-block
        transition-transform
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]

        group-hover:translate-x-1
        group-hover:-translate-y-1
        text-[#591323]
      "
    >
      ↗
    </span>
  );
}

/* =========================================================
   FOOTER / CONTACT
========================================================= */

export default function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="
        relative
        z-10
        overflow-hidden

        bg-[#591323]

        text-[#f4efe9]
      "
    >
      {/* =====================================================
          WINE SURFACE

          Footer'ın kendisi wine pool.
          Bu yüzey footer ile birlikte hareket ettiği için
          fixed video stream ile snap / measurement problemi yok.
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          inset-x-0
          top-0
          z-[3]

          h-px

          bg-[#d06a87]/45
        "
      />

      {/* center of surface */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-0
          z-[2]

          h-[28px]
          w-[72vw]
          max-w-[1100px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-[50%]

          bg-[#591323]
        "
      />

      {/* subtle second wine shape */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[4px]
          z-[1]

          h-[22px]
          w-[46vw]
          max-w-[680px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-[50%]

          bg-[#6c1830]
          opacity-45
        "
      />

      {/* =====================================================
          CONTACT HERO
      ====================================================== */}

      <div
        className="
          relative
          z-20

          mx-auto

          flex
          min-h-[92svh]
          max-w-[1600px]
          flex-col

          px-6
          pb-10
          pt-28

          sm:px-10
          sm:pb-12
          sm:pt-36

          xl:px-10
          xl:pt-40
        "
      >
        {/* =================================================
            TOP META
        ================================================== */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-white/20

            pb-5
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.36em]
              text-white/62
            "
          >
            Birlikte çalışalım
          </p>

          <p
            className="
              hidden

              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/42

              sm:block
            "
          >
            Kuşadası / Aydın / İzmir
          </p>
        </div>

        {/* =================================================
            MAIN CTA
        ================================================== */}

        <div
          className="
            flex
            flex-1
            flex-col
            justify-center

            py-20

            xl:grid
            xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.55fr)]
            xl:items-end
            xl:gap-20
            xl:py-24
          "
        >
          {/* ===============================================
              LEFT
          ================================================ */}

          <div>
            <p
              className="
                mb-7

                text-[10px]
                uppercase
                tracking-[0.42em]

                text-white/55
              "
            >
              Fion Medya / İletişim
            </p>

            <h2
              id="contact-title"
              className="
                max-w-[1050px]

                font-serif

                text-[clamp(4rem,8.2vw,9rem)]

                leading-[0.81]
                tracking-[-0.065em]

                text-[#f4efe9]
              "
            >
              Sıradan olanı
              <br />

              <em className="text-white/66">
                unutmaya
              </em>
              <br />

              hazır mısın?
            </h2>
          </div>

          {/* ===============================================
              RIGHT / EASY DECISION
          ================================================ */}

          <div
            className="
              mt-14

              xl:mt-0
              xl:pb-2
            "
          >
            <p
              className="
                max-w-[390px]

                font-serif

                text-[clamp(1.75rem,2.3vw,2.7rem)]

                leading-[1.02]
                tracking-[-0.04em]

                text-[#f4efe9]
              "
            >
              Bize markanı anlat.
              <br />

              <em className="text-white/58">
                Gerisini birlikte düşünelim.
              </em>
            </p>

            <p
              className="
                mt-7

                max-w-[370px]

                text-sm
                leading-7

                text-white/55
              "
            >
              Sosyal medya, grafik tasarım veya reklam ihtiyacın için uzun bir
              brief hazırlamana gerek yok. Nerede olduğunu anlat, birlikte
              başlayalım.
            </p>

            {/* =============================================
                PRIMARY CTA
            ============================================== */}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Fion Medya ile WhatsApp üzerinden iletişime geç"
              className="
                group

                mt-9

                flex
                w-full
                max-w-[430px]

                items-center
                justify-between

                rounded-full

                border
                border-white/35

                bg-[#f4efe9]

                px-6
                py-5

                text-[10px]
                font-medium
                uppercase
                tracking-[0.24em]

                text-[#591323]

                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]

                hover:-translate-y-1
                hover:bg-white
              "
            >
              <span className="text-[#591323]">
                WhatsApp&apos;tan konuşalım
              </span>

              <Arrow />
            </a>

            {/* lazy-user hint */}

            <p
              className="
                mt-3

                text-[8px]
                uppercase
                tracking-[0.18em]

                text-white/35
              "
            >
              Mesaj hazır geliyor. Sadece gönder.
            </p>
          </div>
        </div>

        {/* =================================================
            QUICK CONTACT OPTIONS
        ================================================== */}

        <div
          className="
            grid

            border-t
            border-white/20

            sm:grid-cols-3
          "
        >
          {/* EMAIL */}

          <a
            href={`mailto:${EMAIL}`}
            className="
              group

              flex
              min-h-[130px]
              flex-col
              justify-between

              border-b
              border-white/20

              py-6

              transition-colors
              duration-300

              hover:bg-black/[0.08]

              sm:border-b-0
              sm:border-r
              sm:px-6

              sm:first:pl-0
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/42
              "
            >
              E-posta
            </span>

            <span
              className="
                flex
                items-end
                justify-between
                gap-4
              "
            >
              <strong
                className="
                  break-all

                  font-serif
                  text-[clamp(1.3rem,1.8vw,2rem)]
                  font-normal
                  tracking-[-0.035em]

                  text-[#f4efe9]
                "
              >
                {EMAIL}
              </strong>

              <Arrow />
            </span>
          </a>

          {/* INSTAGRAM */}

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Fion Medya Instagram hesabı"
            className="
              group

              flex
              min-h-[130px]
              flex-col
              justify-between

              border-b
              border-white/20

              py-6

              transition-colors
              duration-300

              hover:bg-black/[0.08]

              sm:border-b-0
              sm:border-r
              sm:px-6
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/42
              "
            >
              Sosyal
            </span>

            <span
              className="
                flex
                items-end
                justify-between
              "
            >
              <strong
                className="
                  font-serif
                  text-[clamp(1.5rem,2vw,2.2rem)]
                  font-normal
                  tracking-[-0.04em]

                  text-[#f4efe9]
                "
              >
                Instagram
              </strong>

              <Arrow />
            </span>
          </a>

          {/* LOCATION */}

          <div
            className="
              flex
              min-h-[130px]
              flex-col
              justify-between

              py-6

              sm:px-6
              sm:pr-0
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/42
              "
            >
              Çalışma Alanı
            </span>

            <p
              className="
                font-serif

                text-[clamp(1.5rem,2vw,2.2rem)]

                leading-[1]
                tracking-[-0.04em]

                text-[#f4efe9]
              "
            >
              Kuşadası
              <span className="text-white/40"> / </span>
              Aydın
              <span className="text-white/40"> / </span>
              İzmir
            </p>
          </div>
        </div>

        {/* =================================================
            LOCAL SEO SENTENCE
        ================================================== */}

        <div
          className="
            mt-10

            flex
            flex-col
            justify-between
            gap-8

            border-t
            border-white/20

            pt-8

            lg:flex-row
            lg:items-end
          "
        >
          <div>
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.32em]
                text-white/38
              "
            >
              Fion Medya
            </p>

            <p
              className="
                mt-4
                max-w-[620px]

                text-sm
                leading-7

                text-white/54
              "
            >
              Kuşadası merkezli yaratıcı medya ekibi Fion Medya; sosyal medya
              yönetimi, grafik tasarım ve dijital reklam alanlarında Aydın,
              İzmir ve çevresindeki markalarla çalışır.
            </p>
          </div>

          <a
            href="#hero"
            className="
              group

              inline-flex
              shrink-0
              items-center
              gap-3

              text-[9px]
              uppercase
              tracking-[0.26em]

              text-white/46

              transition-colors
              duration-300

              hover:text-white
            "
          >
            Başa dön

            <span
              className="
                transition-transform
                duration-500

                group-hover:-translate-y-1
              "
            >
              ↑
            </span>
          </a>
        </div>

        {/* =================================================
            GIANT BRAND PAYOFF
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            mt-20
            overflow-hidden

            border-t
            border-white/20

            pt-8
          "
        >
          <p
            className="
              whitespace-nowrap

              font-serif

              text-[clamp(6rem,18vw,19rem)]

              leading-[0.66]
              tracking-[-0.075em]

              text-white/[0.13]
            "
          >
            FION
          </p>
        </div>

        {/* =================================================
            LEGAL / FINAL META
        ================================================== */}

        <div
          className="
            mt-12

            flex
            flex-col
            gap-4

            border-t
            border-white/20

            pt-6

            text-[8px]
            uppercase
            tracking-[0.22em]
            text-white/38

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            © 2026 Fion Medya
          </span>

          <span>
            Sosyal Medya · Tasarım · Reklam
          </span>

          <span>
            Sıradan Olanı Unut.
          </span>
        </div>
      </div>
    </footer>
  );
}