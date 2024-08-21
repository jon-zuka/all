import {
  createSignal,
  onCleanup,
  onMount,
  type JSX,
  type Setter,
} from "solid-js";
import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
import {
  schema,
  defaultMarkdownParser,
  defaultMarkdownSerializer,
} from "prosemirror-markdown";
import { exampleSetup } from "prosemirror-example-setup";

import "prosemirror-menu/style/menu.css";
import { styled } from "@jon-zuka/solidjs-ui";

const StyledDiv = styled("div")`
  /* background-color: ${({ theme }) => theme?.colors.background}; */
  background-color: ${({ theme }) => theme?.colors.background};
  height: 100vh;
  :focus {
    outline: none;
  }
  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 1.4rem 0;
  }
  h2 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export function ProseMirrorView(props: {
  content: string;
  setContent: Setter<string>;
}) {
  let editorContainer: JSX.IntrinsicElements["div"] | undefined;
  const [view, setView] = createSignal<EditorView | null>(null);

  function updateContent() {
    props.setContent(defaultMarkdownSerializer.serialize(view()!.state.doc));
  }

  onMount(() => {
    const editorView = new EditorView(editorContainer, {
      state: EditorState.create({
        doc: defaultMarkdownParser.parse(props.content),
        plugins: exampleSetup({ schema }),
      }),
    });
    setView(editorView);
    ProseMirrorView;
  });

  onCleanup(() => {
    updateContent();
  });

  return <StyledDiv ref={editorContainer} />;
}
