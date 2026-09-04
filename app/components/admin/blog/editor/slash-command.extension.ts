import { Extension } from "@tiptap/core";

import { ReactRenderer } from "@tiptap/react";

import Suggestion from "@tiptap/suggestion";

import {
  BlogEditorSlashMenu,
  filterSlashCommands,
  type SlashMenuRef,
} from "./BlogEditorSlashMenu";

export const SlashCommandExtension = Extension.create({
  name: "slashCommand",

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,

        char: "/",

        startOfLine: true,

        items({ query }) {
          return filterSlashCommands(query);
        },

        command({ editor, range, props }) {
          props.command({
            editor,
            range,
          });
        },

        render() {
          let component: ReactRenderer<SlashMenuRef> | null = null;

          let unmount: (() => void) | null = null;

          return {
            onStart(props) {
              component = new ReactRenderer(BlogEditorSlashMenu, {
                props,

                editor: props.editor,
              });

              /*
               * Floating slash menu toolbar'ın
               * üzerinde render edilmeli.
               */
              component.element.style.zIndex = "80";

              unmount = props.mount(component.element);
            },

            onUpdate(props) {
              component?.updateProps(props);
            },

            onKeyDown(props) {
              if (props.event.key === "Escape") {
                return false;
              }

              return component?.ref?.onKeyDown(props) ?? false;
            },

            onExit() {
              unmount?.();

              component?.destroy();

              component = null;

              unmount = null;
            },
          };
        },
      }),
    ];
  },
});
