import Image from "next/image";

import type {
  ProjectMedia as ProjectMediaType,
} from "@/data/projects";

type ProjectMediaProps = {
  media?: ProjectMediaType;
  client: string;
  visibility: number;
};

export function ProjectMedia({
  media,
  client,
  visibility,
}: ProjectMediaProps) {
  return (
    <div
      className="project-media"
      style={{
        opacity: visibility,

        transform: `
          scale(
            ${0.94 + visibility * 0.06}
          )
        `,

        clipPath: `
          inset(
            ${(1 - visibility) * 50}%
            0
            ${(1 - visibility) * 50}%
            0
          )
        `,
      }}
    >
      {media ? (
        <MediaContent
          media={media}
        />
      ) : (
        <ProjectMediaPlaceholder
          client={client}
        />
      )}
    </div>
  );
}

function MediaContent({
  media,
}: {
  media: ProjectMediaType;
}) {
  if (media.type === "video") {
    return (
      <video
        className="project-media-element"
        src={media.src}
        poster={media.poster}
        muted
        loop
        playsInline
        autoPlay
      />
    );
  }

  return (
    <Image
      className="project-media-element"
      src={media.src}
      alt={media.alt}
      fill
      sizes="
        (max-width: 768px) 100vw,
        55vw
      "
    />
  );
}

function ProjectMediaPlaceholder({
  client,
}: {
  client: string;
}) {
  return (
    <div className="project-media-placeholder">
      <span>
        {client}
      </span>

      <small>
        PROJECT MEDIA
      </small>
    </div>
  );
}