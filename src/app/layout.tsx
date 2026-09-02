import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fion Medya",
    template: "%s — Fion Medya",
  },

  description:
    "Markaların sadece görünmesini değil, fark edilmesini sağlayan fikirler üretiyoruz.",

  applicationName: "Fion Medya",

  keywords: [
    "Fion Medya",
    "sosyal medya ajansı",
    "dijital reklam",
    "marka stratejisi",
    "kreatif içerik",
    "video prodüksiyon",
    "Meta reklamları",
    "Google reklamları",
    "Kuşadası reklam ajansı",
    "Aydın reklam ajansı",
  ],

  authors: [
    {
      name: "Fion Medya",
    },
  ],

  creator: "Fion Medya",

  publisher: "Fion Medya",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "tr_TR",

    siteName: "Fion Medya",

    title: "Fion Medya",

    description: "Her marka görünebilir. Pek azı hatırlanır.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Fion Medya",

    description: "Her marka görünebilir. Pek azı hatırlanır.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
