import ContactHero from "./ContactHero";
import ContactLinks from "./ContactLinks";
import FooterLocation from "./FooterLocation";
import FooterSeoSummary from "./FooterSeoSummary";
import WineSurface from "./WineSurface";
const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fionmedya/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/fi%CC%87on/posts/?feedView=all",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/fionmedya/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Fionmedya",
  },
] as const;
export default function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="relative z-10 overflow-hidden bg-[#591323] text-[#f4efe9]"
    >
      <WineSurface />
      <div className="relative z-20 mx-auto flex min-h-[92svh] max-w-[1600px] flex-col px-6 pb-10 pt-10 sm:px-10 sm:pb-12 sm:pt-16 xl:px-10 xl:pt-20">
        <div className="flex items-center justify-between border-b border-white/20 pb-5">
          <p className="text-[9px] uppercase tracking-[0.36em] text-white/62">
            Birlikte çalışalım
          </p>
          <p className="hidden text-[9px] uppercase tracking-[0.3em] text-white/42 sm:block">
            Kuşadası / Aydın / İzmir
          </p>
        </div>
        <ContactHero />

        <ContactLinks />

        <div
          className="
    grid

    border-t
    border-white/20

    sm:grid-cols-2
    lg:grid-cols-4
  "
        >
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
        group

        flex
        items-center
        justify-between
        gap-5

        border-b
        border-white/20

        py-5

        transition-colors
        duration-300

        hover:bg-black/[0.08]

        sm:px-6

        ${index % 2 === 0 ? "sm:border-r" : ""}

        lg:border-r
        lg:border-b-0
        lg:last:border-r-0

        ${index === 0 ? "sm:pl-0" : ""}
        ${index === socialLinks.length - 1 ? "lg:pr-0" : ""}
      `}
            >
              <span
                className="
          text-[9px]
          uppercase
          tracking-[0.24em]

          text-white/50

          transition-colors
          duration-300

          group-hover:text-[#f4efe9]
        "
              >
                {social.label}
              </span>

              <span
                aria-hidden="true"
                className="
          text-white/40

          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-hover:text-[#f4efe9]
        "
              >
                ↗
              </span>
            </a>
          ))}
        </div>

        <FooterLocation />
        <FooterSeoSummary />
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
        </div>
      </div>
    </footer>
  );
}
