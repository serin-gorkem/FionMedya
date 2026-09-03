import ContactHero from "./ContactHero";
import ContactLinks from "./ContactLinks";
import FooterMeta from "./FooterMeta";
import FooterSeoSummary from "./FooterSeoSummary";
import WineSurface from "./WineSurface";

export default function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="relative z-10 overflow-hidden bg-[#591323] text-[#f4efe9]"
    >
      <WineSurface />
      <div className="relative z-20 mx-auto flex min-h-[92svh] max-w-[1600px] flex-col px-6 pb-10 pt-28 sm:px-10 sm:pb-12 sm:pt-36 xl:px-10 xl:pt-40">
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
        <FooterSeoSummary />
        <FooterMeta />
      </div>
    </footer>
  );
}
