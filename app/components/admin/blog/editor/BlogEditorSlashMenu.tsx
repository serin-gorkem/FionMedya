"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import type { Editor } from "@tiptap/core";

import type {
  SuggestionKeyDownProps,
  SuggestionProps,
} from "@tiptap/suggestion";

export type SlashCommandItem = {
  title: string;

  description: string;

  icon: string;

  keywords: string[];

  command: ({
    editor,
    range,
  }: {
    editor: Editor;

    range: {
      from: number;
      to: number;
    };
  }) => void;
};

export type SlashMenuRef = {
  onKeyDown: (props: SuggestionKeyDownProps) => boolean;
};

export const slashCommandItems: SlashCommandItem[] = [
  {
    title: "Metin",

    description: "Normal paragraf.",

    icon: "T",

    keywords: ["text", "paragraph", "paragraf", "metin"],

    command({ editor, range }) {
      editor.chain().focus().deleteRange(range).setParagraph().run();
    },
  },

  {
    title: "Başlık 2",

    description: "Ana bölüm başlığı.",

    icon: "H2",

    keywords: ["heading", "başlık", "h2"],

    command({ editor, range }) {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setHeading({
          level: 2,
        })
        .run();
    },
  },

  {
    title: "Başlık 3",

    description: "Alt bölüm başlığı.",

    icon: "H3",

    keywords: ["heading", "başlık", "h3"],

    command({ editor, range }) {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setHeading({
          level: 3,
        })
        .run();
    },
  },

  {
    title: "Madde Listesi",

    description: "Bullet list.",

    icon: "•",

    keywords: ["list", "liste", "madde", "bullet"],

    command({ editor, range }) {
      editor.chain().focus().deleteRange(range).toggleBulletList().run();
    },
  },

  {
    title: "Numaralı Liste",

    description: "Sıralı liste.",

    icon: "1.",

    keywords: ["ordered", "number", "numara", "liste"],

    command({ editor, range }) {
      editor.chain().focus().deleteRange(range).toggleOrderedList().run();
    },
  },

  {
    title: "Alıntı",

    description: "Editorial quote.",

    icon: "“",

    keywords: ["quote", "blockquote", "alıntı"],

    command({ editor, range }) {
      editor.chain().focus().deleteRange(range).toggleBlockquote().run();
    },
  },

  {
    title: "Fion Callout",

    description: "Önemli fikri vurgula.",

    icon: "✦",

    keywords: ["fion", "callout", "not", "note", "vurgu"],

    command({ editor, range }) {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .insertContent({
          type: "fionCallout",

          content: [
            {
              type: "paragraph",
            },
          ],
        })
        .run();
    },
  },

  {
    title: "Ayırıcı",

    description: "Bölüm ayracı.",

    icon: "—",

    keywords: ["divider", "rule", "ayırıcı", "çizgi"],

    command({ editor, range }) {
      editor.chain().focus().deleteRange(range).setHorizontalRule().run();
    },
  },

  {
    title: "Kod Bloğu",

    description: "Kod içeriği.",

    icon: "</>",

    keywords: ["code", "kod"],

    command({ editor, range }) {
      editor.chain().focus().deleteRange(range).toggleCodeBlock().run();
    },
  },
];

export function filterSlashCommands(query: string) {
  const normalized = query.trim().toLocaleLowerCase("tr-TR");

  if (!normalized) {
    return slashCommandItems;
  }

  return slashCommandItems.filter((item) => {
    const searchable = [item.title, item.description, ...item.keywords]
      .join(" ")
      .toLocaleLowerCase("tr-TR");

    return searchable.includes(normalized);
  });
}

type SlashMenuProps = SuggestionProps<SlashCommandItem>;

export const BlogEditorSlashMenu = forwardRef<SlashMenuRef, SlashMenuProps>(
  function BlogEditorSlashMenu(props, ref) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const safeSelectedIndex =
      props.items.length === 0
        ? 0
        : Math.min(selectedIndex, props.items.length - 1);

    const selectItem = useCallback(
      (index: number) => {
        const item = props.items[index];

        if (!item) {
          return;
        }

        props.command(item);
      },
      [props.items, props.command],
    );

    useImperativeHandle(
      ref,
      () => ({
        onKeyDown({ event }) {
          if (event.key === "ArrowUp") {
            event.preventDefault();

            setSelectedIndex((current) =>
              props.items.length === 0
                ? 0
                : (current - 1 + props.items.length) % props.items.length,
            );

            return true;
          }

          if (event.key === "ArrowDown") {
            event.preventDefault();

            setSelectedIndex((current) =>
              props.items.length === 0 ? 0 : (current + 1) % props.items.length,
            );

            return true;
          }

          if (event.key === "Enter") {
            event.preventDefault();

            selectItem(safeSelectedIndex);

            return true;
          }

          return false;
        },
      }),
      [props.items.length,safeSelectedIndex, selectItem],
    );

    return (
      <div
        className="
            w-[min(340px,calc(100vw-24px))]
            z-40
            overflow-hidden

            border
            border-white/10

            bg-[#171214]/98

            shadow-2xl
            shadow-black/50

            backdrop-blur-xl
          "
      >
        <div
          className="
              flex
              items-center
              justify-between

              border-b
              border-white/10

              px-4
              py-3
            "
        >
          <div
            className="
                flex
                items-center
                gap-3
              "
          >
            <span
              className="
                  size-1.5
                  rotate-45
                  bg-[#d36b88]
                "
            />

            <span
              className="
                  text-[7px]
                  uppercase
                  tracking-[0.24em]

                  text-white/45
                "
            >
              Ekle
            </span>
          </div>

          <span
            className="
                text-[6px]
                uppercase
                tracking-[0.2em]

                text-white/20
              "
          >
            Fion Editor
          </span>
        </div>

        <div
          className="
              max-h-80

              overflow-y-auto

              p-2
            "
        >
          {props.items.length === 0 ? (
            <p
              className="
                  px-4
                  py-8

                  text-center
                  text-[8px]
                  uppercase
                  tracking-[0.22em]

                  text-white/25
                "
            >
              Komut bulunamadı
            </p>
          ) : (
            props.items.map((item, index) => {
              const active = index === safeSelectedIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  onMouseDown={(event) => {
                    event.preventDefault();

                    selectItem(index);
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`
                        flex
                        w-full
                        items-center
                        gap-3

                        px-3
                        py-3

                        text-left

                        transition-colors

                        ${active ? "bg-[#591323]/35" : "hover:bg-white/[0.04]"}
                      `}
                >
                  <span
                    className="
                          flex
                          size-9
                          shrink-0

                          items-center
                          justify-center

                          border
                          border-white/10

                          text-[9px]

                          text-white/55
                        "
                  >
                    {item.icon}
                  </span>

                  <span
                    className="
                          min-w-0
                          flex-1
                        "
                  >
                    <span
                      className="
                            block

                            text-[11px]
                            font-medium

                            text-[#f4efe9]
                          "
                    >
                      {item.title}
                    </span>

                    <span
                      className="
                            mt-1
                            block
                            truncate

                            text-[9px]

                            text-white/25
                          "
                    >
                      {item.description}
                    </span>
                  </span>

                  <span
                    className={`
                          text-[#d36b88]

                          transition-opacity

                          ${active ? "opacity-100" : "opacity-0"}
                        `}
                  >
                    →
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div
          className="
              flex
              gap-4

              border-t
              border-white/[0.07]

              px-4
              py-2.5

              text-[6px]
              uppercase
              tracking-[0.18em]

              text-white/20
            "
        >
          <span>↑↓ gezin</span>

          <span>↵ seç</span>

          <span>esc kapat</span>
        </div>
      </div>
    );
  },
);
