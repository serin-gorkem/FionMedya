export default function FooterMeta() {
  return (
    <>
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
        <span>© 2026 Fion Medya</span>

        <a
          href="https://gorkemserin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
    group
    inline-flex
    items-center
    gap-1.5

    transition-colors
    duration-300

    hover:text-white/70
  "
        >
          <span>Tasarım &amp; Geliştirme:</span>

          <strong
            className="
      font-medium
      text-white/60

      transition-colors
      duration-300

      group-hover:text-white
    "
          >
            Görkem Serin
          </strong>

          <span
            className="
      text-[#c45a78]

      transition-transform
      duration-300

      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
    "
          >
            ↗
          </span>
        </a>

        <span>Sıradan Olanı Unut.</span>
      </div>
    </>
  );
}
