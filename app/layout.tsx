import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  Bodoni_Moda,
  Inter,
} from "next/font/google";

import "./globals.css";

/* =========================================================
   FONTS

   Sistem fontlarına güvenmiyoruz.
   Böylece Safari / Chrome / Windows / iOS aynı görünür.
========================================================= */

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont =
  Bodoni_Moda({
    subsets: ["latin"],
    variable:
      "--font-display",
    display: "swap",
  });
  

export const metadata: Metadata = {
  title: {
    default:
      "Fion Medya — Sosyal Medya, Tasarım ve Reklam Yönetimi",
    template:
      "%s — Fion Medya",
  },

  description:
    "Kuşadası merkezli Fion Medya; sosyal medya yönetimi, grafik tasarım, reklam yönetimi ve marka stratejisiyle Aydın ve İzmir'deki işletmelerin daha güçlü iletişim kurmasına yardımcı olur.",

  keywords: [
    "Fion Medya",
    "Kuşadası sosyal medya ajansı",
    "Kuşadası reklam ajansı",
    "Kuşadası grafik tasarım",
    "Aydın sosyal medya ajansı",
    "Aydın reklam ajansı",
    "İzmir sosyal medya ajansı",
    "İzmir dijital reklam",
    "sosyal medya yönetimi",
    "grafik tasarım",
    "Meta reklam yönetimi",
    "marka stratejisi",
    "kurumsal kimlik",
  ],

  authors: [
    {
      name: "Fion Medya",
    },
  ],

  creator:
    "Görkem Serin",

  publisher:
    "Fion Medya",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`
          ${bodyFont.variable}
          ${displayFont.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}