import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Fion Medya — Sosyal Medya, Grafik Tasarım ve Reklam Yönetimi",
    template: "%s — Fion Medya",
  },
  description:
    "Kuşadası merkezli Fion Medya; sosyal medya yönetimi, grafik tasarım ve dijital reklam çözümleriyle Aydın, İzmir ve çevresindeki markaların görünürlüğünü güçlendirir.",
  keywords: [
    "Fion Medya",
    "Kuşadası sosyal medya yönetimi",
    "Kuşadası grafik tasarım",
    "Kuşadası reklam yönetimi",
    "Aydın sosyal medya ajansı",
    "İzmir dijital reklam",
    "sosyal medya yönetimi",
    "grafik tasarım",
    "reklam yönetimi",
    "dijital reklam",
  ],
  authors: [{ name: "Fion Medya" }],
  creator: "Fion Medya",
  publisher: "Fion Medya",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
