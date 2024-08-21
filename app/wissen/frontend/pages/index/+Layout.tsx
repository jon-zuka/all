export { Layout };
// import { MarkdownView, ProseMirrorView } from "@/components/editor";

import { BaseLayout } from "@/layouts/BaseLayout";
// import { styled } from "@jon-zuka/solidjs-ui";
import { type JSX,
  // , Show, children, 
  createSignal } from "solid-js";

// const StyledDiv = styled("div")`
//   padding: 4rem;
//   height: 50rem;
//   textarea {
//     background-color: ${({ theme }) => theme?.colors.background};
//     height: 100%;
//   }
// `;

function Layout(props: JSX.IntrinsicElements["div"]) {
  // const [content, setContent] = createSignal("");
  return (
    <BaseLayout>
      {/* <StyledDiv> */}
        {/* <ProseMirrorView content={content()} setContent={setContent} /> */}
      {/* </StyledDiv> */}
    </BaseLayout>
  );
}
