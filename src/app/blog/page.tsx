import type { Metadata } from "next";

import Link from "next/link";

import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog",

  description:
    "Marka, sosyal medya, kreatif içerik ve dijital reklam üzerine Fion Medya notları.",
};

export default function BlogPage() {
  return (
    <main className="blog-page">
      <header className="blog-header">
        <div className="blog-nav">
          <Link href="/">FION</Link>

          <span>BLOG</span>
        </div>

        <div className="blog-heading">
          <span className="section-eyebrow">FION NOTLARI</span>

          <h1>
            Fikirler.
            <br />
            Notlar.
            <br />
            Bakışlar.
          </h1>
        </div>
      </header>

      <section className="blog-list">
        {articles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="blog-card"
          >
            <div className="blog-card-index">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="blog-card-main">
              <div className="blog-card-meta">
                <span>{article.category}</span>

                <span>{article.date}</span>

                <span>{article.readTime}</span>
              </div>

              <h2>{article.title}</h2>

              <p>{article.excerpt}</p>
            </div>

            <span className="blog-card-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
