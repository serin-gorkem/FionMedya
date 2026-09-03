"use client";

import type {
  ReactNode,
} from "react";

import {
  EditorContent,
  useEditor,
} from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";

/* =========================================================
   TYPES
========================================================= */

type BlogEditorProps = {
  value: string;

  onChange: (
    value: string,
  ) => void;
};

type ToolbarButtonProps = {
  active?: boolean;
  disabled?: boolean;

  onClick: () => void;

  children: ReactNode;
};

/* =========================================================
   EDITOR CONTENT CLASSES

   IMPORTANT:
   Tiptap / ProseMirror classList.add kullanabiliyor.

   Bu yüzden multiline template literal yerine
   class array + join(" ") kullanıyoruz.
========================================================= */

const editorContentClassName = [
  "min-h-[430px]",
  "outline-none",

  "px-6",
  "py-7",

  "text-[15px]",
  "leading-8",
  "text-white/72",

  "[&_p]:mb-5",

  "[&_h2]:mb-5",
  "[&_h2]:mt-10",
  "[&_h2]:font-serif",
  "[&_h2]:text-4xl",
  "[&_h2]:leading-[0.95]",
  "[&_h2]:tracking-[-0.04em]",
  "[&_h2]:text-[#f4efe9]",

  "[&_h3]:mb-4",
  "[&_h3]:mt-8",
  "[&_h3]:font-serif",
  "[&_h3]:text-2xl",
  "[&_h3]:text-[#f4efe9]",

  "[&_strong]:font-semibold",
  "[&_strong]:text-white",

  "[&_em]:text-white/85",

  "[&_blockquote]:my-8",
  "[&_blockquote]:border-l-2",
  "[&_blockquote]:border-[#c45a78]",
  "[&_blockquote]:pl-6",
  "[&_blockquote]:font-serif",
  "[&_blockquote]:text-xl",
  "[&_blockquote]:italic",
  "[&_blockquote]:text-white/65",

  "[&_ul]:my-5",
  "[&_ul]:list-disc",
  "[&_ul]:pl-6",

  "[&_ol]:my-5",
  "[&_ol]:list-decimal",
  "[&_ol]:pl-6",

  "[&_li]:mb-2",

  "[&_a]:text-[#d86a88]",
  "[&_a]:underline",
  "[&_a]:underline-offset-4",
].join(" ");

/* =========================================================
   TOOLBAR BUTTON
========================================================= */

function ToolbarButton({
  active = false,
  disabled = false,
  onClick,
  children,
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`
        flex
        min-h-9
        min-w-9
        items-center
        justify-center

        rounded-[8px]

        border

        px-3

        text-[10px]

        transition-all
        duration-200

        ${
          active
            ? `
              border-[#7a2842]
              bg-[#591323]
              text-white
            `
            : `
              border-white/[0.08]
              bg-[#111111]
              text-white/45

              hover:border-white/15
              hover:text-white
            `
        }

        disabled:cursor-not-allowed
        disabled:opacity-30
      `}
    >
      {children}
    </button>
  );
}

/* =========================================================
   BLOG EDITOR
========================================================= */

export default function BlogEditor({
  value,
  onChange,
}: BlogEditorProps) {
  const editor =
    useEditor({
      /*
       * Next.js SSR hydration için önemli.
       */
      immediatelyRender:
        false,

      extensions: [
        StarterKit.configure({
          heading: {
            levels: [2, 3],
          },

          link: {
            openOnClick:
              false,

            autolink: true,

            defaultProtocol:
              "https",
          },
        }),
      ],

      content:
        value ||
        "<p></p>",

      editorProps: {
        attributes: {
          class:
            editorContentClassName,
        },
      },

      onUpdate({
        editor,
      }) {
        onChange(
          editor.getHTML(),
        );
      },
    });

  /* =======================================================
     LOADING
  ======================================================= */

  if (!editor) {
    return (
      <div
        className="
          min-h-[500px]

          animate-pulse

          rounded-[22px]

          border
          border-white/10

          bg-[#090909]
        "
      />
    );
  }

  /* =======================================================
     LINK
  ======================================================= */

  const setLink =
    () => {
      const previousUrl =
        editor.getAttributes(
          "link",
        ).href as
          | string
          | undefined;

      const url =
        window.prompt(
          "Link adresi",
          previousUrl ??
            "https://",
        );

      /*
       * Cancel
       */
      if (
        url === null
      ) {
        return;
      }

      /*
       * Empty input:
       * existing link removed.
       */
      if (
        url.trim() ===
        ""
      ) {
        editor
          .chain()
          .focus()
          .unsetLink()
          .run();

        return;
      }

      editor
        .chain()
        .focus()
        .extendMarkRange(
          "link",
        )
        .setLink({
          href:
            url.trim(),
        })
        .run();
    };

  /* =======================================================
     UI
  ======================================================= */

  return (
    <div
      className="
        overflow-hidden

        rounded-[22px]

        border
        border-white/10

        bg-[#090909]

        transition-colors
        duration-300

        focus-within:border-[#6d2038]
      "
    >
      {/* =================================================
          TOOLBAR
      ================================================== */}

      <div
        className="
          flex
          flex-wrap
          gap-2

          border-b
          border-white/10

          bg-[#0d0d0d]

          p-3
        "
      >
        {/* BOLD */}

        <ToolbarButton
          active={editor.isActive(
            "bold",
          )}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
        >
          <strong>B</strong>
        </ToolbarButton>

        {/* ITALIC */}

        <ToolbarButton
          active={editor.isActive(
            "italic",
          )}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
        >
          <em>I</em>
        </ToolbarButton>

        <div className="mx-1 h-9 w-px bg-white/10" />

        {/* H2 */}

        <ToolbarButton
          active={editor.isActive(
            "heading",
            {
              level: 2,
            },
          )}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 2,
              })
              .run()
          }
        >
          H2
        </ToolbarButton>

        {/* H3 */}

        <ToolbarButton
          active={editor.isActive(
            "heading",
            {
              level: 3,
            },
          )}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 3,
              })
              .run()
          }
        >
          H3
        </ToolbarButton>

        <div className="mx-1 h-9 w-px bg-white/10" />

        {/* BULLET LIST */}

        <ToolbarButton
          active={editor.isActive(
            "bulletList",
          )}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBulletList()
              .run()
          }
        >
          • List
        </ToolbarButton>

        {/* ORDERED LIST */}

        <ToolbarButton
          active={editor.isActive(
            "orderedList",
          )}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleOrderedList()
              .run()
          }
        >
          1.
        </ToolbarButton>

        {/* QUOTE */}

        <ToolbarButton
          active={editor.isActive(
            "blockquote",
          )}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBlockquote()
              .run()
          }
        >
          “ ”
        </ToolbarButton>

        <div className="mx-1 h-9 w-px bg-white/10" />

        {/* LINK */}

        <ToolbarButton
          active={editor.isActive(
            "link",
          )}
          onClick={
            setLink
          }
        >
          Link
        </ToolbarButton>

        {/* UNDO */}

        <ToolbarButton
          disabled={
            !editor
              .can()
              .undo()
          }
          onClick={() =>
            editor
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          ↶
        </ToolbarButton>

        {/* REDO */}

        <ToolbarButton
          disabled={
            !editor
              .can()
              .redo()
          }
          onClick={() =>
            editor
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          ↷
        </ToolbarButton>
      </div>

      {/* =================================================
          EDITOR AREA
      ================================================== */}

      <EditorContent
        editor={editor}
      />

      {/* =================================================
          FOOTER
      ================================================== */}

      <div
        className="
          flex
          items-center
          justify-between

          border-t
          border-white/[0.07]

          px-5
          py-3
        "
      >
        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-white/20
          "
        >
          Fion Editor
        </span>

        <span
          className="
            text-[8px]
            text-white/20
          "
        >
          Yazmaya odaklan.
        </span>
      </div>
    </div>
  );
}