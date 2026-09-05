export default function BlogHero() {
  return (
    <header
      className="
        grid
        min-h-[54vh]
        items-end
        gap-12

        pb-16
        pt-36

        lg:grid-cols-[minmax(0,1fr)_360px]
        lg:pb-20
      "
    >
      <div>
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.36em]
            text-wine-light
          "
        >
          Fion Blog
        </p>

        <h1
          className="
            mt-7
            max-w-4xl

            font-serif
            text-[clamp(3.4rem,6vw,6.8rem)]
            leading-[0.9]
            tracking-[-0.065em]

            text-ivory
          "
        >
          Sektöre.
          <br />

          <span className="text-white/60">
            Dair.
          </span>
          <br />

          <em className="text-wine-light">
            Bizden.
          </em>
        </h1>
      </div>

      <div
        className="
          max-w-sm

          border-t
          border-white/10

          pt-7

          lg:border-l
          lg:border-t-0
          lg:pl-8
          lg:pt-0
        "
      >
        <p
          className="
            font-serif
            text-[clamp(1.25rem,1.6vw,1.7rem)]
            leading-[1.05]
            tracking-[-0.04em]

            text-ivory
          "
        >
          Markaya dair
          düşünmeye değer şeyler.
        </p>

        <p
          className="
            mt-5
            text-sm
            leading-7
            text-white/48
          "
        >
          Sosyal medya, reklam
          ve yaratıcı iletişim
          üzerine Fion&apos;dan notlar.
        </p>
      </div>
    </header>
  );
}