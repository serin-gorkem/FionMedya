"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { Editor } from "@tiptap/core";

import { EditorContent, useEditor } from "@tiptap/react";

import BlogEditorToolbar from "./BlogEditorToolbar";
import BlogEditorBubbleMenu from "./BlogEditorBubbleMenu";
import BlogEditorImageMenu from "./BlogEditorImageMenu";
import BlogEditorStatusBar from "./BlogEditorStatusBar";

import { createBlogEditorExtensions } from "./blog-editor.extensions";

import {
  BLOG_IMAGE_MIME_TYPES,
  isBlogImageFile,
  uploadBlogContentImage,
} from "@/features/blog/blog.media.client";

type BlogEditorProps = {
  value?: string;

  name?: string;

  placeholder?: string;

  onChange?: (html: string) => void;
};

const editorContentClassName = [
  "min-h-[640px]",
  "outline-none",

  "px-5",
  "py-12",

  "sm:px-10",
  "sm:py-14",

  "lg:px-16",
  "lg:py-16",

  "text-[16px]",
  "leading-[1.9]",
  "text-white/75",

  "sm:text-[17px]",

  "[&_p]:mb-7",

  "[&_h2]:mt-16",
  "[&_h2]:mb-7",
  "[&_h2]:font-serif",
  "[&_h2]:text-[clamp(2.6rem,4vw,4.5rem)]",
  "[&_h2]:leading-[0.92]",
  "[&_h2]:tracking-[-0.05em]",
  "[&_h2]:text-[#f4efe9]",

  "[&_h3]:mt-12",
  "[&_h3]:mb-6",
  "[&_h3]:font-serif",
  "[&_h3]:text-[clamp(2rem,3vw,3rem)]",
  "[&_h3]:leading-[0.96]",
  "[&_h3]:tracking-[-0.04em]",
  "[&_h3]:text-[#f4efe9]",

  "[&_strong]:font-medium",
  "[&_strong]:text-[#f4efe9]",

  "[&_em]:text-white/90",

  "[&_mark]:bg-[#d36b88]/20",
  "[&_mark]:text-[#f4efe9]",
  "[&_mark]:px-0.5",

  "[&_a]:text-[#e487a1]",
  "[&_a]:underline",
  "[&_a]:decoration-[#7c2a43]",
  "[&_a]:underline-offset-4",

  /* Normal quote */

  "[&_blockquote]:my-14",
  "[&_blockquote]:border-l",
  "[&_blockquote]:border-[#d36b88]",
  "[&_blockquote]:py-2",
  "[&_blockquote]:pl-7",
  "[&_blockquote]:font-serif",
  "[&_blockquote]:text-[clamp(1.7rem,2.5vw,2.6rem)]",
  "[&_blockquote]:italic",
  "[&_blockquote]:leading-[1.2]",
  "[&_blockquote]:tracking-[-0.035em]",
  "[&_blockquote]:text-white/75",

  "[&_blockquote_p]:mb-0",

  /* Fion callout */

  "[&_blockquote[data-fion-callout=true]]:relative",
  "[&_blockquote[data-fion-callout=true]]:overflow-hidden",

  "[&_blockquote[data-fion-callout=true]]:border",
  "[&_blockquote[data-fion-callout=true]]:border-[#d36b88]/25",

  "[&_blockquote[data-fion-callout=true]]:bg-[#591323]/20",

  "[&_blockquote[data-fion-callout=true]]:px-6",
  "[&_blockquote[data-fion-callout=true]]:py-7",

  "[&_blockquote[data-fion-callout=true]]:font-sans",
  "[&_blockquote[data-fion-callout=true]]:not-italic",

  "[&_blockquote[data-fion-callout=true]]:text-[15px]",
  "[&_blockquote[data-fion-callout=true]]:leading-7",
  "[&_blockquote[data-fion-callout=true]]:tracking-normal",

  "[&_blockquote[data-fion-callout=true]]:text-white/75",

  /* Lists */

  "[&_ul]:my-8",
  "[&_ul]:list-disc",
  "[&_ul]:space-y-2",
  "[&_ul]:pl-6",

  "[&_ol]:my-8",
  "[&_ol]:list-decimal",
  "[&_ol]:space-y-2",
  "[&_ol]:pl-6",

  "[&_li]:pl-1",

  "[&_li::marker]:text-[#d36b88]",

  /* code */

  "[&_code]:bg-white/[0.07]",
  "[&_code]:px-1.5",
  "[&_code]:py-1",
  "[&_code]:text-[0.9em]",
  "[&_code]:text-[#e5a0b4]",

  "[&_pre]:my-10",
  "[&_pre]:overflow-x-auto",
  "[&_pre]:border",
  "[&_pre]:border-white/10",
  "[&_pre]:bg-black/25",
  "[&_pre]:p-5",

  "[&_pre_code]:bg-transparent",
  "[&_pre_code]:p-0",

  /* image */

  "[&_figure[data-blog-image=true]]:my-12",

  "[&_figure[data-blog-image=true]]:overflow-hidden",

  "[&_figure[data-blog-image=true]]:border",
  "[&_figure[data-blog-image=true]]:border-white/10",

  "[&_figure[data-blog-image=true]]:bg-black/20",

  "[&_figure[data-blog-image=true]_img]:block",
  "[&_figure[data-blog-image=true]_img]:h-auto",
  "[&_figure[data-blog-image=true]_img]:w-full",

  "[&_figure[data-blog-image=true]_figcaption]:border-t",
  "[&_figure[data-blog-image=true]_figcaption]:border-white/10",

  "[&_figure[data-blog-image=true]_figcaption]:px-4",
  "[&_figure[data-blog-image=true]_figcaption]:py-3",

  "[&_figure[data-blog-image=true]_figcaption]:text-[10px]",
  "[&_figure[data-blog-image=true]_figcaption]:leading-5",
  "[&_figure[data-blog-image=true]_figcaption]:text-white/40",

  /* selected nodes */

  "[&_.ProseMirror-selectednode]:outline",
  "[&_.ProseMirror-selectednode]:outline-1",
  "[&_.ProseMirror-selectednode]:outline-[#d36b88]/70",

  "[&_hr]:my-14",
  "[&_hr]:border-white/10",

  "selection:bg-[#d36b88]/30",

  /* Placeholder */

  "[&_.is-empty:first-child::before]:pointer-events-none",
  "[&_.is-empty:first-child::before]:float-left",
  "[&_.is-empty:first-child::before]:h-0",
  "[&_.is-empty:first-child::before]:text-white/20",
  "[&_.is-empty:first-child::before]:content-[attr(data-placeholder)]",
].join(" ");

export default function BlogEditor({
  value = "",
  name,
  placeholder,
  onChange,
}: BlogEditorProps) {
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const [uploadCount, setUploadCount] = useState(0);

  const [uploadError, setUploadError] = useState<string | null>(null);
  const [focusMode, setFocusMode] = useState(false);
  const handleImageFiles = useCallback(
    async (
      targetEditor: Editor,

      files: File[],

      position?: number,
    ) => {
      const imageFiles = files.filter(isBlogImageFile);

      if (imageFiles.length === 0) {
        setUploadError("Desteklenen bir görsel bulunamadı.");

        return;
      }

      setUploadError(null);

      setUploadCount(imageFiles.length);

      try {
        let insertPosition = position;

        for (const file of imageFiles) {
          const url = await uploadBlogContentImage(file);

          const node = {
            type: "blogImage",

            attrs: {
              src: url,

              alt: file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),

              caption: "",
            },
          };

          if (typeof insertPosition === "number") {
            targetEditor
              .chain()
              .focus()
              .insertContentAt(insertPosition, node)
              .run();

            insertPosition = targetEditor.state.selection.to;
          } else {
            targetEditor.chain().focus().insertContent(node).run();
          }
        }
      } catch (error) {
        setUploadError(
          error instanceof Error ? error.message : "Görsel yüklenemedi.",
        );
      } finally {
        setUploadCount(0);
      }
    },
    [],
  );

  const editor = useEditor({
    immediatelyRender: false,

    shouldRerenderOnTransaction: false,

    extensions: createBlogEditorExtensions({
      placeholder,

      onImageFiles: handleImageFiles,
    }),

    content: value || "<p></p>",

    editorProps: {
      attributes: {
        class: editorContentClassName,
      },
    },

    onUpdate({ editor }) {
      const nextHtml = editor.getHTML();

      if (hiddenInputRef.current) {
        hiddenInputRef.current.value = nextHtml;
      }

      onChange?.(nextHtml);
    },
  });

  useEffect(() => {
    if (!editor) {
      return;
    }

    const next = value || "<p></p>";

    if (editor.getHTML() !== next) {
      editor.commands.setContent(next, {
        emitUpdate: false,
      });
    }

    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = value;
    }
  }, [editor, value]);

  useEffect(() => {
    if (!focusMode) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFocusMode(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [focusMode]);

  if (!editor) {
    return (
      <div
        className="
          min-h-[720px]

          animate-pulse

          border
          border-white/10

          bg-white/[0.015]
        "
      />
    );
  }

  const uploading = uploadCount > 0;

  return (
    <div
      className={`
    border
    border-white/10

    bg-[#141112]/95

    transition-colors

    focus-within:border-[#d36b88]/35

    ${
      focusMode
        ? `
          fixed
          inset-x-0
          bottom-0
          top-[76px]

          z-40

          overflow-y-auto

          bg-[#0b090a]

          border-x-0
          border-b-0
        `
        : `
          relative
          overflow-visible
        `
    }
  `}
    >
      <input
        ref={imageInputRef}
        type="file"
        accept={BLOG_IMAGE_MIME_TYPES.join(",")}
        multiple
        hidden
        onChange={(event) => {
          const files = Array.from(event.currentTarget.files ?? []);

          void handleImageFiles(editor, files);

          event.currentTarget.value = "";
        }}
      />

      <BlogEditorToolbar
        editor={editor}
        imageUploading={uploading}
        focusMode={focusMode}
        onToggleFocusMode={() => setFocusMode((current) => !current)}
        onPickImage={() => imageInputRef.current?.click()}
      />

      <BlogEditorBubbleMenu editor={editor} />

      <BlogEditorImageMenu editor={editor} />

      {(uploading || uploadError) && (
        <div
          className="
            flex
            items-center
            justify-between
            gap-5

            border-b
            border-white/10

            px-5
            py-3

            text-[8px]
            uppercase
            tracking-[0.18em]
          "
        >
          {uploading ? (
            <span
              className="
                flex
                items-center
                gap-3

                text-white/40
              "
            >
              <span
                className="
                  size-1.5
                  animate-pulse
                  rotate-45

                  bg-[#d36b88]
                "
              />
              {uploadCount} görsel yükleniyor...
            </span>
          ) : (
            <span
              className="
                text-[#ef9eb4]
              "
            >
              {uploadError}
            </span>
          )}

          {uploadError && (
            <button
              type="button"
              onClick={() => setUploadError(null)}
              className="
                text-white/30

                hover:text-white
              "
            >
              ×
            </button>
          )}
        </div>
      )}

      <div
        className={`
    relative
    mx-auto

    ${focusMode ? "max-w-[1040px]" : "max-w-[940px]"}
  `}
      >
        <EditorContent editor={editor} />
      </div>

      {name && (
        <input
          ref={hiddenInputRef}
          type="hidden"
          name={name}
          defaultValue={value}
        />
      )}

      <BlogEditorStatusBar editor={editor} />
    </div>
  );
}
