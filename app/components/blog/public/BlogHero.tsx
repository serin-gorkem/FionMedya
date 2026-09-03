export default function BlogHero() {
  return (
    <header
      className="
        grid
        min-h-[58vh]
        items-end
        gap-12

        pb-16
        pt-32

        lg:grid-cols-[minmax(0,1fr)_400px]
        lg:pb-20
      "
    >
      <div>
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.38em]
            text-[#c45a78]
          "
        >
          Fion Journal
        </p>

        <h1
          className="
            mt-7

            max-w-[950px]

            font-serif

            text-[clamp(4rem,9vw,9rem)]

            leading-[0.8]
            tracking-[-0.065em]

            text-[#f4efe9]
          "
        >
          Bilgiyi
          <br />

          <em className="text-white/55">
            saklamıyoruz.
          </em>
        </h1>
      </div>

      <div
        className="
          max-w-[390px]

          lg:border-l
          lg:border-white/10
          lg:pl-8
        "
      >
        <p
          className="
            font-serif
            text-[clamp(1.7rem,2.4vw,2.7rem)]
            leading-[1]
            tracking-[-0.04em]
            text-[#f4efe9]
          "
        >
          Markanı büyütmek için
          bilmen gerekenler.
        </p>

        <p
          className="
            mt-6
            text-sm
            leading-7
            text-white/42
          "
        >
          Sosyal medya, reklam,
          tasarım ve dijital marka
          iletişimi üzerine Fion&apos;dan
          fikirler, deneyimler ve
          rehberler.
        </p>
      </div>
    </header>
  );
}