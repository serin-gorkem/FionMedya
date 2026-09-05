import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="
        relative
        z-10

        min-h-[100svh]

        overflow-hidden

        bg-[#090708]

        px-6
      "
    >
      <HeroBackground />

      <HeroContent />
    </section>
  );
}