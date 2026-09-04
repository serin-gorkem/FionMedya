"use client";

import type {
  ReactNode,
} from "react";

import type {
  Editor,
} from "@tiptap/core";

import {
  BubbleMenu,
} from "@tiptap/react/menus";

import {
  useEditorState,
} from "@tiptap/react";

type Props = {
  editor: Editor;
};

export default function BlogEditorBubbleMenu({
  editor,
}: Props) {
  const state =
    useEditorState({
      editor,

      selector: ({
        editor,
      }) => ({
        bold:
          editor.isActive(
            "bold",
          ),

        italic:
          editor.isActive(
            "italic",
          ),

        underline:
          editor.isActive(
            "underline",
          ),

        highlight:
          editor.isActive(
            "highlight",
          ),

        link:
          editor.isActive(
            "link",
          ),
      }),
    });

  return (
    <BubbleMenu
      editor={
        editor
      }
      pluginKey="blog-text-bubble"
      shouldShow={({
        state,
        editor,
      }) => {
        const {
          from,
          to,
        } =
          state.selection;

        return (
          from !== to &&
          !editor.isActive(
            "blogImage",
          )
        );
      }}
      className="
        flex
        items-center
        gap-1

        border
        border-white/10

        bg-[#171214]/98

        p-1.5
        z-80

        shadow-2xl
        shadow-black/50

        backdrop-blur-xl
      "
    >
      <Button
        active={
          state.bold
        }
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
      >
        <strong>
          B
        </strong>
      </Button>

      <Button
        active={
          state.italic
        }
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
      >
        <em>
          I
        </em>
      </Button>

      <Button
        active={
          state.underline
        }
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleUnderline()
            .run()
        }
      >
        <u>
          U
        </u>
      </Button>

      <Button
        active={
          state.highlight
        }
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHighlight()
            .run()
        }
      >
        ✦
      </Button>

      <span
        className="
          mx-1
          h-5
          w-px
          bg-white/10
        "
      />

      <Button
        active={
          state.link
        }
        wide
        onClick={() => {
          const current =
            editor.getAttributes(
              "link",
            )
              .href as
              | string
              | undefined;

          const url =
            window.prompt(
              "Bağlantı",
              current ??
                "https://",
            );

          if (
            url === null
          ) {
            return;
          }

          if (
            !url.trim()
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
            .setLink({
              href:
                url.trim(),
            })
            .run();
        }}
      >
        Link
      </Button>
    </BubbleMenu>
  );
}

function Button({
  children,
  active = false,
  wide = false,
  onClick,
}: {
  children:
    ReactNode;

  active?:
    boolean;

  wide?:
    boolean;

  onClick:
    () => void;
}) {
  return (
    <button
      type="button"
      onClick={
        onClick
      }
      className={`
        flex
        h-8

        items-center
        justify-center

        text-[10px]

        transition-colors

        ${
          wide
            ? "min-w-12 px-2"
            : "w-8"
        }

        ${
          active
            ? "bg-[#591323]/50 text-white"
            : "text-white/50 hover:bg-white/[0.06] hover:text-white"
        }
      `}
    >
      {children}
    </button>
  );
}