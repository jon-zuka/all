import { type Setter } from "solid-js";

export function MarkdownView(props: {
  content?: string;
  setContent: Setter<string>;
}) {
  return (
    <textarea
      style={{
        width: "100%",
      }}
      value={props.content}
      onInput={(e) => props.setContent(e.currentTarget.value)}
    />
  );
}
