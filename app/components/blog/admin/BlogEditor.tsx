"use client";

import type {
  ReactNode,
} from "react";

import {
  EditorContent,
  useEditor,
} from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";

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

const editorContentClassName = [
  "min-h-[430px]",
  "outline-none",

  "px-6",
  "py-7",

  "text-[16px]",
  "leading-8",
  "text-[var(--text-secondary)]",

  "[&_p]:mb-5",

  "[&_h2]:mb-5",
  "[&_h2]:mt-10",
  "[&_h2]:font-serif",
  "[&_h2]:text-4xl",
  "[&_h2]:leading-[0.95]",
  "[&_h2]:tracking-[-0.04em]",
  "[&_h2]:text-[var(--text-primary)]",

  "[&_h3]:mb-4",
  "[&_h3]:mt-8",
  "[&_h3]:font-serif",
  "[&_h3]:text-2xl",
  "[&_h3]:text-[var(--text-primary)]",

  "[&_strong]:font-semibold",
  "[&_strong]:text-white",

  "[&_em]:text-[#d3cfca]",

  "[&_blockquote]:my-8",
  "[&_blockquote]:border-l-2",
  "[&_blockquote]:border-[#d86a88]",
  "[&_blockquote]:pl-6",
  "[&_blockquote]:font-serif",
  "[&_blockquote]:text-xl",
  "[&_blockquote]:italic",
  "[&_blockquote]:text-[#c2beb8]",

  "[&_ul]:my-5",
  "[&_ul]:list-disc",
  "[&_ul]:pl-6",

  "[&_ol]:my-5",
  "[&_ol]:list-decimal",
  "[&_ol]:pl-6",

  "[&_li]:mb-2",

  "[&_a]:text-[#e584a0]",
  "[&_a]:underline",
  "[&_a]:underline-offset-4",
].join(" ");

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
        min-h-10
        min-w-10
        items-center
        justify-center

        rounded-[9px]

        border

        px-3

        text-[11px]
        font-medium

        transition-all
        duration-200

        ${
          active
            ? `
              border-[#d86a88]
              bg-[#591323]
              text-[#f4efe9]
            `
            : `
              border-white/15
              bg-[#121212]
              text-[var(--text-secondary)]

              hover:border-[#d86a88]/60
              hover:bg-[#171717]
              hover:text-[#f4efe9]
            `
        }

        disabled:cursor-not-allowed
        disabled:opacity-40
      `}
    >
      {children}
    </button>
  );
}

export default function BlogEditor({
  value,
  onChange,
}: BlogEditorProps) {
  const editor =
    useEditor({
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

  if (!editor) {
    return (
      <div
        className="
          min-h-[500px]

          animate-pulse

          rounded-[22px]

          border
          border-white/15

          bg-[#0d0d0d]
        "
      />
    );
  }

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

      if (
        url === null
      ) {
        return;
      }

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

  return (
    <div
      className="
        overflow-hidden

        rounded-[22px]

        border
        border-white/15

        bg-[#0d0d0d]

        transition-colors
        duration-300

        hover:border-white/20

        focus-within:border-[#d86a88]
      "
    >
      {/* TOOLBAR */}

      <div
        className="
          flex
          flex-wrap
          gap-2

          border-b
          border-white/15

          bg-[#121212]

          p-3
        "
      >
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

        <div className="mx-1 h-10 w-px bg-white/15" />

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

        <div className="mx-1 h-10 w-px bg-white/15" />

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
          • Liste
        </ToolbarButton>

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

        <div className="mx-1 h-10 w-px bg-white/15" />

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

      {/* EDITOR */}

      <EditorContent
        editor={editor}
      />

      {/* FOOTER */}

      <div
        className="
          flex
          items-center
          justify-between

          border-t
          border-white/15

          bg-[#101010]

          px-5
          py-3
        "
      >
        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[var(--text-muted)]
          "
        >
          Fion Editor
        </span>

        <span
          className="
            text-[10px]
            text-[var(--text-muted)]
          "
        >
          Yazmaya odaklan.
        </span>
      </div>
    </div>
  );
}