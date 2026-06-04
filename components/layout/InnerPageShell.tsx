import { Header } from "@/components/layout/Header";

type InnerPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  background?: string;
  children: React.ReactNode;
};

export function InnerPageShell({
  eyebrow,
  title,
  description,
  background = "/images/home/BG_1_H.png",
  children,
}: InnerPageShellProps) {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <Header />

      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${background})`,
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red-bright)]">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-5xl font-[var(--font-playfair)] text-5xl leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
            {title}
          </h1>

          <p className="mt-7 max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
            {description}
          </p>
        </div>
      </section>

      <section className="relative bg-[#030303] px-6 pb-24 text-white md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">{children}</div>
      </section>
    </main>
  );
}