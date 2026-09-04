import ClientWorkCard from "./ClientWorkCard";

import { clientWorks } from "./projects-clients.data";

export default function ClientWorkGallery() {
  const leftClients = clientWorks.filter((client) => client.side === "left");

  const rightClients = clientWorks.filter((client) => client.side === "right");

  return (
    <section
      className="
      border-t
      border-white/10

      pt-16
      pb-20

      sm:pt-20
      sm:pb-28
    "
    >
      {/* =================================================
          INTRO
      ================================================== */}

      <div
        className="
          mb-14

          flex
          items-end
          justify-between
          gap-8

          sm:mb-20
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
            Seçili Markalar
          </p>

          <p
            className="
              mt-5
              max-w-xl

              font-serif
              text-[clamp(2.7rem,4vw,4.7rem)]
              leading-[0.9]
              tracking-[-0.05em]

              text-[#f4efe9]
            "
          >
            Birlikte
            <br />
            <em className="text-white/45">ürettiklerimiz.</em>
          </p>
        </div>

        <span
          className="
            hidden

            text-[8px]
            uppercase
            tracking-[0.22em]

            text-white/25

            sm:block
          "
        >
          {clientWorks.length.toString().padStart(2, "0")} marka
        </span>
      </div>

      {/* =================================================
          MOBILE / TABLET
      ================================================== */}

      <div
        className="
          space-y-7

          xl:hidden
        "
      >
        {clientWorks.map((client) => (
          <ClientWorkCard key={client.name} client={client} />
        ))}
      </div>

      {/* =================================================
          DESKTOP

          İki portfolio kolonu.
          Ortadaki lane yalnızca ritim oluşturuyor.
      ================================================== */}

      <div
        className="
          hidden

          xl:grid
          xl:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)]
          xl:gap-5
        "
      >
        {/* LEFT */}

        <div className="space-y-8">
          {leftClients.map((client) => (
            <ClientWorkCard key={client.name} client={client} />
          ))}
        </div>

        {/* CENTER */}

        <div
          aria-hidden="true"
          className="
            relative

            border-x
            border-[#35101d]/45
          "
        >
          <div
            className="
              sticky
              top-1/2

              mx-auto

              h-20
              w-px

              bg-gradient-to-b

              from-transparent
              via-[#c45a78]/40
              to-transparent
            "
          />
        </div>

        {/* RIGHT */}

        <div className="space-y-8">
          {rightClients.map((client) => (
            <ClientWorkCard key={client.name} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
