export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[85vh] z-10 border-t border-white/[0.07] px-6 py-24 sm:px-10 sm:py-36"
    >
      <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center">
        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-wine-light">
          Fion hakkında
        </p>

        <p className="max-w-5xl font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.95] tracking-[-0.05em]">
          Markaları daha görünür,
          <br />
          daha tutarlı ve
          <br />
          <em className="text-white/60">daha akılda kalıcı</em>
          <br />
          hâle getiren işler üretiyoruz.
        </p>

        <p className="mt-10 max-w-lg text-sm leading-7 text-muted">
          Sosyal medya, tasarım ve reklamı birbirinden bağımsız işler olarak
          değil, markanın bütün iletişimini güçlendiren tek bir sistem olarak
          ele alıyoruz.
        </p>
      </div>
    </section>
  );
}