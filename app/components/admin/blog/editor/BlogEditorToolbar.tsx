"use client";

import type {
  ReactNode,
} from "react";

import type {
  Editor,
} from "@tiptap/core";

import {
  useEditorState,
} from "@tiptap/react";

type Props = {
  editor: Editor;

  onPickImage?: () => void;

  imageUploading?: boolean;

  focusMode?: boolean;

  onToggleFocusMode?: () => void;
};

function editLink(
  editor: Editor,
) {
  const oldUrl =
    editor.getAttributes(
      "link",
    ).href as
      | string
      | undefined;

  const url =
    window.prompt(
      "Bağlantı adresi",
      oldUrl ??
        "https://",
    );

  if (url === null) {
    return;
  }

  const next =
    url.trim();

  if (!next) {
    editor
      .chain()
      .focus()
      .extendMarkRange(
        "link",
      )
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
        next,
    })
    .run();
}

export default function BlogEditorToolbar({
  editor,
  onPickImage,
  imageUploading = false,
  focusMode = false,
  onToggleFocusMode,
}: Props) {
  const state =
    useEditorState({
      editor,

      selector: ({
        editor,
      }) => ({
        paragraph:
          editor.isActive(
            "paragraph",
          ),

        h2:
          editor.isActive(
            "heading",
            {
              level:
                2,
            },
          ),

        h3:
          editor.isActive(
            "heading",
            {
              level:
                3,
            },
          ),

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

        strike:
          editor.isActive(
            "strike",
          ),

        highlight:
          editor.isActive(
            "highlight",
          ),

        bulletList:
          editor.isActive(
            "bulletList",
          ),

        orderedList:
          editor.isActive(
            "orderedList",
          ),

        blockquote:
          editor.isActive(
            "blockquote",
          ) &&
          !editor.isActive(
            "fionCallout",
          ),

        codeBlock:
          editor.isActive(
            "codeBlock",
          ),

        link:
          editor.isActive(
            "link",
          ),

        center:
          editor.isActive({
            textAlign:
              "center",
          }),

        right:
          editor.isActive({
            textAlign:
              "right",
          }),

        canUndo:
          editor.can().undo(),

        canRedo:
          editor.can().redo(),
      }),
    });

  return (
    <div
      className={`
        sticky

        z-20

        border-b
        border-white/10

        bg-[#121011]/95

        backdrop-blur-xl

        ${
          focusMode
            ? "top-0"
            : "top-[76px]"
        }
      `}
    >
      <div
        className="
          flex
          min-h-[58px]

          items-center

          overflow-x-auto

          px-3

          [scrollbar-width:none]

          [&::-webkit-scrollbar]:hidden
        "
      >
        <Group>
          <Button
            label="Geri al"
            disabled={
              !state.canUndo
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
          </Button>

          <Button
            label="İleri al"
            disabled={
              !state.canRedo
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
          </Button>
        </Group>

        <Divider />

        <Group>
          <Button
            label="Paragraf"
            wide
            active={
              state.paragraph
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .setParagraph()
                .run()
            }
          >
            Text
          </Button>

          <Button
            label="Başlık 2"
            active={
              state.h2
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({
                  level:
                    2,
                })
                .run()
            }
          >
            H2
          </Button>

          <Button
            label="Başlık 3"
            active={
              state.h3
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({
                  level:
                    3,
                })
                .run()
            }
          >
            H3
          </Button>
        </Group>

        <Divider />

        <Group>
          <Button
            label="Kalın"
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
            label="İtalik"
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
            label="Altı çizili"
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
            label="Üstü çizili"
            active={
              state.strike
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
          >
            <s>
              S
            </s>
          </Button>

          <Button
            label="Vurgu"
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
        </Group>

        <Divider />

        <Group>
          <Button
            label="Madde listesi"
            active={
              state.bulletList
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleBulletList()
                .run()
            }
          >
            •
          </Button>

          <Button
            label="Numaralı liste"
            active={
              state.orderedList
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleOrderedList()
                .run()
            }
          >
            1.
          </Button>

          <Button
            label="Alıntı"
            active={
              state.blockquote
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleBlockquote()
                .run()
            }
          >
            “
          </Button>

          <Button
            label="Kod bloğu"
            active={
              state.codeBlock
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleCodeBlock()
                .run()
            }
          >
            {"</>"}
          </Button>
        </Group>

        <Divider />

        <Group>
          <Button
            label="Sola hizala"
            active={
              !state.center &&
              !state.right
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .setTextAlign(
                  "left",
                )
                .run()
            }
          >
            ≡
          </Button>

          <Button
            label="Ortala"
            active={
              state.center
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .setTextAlign(
                  "center",
                )
                .run()
            }
          >
            ≣
          </Button>

          <Button
            label="Sağa hizala"
            active={
              state.right
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .setTextAlign(
                  "right",
                )
                .run()
            }
          >
            ≡
          </Button>
        </Group>

        <Divider />

        <Group>
          <Button
            label="Görsel ekle"
            wide
            disabled={
              imageUploading
            }
            onClick={() =>
              onPickImage?.()
            }
          >
            {imageUploading
              ? "..."
              : "Image"}
          </Button>

          <Button
            label="Link"
            wide
            active={
              state.link
            }
            onClick={() =>
              editLink(
                editor,
              )
            }
          >
            Link
          </Button>

          <Button
            label="Ayırıcı"
            onClick={() =>
              editor
                .chain()
                .focus()
                .setHorizontalRule()
                .run()
            }
          >
            —
          </Button>
        </Group>

        <Divider />

        <Group>
          <Button
            label={
              focusMode
                ? "Focus modundan çık"
                : "Focus modu"
            }
            wide
            active={
              focusMode
            }
            onClick={() =>
              onToggleFocusMode?.()
            }
          >
            {focusMode
              ? "Çık"
              : "Focus"}
          </Button>
        </Group>
      </div>
    </div>
  );
}

function Group({
  children,
}: {
  children:
    ReactNode;
}) {
  return (
    <div
      className="
        flex
        shrink-0
        items-center
        gap-1
      "
    >
      {children}
    </div>
  );
}

function Divider() {
  return (
    <span
      aria-hidden="true"
      className="
        mx-2

        h-6
        w-px
        shrink-0

        bg-white/10
      "
    />
  );
}

function Button({
  children,
  label,
  active = false,
  disabled = false,
  wide = false,
  onClick,
}: {
  children:
    ReactNode;

  label:
    string;

  active?:
    boolean;

  disabled?:
    boolean;

  wide?:
    boolean;

  onClick:
    () => void;
}) {
  return (
    <button
      type="button"
      title={
        label
      }
      aria-label={
        label
      }
      aria-pressed={
        active
      }
      disabled={
        disabled
      }
      onClick={
        onClick
      }
      className={`
        flex
        h-9
        shrink-0

        items-center
        justify-center

        border

        text-[10px]
        font-medium

        transition-all
        duration-200

        disabled:pointer-events-none
        disabled:opacity-25

        ${
          wide
            ? "min-w-14 px-3"
            : "w-9"
        }

        ${
          active
            ? `
              border-[#d36b88]/40
              bg-[#591323]/30
              text-[#f4efe9]
            `
            : `
              border-transparent
              text-white/45

              hover:border-white/10
              hover:bg-white/[0.04]
              hover:text-white
            `
        }
      `}
    >
      {children}
    </button>
  );
}