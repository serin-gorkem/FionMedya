import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-meta">
        <span>
          FION MEDYA
        </span>

        <span>
          404
        </span>
      </div>

      <div className="not-found-content">
        <span className="section-eyebrow">
          BURADA BİR ŞEY YOK
        </span>

        <h1>
          Sıradan bir
          <br />
          404.
        </h1>

        <p>
          Aradığın sayfa
          burada değil.
        </p>

        <Link
          href="/"
          className="not-found-link"
        >
          Ana sayfaya dön

          <span aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      <div className="not-found-footer">
        <span>
          SIRADAN OLANI UNUT.
        </span>

        <span>
          KUŞADASI / AYDIN
        </span>
      </div>
    </main>
  );
}