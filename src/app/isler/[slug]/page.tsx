import type { Metadata } from "next";

import Image from "next/image";

import { notFound } from "next/navigation";

import { getProjectBySlug, projects, type ProjectMedia } from "@/data/projects";
import Link from "next/link";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.client,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <header className="project-hero">
        <div className="project-hero-meta">
          <Link href="/#works" className="project-back">
            ← İşlere dön
          </Link>

          <span>{project.number}</span>
        </div>

        <div className="project-hero-title">
          <span className="section-eyebrow">{project.client}</span>

          <h1>{project.title}</h1>
        </div>

        <div className="project-meta-grid">
          <ProjectMeta label="MÜŞTERİ" value={project.client} />

          <ProjectMeta label="HİZMET" value={project.service} />

          <ProjectMeta label="YIL" value={project.year} />
        </div>
      </header>

      <section className="project-cover">
        <ProjectMediaBlock media={project.media} client={project.client} />
      </section>

      <section className="project-story">
        <div className="project-story-label">
          <span className="section-eyebrow">PROJE</span>
        </div>

        <div className="project-story-content">
          <p className="project-lead">{project.description}</p>

          {project.results && project.results.length > 0 && (
            <div className="project-results">
              <span className="section-eyebrow">SONUÇ</span>

              <ul>
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="project-next">
        <Link href="/#works">
          <span className="section-eyebrow">SEÇİLİ İŞLER</span>

          <strong>Diğer projeleri gör →</strong>
        </Link>
      </section>
    </main>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="project-meta">
      <span>{label}</span>

      <strong>{value}</strong>
    </div>
  );
}

function ProjectMediaBlock({
  media,
  client,
}: {
  media?: ProjectMedia;
  client: string;
}) {
  if (!media) {
    return (
      <div className="project-detail-placeholder">
        <span>{client}</span>

        <small>PROJECT MEDIA</small>
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <video
        className="project-detail-media"
        src={media.src}
        poster={media.poster}
        muted
        loop
        autoPlay
        playsInline
      />
    );
  }

  return (
    <Image
      className="project-detail-media"
      src={media.src}
      alt={media.alt}
      fill
      priority
      sizes="100vw"
    />
  );
}
