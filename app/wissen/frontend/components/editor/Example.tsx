import { createEffect, onCleanup, type JSX } from "solid-js";
import { schema } from "prosemirror-schema-basic";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { undo, redo, history } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";

function ProseMirrorEditor() {
  let editorRef: JSX.IntrinsicElements["div"] | undefined;

  createEffect(() => {
    // Create the initial state
    const state = EditorState.create({
      schema,
      plugins: [history(), keymap({ "Mod-z": undo, "Mod-y": redo })],
    });

    // Initialize the ProseMirror view
    const view = new EditorView(editorRef, {
      state,
      dispatchTransaction(tr) {
        console.log(
          "Document size went from",
          tr.before.content.size,
          "to",
          tr.doc.content.size
        );
        let newState = view.state.apply(tr);
        view.updateState(newState);
      },
    });

    // Cleanup the editor view on component unmount
    onCleanup(() => {
      view.destroy();
    });
  });

  return <div ref={editorRef}></div>;
}

export default ProseMirrorEditor;

// import { createSignal } from "solid-js";
// import "./MarkdownView";
// import MarkdownView from "./MarkdownView";
// import ProseMirrorView from './ProseMirrorView';
// import { styled } from "@jon-zuka/solidjs-ui";

// const StyledDiv = styled('div')`
// background-color: orange;
// .ProseMirror-menubar {
//   display: flex;

// }`

// function Editor() {
//   const [content, setContent] = createSignal("");

//   return (
//     <StyledDiv id="editor">
//       <MarkdownView content={content()} setContent={setContent} />
//       <ProseMirrorView content={content()} />
//     </StyledDiv>
//   );
// }

// export default Editor;
