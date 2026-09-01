import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Fion Medya — Sıradan Olanı Unut",
    template: "%s — Fion Medya",
  },
  description:
    "Fion Medya; yaratıcı fikirleri, güçlü tasarımı ve etkili reklam çözümlerini bir araya getirir.",
  keywords: [
    "Fion Medya",
    "sosyal medya yönetimi",
    "grafik tasarım",
    "reklam yönetimi",
    "marka iletişimi",
  ],
  authors: [{ name: "Görkem Serin" }],
  creator: "Görkem Serin",
  publisher: "Fion Medya",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}