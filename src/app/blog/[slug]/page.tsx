import type { Metadata } from "next";

import Link from "next/link";

import { notFound } from "next/navigation";

import {
  articles,
  getArticleBySlug,
} from "@/data/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const article =
    getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const article =
    getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="article-page">
      <header className="article-header">
        <div className="article-nav">
          <Link href="/">
            FION
          </Link>

          <Link href="/blog">
            ← Blog
          </Link>
        </div>

        <div className="article-meta">
          <span>
            {article.category}
          </span>

          <span>
            {article.date}
          </span>

          <span>
            {article.readTime}
          </span>
        </div>

        <h1>
          {article.title}
        </h1>

        <p className="article-excerpt">
          {article.excerpt}
        </p>
      </header>

      <article className="article-content">
        {article.content.map(
          (paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ),
        )}
      </article>

      <footer className="article-footer">
        <Link href="/blog">
          <span>
            FION NOTLARI
          </span>

          <strong>
            Diğer yazıları gör →
          </strong>
        </Link>
      </footer>
    </main>
  );
}