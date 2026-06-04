"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Hizmetler",
    href: "/hizmetler",
  },
  {
    label: "Sektörler",
    href: "/sektorler",
  },
  {
    label: "Projeler",
    href: "/projeler",
  },
  {
    label: "Süreç",
    href: "/surec",
  },
  {
    label: "Paketler",
    href: "/paketler",
  },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
  },
  {
    label: "İletişim",
    href: "/iletisim",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full">
        <div
          className={[
            "mx-auto flex max-w-7xl items-center justify-between px-7 md:px-10 py-6 transition-all duration-300 lg:px-0",
            hasScrolled
              ? "border-b border-white/10 bg-black/45 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent",
          ].join(" ")}
        >
          <Link href="/" aria-label="Fion Medya ana sayfa" className="block">
            <Image
              src="/images/Logo.png"
              alt="Fion Medya"
              width={80}
              height={80}
              priority
              className="h-auto w-[76px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative inline-flex items-center overflow-visible font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400 transition duration-300 hover:-translate-y-0.5 hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>

                <span className="pointer-events-none absolute -bottom-2 left-0 h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />

                <span className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-6 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/0 blur-xl transition duration-300 group-hover:bg-red-500/25" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="group hidden h-11 items-center justify-center gap-2 border border-red-500/50 bg-red-500/10 px-5 font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-red-500/80 hover:bg-red-500/20 lg:inline-flex"
          >
            Konuşalım
            <ArrowUpRight
              size={14}
              className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white backdrop-blur-md transition duration-300 hover:border-red-500/60 hover:bg-red-500/10 lg:hidden"
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={1.6} />
            ) : (
              <Menu size={20} strokeWidth={1.6} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile / Tablet Overlay Menu */}
      <div
        className={[
          "fixed inset-0 z-40 bg-black/80 backdrop-blur-xl transition duration-300 lg:hidden",
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="flex flex-col justify-end px-6 pb-10 pt-30">
          <nav className="grid gap-3">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-5 transition duration-300 hover:border-red-500/40"
              >
                <span className="font-[var(--font-playfair)] text-4xl tracking-[-0.04em] text-white transition duration-300 group-hover:translate-x-2 group-hover:text-[var(--red)]">
                  {item.label}
                </span>

                <span className="font-[var(--font-inter)] text-xs text-[var(--red)] transition duration-300 group-hover:translate-x-1">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="group mt-10 inline-flex h-14 items-center justify-center gap-3 border border-red-500/60 bg-red-500/10 px-6 font-[var(--font-inter)] text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-red-500/20"
          >
            Projeni Konuşalım
            <ArrowUpRight
              size={16}
              className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
