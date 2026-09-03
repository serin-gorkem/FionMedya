"use client";

import {
  useState,
  useTransition,
} from "react";

import {
  useRouter,
} from "next/navigation";

import type {
  BlogPost,
  BlogPostInput,
  BlogStatus,
} from "@/features/blog/blog.types";

import {
  createBlogPostAction,
  updateBlogPostAction,
} from "@/features/blog/blog.actions";

import {
  adminPrimaryActionClassName,
  adminSecondaryActionClassName,
} from "@/app/components/admin/admin.styles";

import BlogEditor from "./BlogEditor";
import CoverImageField from "./CoverImageField";

type BlogFormProps =
  | {
      mode: "create";
      post?: never;
    }
  | {
      mode: "edit";
      post: BlogPost;
    };

function FieldLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <label
      className="
        text-[10px]
        font-medium
        uppercase
        tracking-[0.18em]
        text-[var(--text-body)]
      "
    >
      {children}
    </label>
  );
}

const fieldClassName = `
  mt-3
  w-full

  rounded-[12px]

  border
  border-white/15

  bg-[#0d0d0d]

  px-4
  py-4

  text-[14px]
  text-[var(--text-primary)]

  outline-none

  placeholder:text-[var(--text-muted)]

  transition-all
  duration-200

  hover:border-white/25

  focus:border-[#d86a88]
  focus:bg-[#111111]
`;

export default function BlogForm(
  props: BlogFormProps,
) {
  const router =
    useRouter();

  const [
    pending,
    startTransition,
  ] = useTransition();

  const post =
    props.mode === "edit"
      ? props.post
      : null;

  const [
    title,
    setTitle,
  ] = useState(
    post?.title ?? "",
  );

  const [
    slug,
    setSlug,
  ] = useState(
    post?.slug ?? "",
  );

  const [
    excerpt,
    setExcerpt,
  ] = useState(
    post?.excerpt ?? "",
  );

  const [
    contentHtml,
    setContentHtml,
  ] = useState(
    post?.contentHtml ??
      "",
  );

  const [
    coverImageUrl,
    setCoverImageUrl,
  ] = useState<
    string | null
  >(
    post?.coverImageUrl ??
      null,
  );

  const [
    category,
    setCategory,
  ] = useState(
    post?.category ??
      "Genel",
  );

  const [
    tags,
    setTags,
  ] = useState(
    post?.tags.join(", ") ??
      "",
  );

  const [
    seoTitle,
    setSeoTitle,
  ] = useState(
    post?.seoTitle ?? "",
  );

  const [
    seoDescription,
    setSeoDescription,
  ] = useState(
    post?.seoDescription ??
      "",
  );

  const [
    status,
    setStatus,
  ] =
    useState<BlogStatus>(
      post?.status ??
        "draft",
    );

  const [
    error,
    setError,
  ] = useState<
    string | null
  >(null);

  const [
    saved,
    setSaved,
  ] = useState(false);

  const submit =
    () => {
      setError(null);
      setSaved(false);

      const input:
        BlogPostInput = {
        title,
        slug,

        excerpt,
        contentHtml,

        coverImageUrl,

        category,

        tags: tags
          .split(",")
          .map((tag) =>
            tag.trim(),
          )
          .filter(Boolean),

        seoTitle:
          seoTitle.trim() ||
          null,

        seoDescription:
          seoDescription.trim() ||
          null,

        status,
      };

      startTransition(
        async () => {
          const result =
            props.mode ===
            "create"
              ? await createBlogPostAction(
                  input,
                )
              : await updateBlogPostAction(
                  props.post.id,
                  input,
                );

          if (
            !result.success
          ) {
            setError(
              result.message,
            );

            return;
          }

          if (
            props.mode ===
            "create"
          ) {
            router.replace(
              `/admin/blog/${result.data.id}/edit`,
            );

            return;
          }

          setSaved(true);

          router.refresh();
        },
      );
    };

  return (
    <div
      className="
        grid
        gap-8

        xl:grid-cols-[minmax(0,1fr)_380px]
      "
    >
      {/* MAIN */}

      <div className="min-w-0">
        {/* TITLE */}

        <div>
          <FieldLabel>
            Yazı Başlığı
          </FieldLabel>

          <textarea
            value={title}
            rows={2}
            onChange={(
              event,
            ) =>
              setTitle(
                event.target
                  .value,
              )
            }
            placeholder="Örn. Sosyal Medya Yönetimi Nedir?"
            className="
              mt-3
              w-full
              resize-none

              border-b
              border-white/20

              bg-transparent

              pb-6

              font-serif

              text-[clamp(2.8rem,5vw,5.4rem)]

              leading-[0.9]
              tracking-[-0.055em]

              text-[var(--text-primary)]

              outline-none

              placeholder:text-[#605c59]

              transition-colors
              duration-300

              hover:border-white/30

              focus:border-[#d86a88]
            "
          />
        </div>

        {/* EXCERPT */}

        <div className="mt-12">
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <FieldLabel>
              Kısa Özet
            </FieldLabel>

            <span
              className="
                text-[10px]
                tabular-nums
                text-[var(--text-muted)]
              "
            >
              {excerpt.length}/320
            </span>
          </div>

          <textarea
            value={excerpt}
            maxLength={320}
            rows={4}
            onChange={(
              event,
            ) =>
              setExcerpt(
                event.target
                  .value,
              )
            }
            placeholder="Google ve blog kartında görünecek kısa açıklama..."
            className={`
              ${fieldClassName}

              resize-none
              leading-7
            `}
          />
        </div>

        {/* EDITOR */}

        <div className="mt-12">
          <FieldLabel>
            İçerik
          </FieldLabel>

          <div className="mt-3">
            <BlogEditor
              value={
                contentHtml
              }
              onChange={
                setContentHtml
              }
            />
          </div>
        </div>
      </div>

      {/* SIDEBAR */}

      <aside className="space-y-6">
        {/* PUBLISH */}

        <section
          className="
            rounded-[22px]

            border
            border-[#6c2038]

            bg-[#0d0d0d]

            p-5

            shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#d86a88]
              "
            >
              Yayın
            </p>

            <span
              className={`
                h-2
                w-2
                rounded-full

                ${
                  status ===
                  "published"
                    ? "bg-[#d86a88]"
                    : "bg-[#85817f]"
                }
              `}
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() =>
                setStatus(
                  "draft",
                )
              }
              className={`
                rounded-[11px]

                border

                px-4
                py-3.5

                text-[10px]
                font-medium
                uppercase
                tracking-[0.14em]

                transition-all
                duration-200

                ${
                  status ===
                  "draft"
                    ? `
                      border-white/30
                      bg-[#1a1a1a]
                      text-[#f4efe9]
                    `
                    : `
                      border-white/15
                      bg-[#111111]
                      text-[var(--text-muted)]

                      hover:border-white/25
                      hover:text-[var(--text-secondary)]
                    `
                }
              `}
            >
              Taslak
            </button>

            <button
              type="button"
              onClick={() =>
                setStatus(
                  "published",
                )
              }
              className={`
                rounded-[11px]

                border

                px-4
                py-3.5

                text-[10px]
                font-medium
                uppercase
                tracking-[0.14em]

                transition-all
                duration-200

                ${
                  status ===
                  "published"
                    ? `
                      border-[#d86a88]
                      bg-[#591323]
                      text-[#f4efe9]
                    `
                    : `
                      border-white/15
                      bg-[#111111]
                      text-[var(--text-muted)]

                      hover:border-[#d86a88]/50
                      hover:text-[var(--text-secondary)]
                    `
                }
              `}
            >
              Yayında
            </button>
          </div>

          {error && (
            <p
              className="
                mt-5

                rounded-[11px]

                border
                border-[#8a304c]

                bg-[#591323]/30

                px-4
                py-3

                text-[12px]
                leading-5
                text-[#ef9eb4]
              "
            >
              {error}
            </p>
          )}

          {saved && (
            <p
              className="
                mt-5

                rounded-[10px]

                border
                border-white/15

                bg-[#121212]

                px-4
                py-3

                text-[12px]
                leading-5
                text-[var(--text-secondary)]
              "
            >
              Değişiklikler kaydedildi.
            </p>
          )}

          <button
            type="button"
            disabled={pending}
            onClick={submit}
            className={`
              mt-5
              w-full
              ${adminPrimaryActionClassName}
            `}
          >
            {pending
              ? "Kaydediliyor..."
              : status ===
                  "published"
                ? "Kaydet & Yayınla"
                : "Taslağı Kaydet"}

            <span>→</span>
          </button>

          <button
            type="button"
            onClick={() =>
              router.push(
                "/admin/blog",
              )
            }
            className={`
              mt-2
              w-full
              ${adminSecondaryActionClassName}
            `}
          >
            Listeye Dön
          </button>
        </section>

        {/* COVER */}

        <section>
          <p
            className="
              mb-3

              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[var(--text-body)]
            "
          >
            Kapak Görseli
          </p>

          <CoverImageField
            value={
              coverImageUrl
            }
            onChange={
              setCoverImageUrl
            }
          />
        </section>

        {/* CATEGORY */}

        <section
          className="
            rounded-[20px]

            border
            border-white/15

            bg-[#0d0d0d]

            p-5
          "
        >
          <FieldLabel>
            Kategori
          </FieldLabel>

          <input
            value={category}
            onChange={(
              event,
            ) =>
              setCategory(
                event.target
                  .value,
              )
            }
            className={
              fieldClassName
            }
          />

          <div className="mt-7">
            <FieldLabel>
              Etiketler
            </FieldLabel>

            <input
              value={tags}
              onChange={(
                event,
              ) =>
                setTags(
                  event.target
                    .value,
                )
              }
              placeholder="SEO, Sosyal Medya, Reklam"
              className={
                fieldClassName
              }
            />

            <p
              className="
                mt-3
                text-[10px]
                leading-5
                text-[var(--text-muted)]
              "
            >
              Etiketleri virgülle ayır.
            </p>
          </div>
        </section>

        {/* URL */}

        <section
          className="
            rounded-[20px]

            border
            border-white/15

            bg-[#0d0d0d]

            p-5
          "
        >
          <FieldLabel>
            URL / Slug
          </FieldLabel>

          <input
            value={slug}
            onChange={(
              event,
            ) =>
              setSlug(
                event.target
                  .value,
              )
            }
            placeholder="Otomatik oluşturulur"
            className={
              fieldClassName
            }
          />

          <div
            className="
              mt-3

              rounded-[9px]

              bg-[#121212]

              px-3
              py-2.5
            "
          >
            <p
              className="
                break-all

                text-[10px]
                leading-5
                text-[var(--text-muted)]
              "
            >
              /blog/
              {slug ||
                "otomatik-olusturulur"}
            </p>
          </div>
        </section>

        {/* SEO */}

        <section
          className="
            rounded-[20px]

            border
            border-white/15

            bg-[#0d0d0d]

            p-5
          "
        >
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#d86a88]
            "
          >
            SEO
          </p>

          <div className="mt-6">
            <div
              className="
                flex
                items-center
                justify-between
                gap-3
              "
            >
              <FieldLabel>
                SEO Başlığı
              </FieldLabel>

              <span
                className="
                  text-[10px]
                  tabular-nums
                  text-[var(--text-muted)]
                "
              >
                {seoTitle.length}/60
              </span>
            </div>

            <input
              value={seoTitle}
              maxLength={60}
              onChange={(
                event,
              ) =>
                setSeoTitle(
                  event.target
                    .value,
                )
              }
              placeholder={
                title ||
                "SEO başlığı"
              }
              className={
                fieldClassName
              }
            />
          </div>

          <div className="mt-6">
            <div
              className="
                flex
                items-center
                justify-between
                gap-3
              "
            >
              <FieldLabel>
                SEO Açıklaması
              </FieldLabel>

              <span
                className="
                  text-[10px]
                  tabular-nums
                  text-[var(--text-muted)]
                "
              >
                {seoDescription.length}/160
              </span>
            </div>

            <textarea
              value={
                seoDescription
              }
              maxLength={160}
              rows={4}
              onChange={(
                event,
              ) =>
                setSeoDescription(
                  event.target
                    .value,
                )
              }
              placeholder={
                excerpt ||
                "Arama sonuçlarında görünecek açıklama..."
              }
              className={`
                ${fieldClassName}

                resize-none
                leading-6
              `}
            />
          </div>
        </section>
      </aside>
    </div>
  );
}