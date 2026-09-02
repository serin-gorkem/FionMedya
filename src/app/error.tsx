"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}) {
  useEffect(() => {
    console.error("[FION ERROR]", error);
  }, [error]);

  return (
    <main className="route-error">
      <div className="route-error-top">
        <span>FION MEDYA</span>

        <span>HATA</span>
      </div>

      <div className="route-error-content">
        <span className="section-eyebrow">BİR ŞEY TERS GİTTİ</span>

        <h1>
          Burada bir
          <br />
          şey döküldü.
        </h1>

        <p>Sayfa yüklenirken beklenmeyen bir sorun oluştu.</p>

        <div className="route-error-actions">
          <button type="button" onClick={reset}>
            Tekrar dene
            <span aria-hidden="true">→</span>
          </button>

          <Link href="/">Ana sayfaya dön</Link>
        </div>
      </div>

      <div className="route-error-bottom">
        <span>SIRADAN OLANI UNUT.</span>

        <span>KUŞADASI / AYDIN</span>
      </div>
    </main>
  );
}
