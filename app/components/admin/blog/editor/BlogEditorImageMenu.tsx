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

export default function BlogEditorImageMenu({
  editor,
}: {
  editor: Editor;
}) {
  const attributes =
    useEditorState({
      editor,

      selector: ({
        editor,
      }) => {
        const attrs =
          editor.getAttributes(
            "blogImage",
          );

        return {
          alt:
            (attrs.alt as string) ??
            "",

          caption:
            (attrs.caption as string) ??
            "",
        };
      },
    });

  return (
    <BubbleMenu
      editor={
        editor
      }
      pluginKey="blog-image-bubble"
      shouldShow={() =>
        editor.isActive(
          "blogImage",
        )
      }
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
        onClick={() => {
          const value =
            window.prompt(
              "Görsel alt metni",
              attributes.alt,
            );

          if (
            value === null
          ) {
            return;
          }

          editor
            .chain()
            .focus()
            .updateBlogImage({
              alt:
                value.trim(),
            })
            .run();
        }}
      >
        ALT
      </Button>

      <Button
        onClick={() => {
          const value =
            window.prompt(
              "Görsel açıklaması",
              attributes.caption,
            );

          if (
            value === null
          ) {
            return;
          }

          editor
            .chain()
            .focus()
            .updateBlogImage({
              caption:
                value.trim(),
            })
            .run();
        }}
      >
        Caption
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
        danger
        onClick={() =>
          editor
            .chain()
            .focus()
            .deleteSelection()
            .run()
        }
      >
        Sil
      </Button>
    </BubbleMenu>
  );
}

function Button({
  children,
  danger = false,
  onClick,
}: {
  children:
    ReactNode;

  danger?:
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
        h-8
        px-3

        text-[8px]
        uppercase
        tracking-[0.15em]

        transition-colors

        ${
          danger
            ? "text-[#ef9eb4]/70 hover:bg-[#591323]/30 hover:text-[#ef9eb4]"
            : "text-white/45 hover:bg-white/[0.05] hover:text-white"
        }
      `}
    >
      {children}
    </button>
  );
}