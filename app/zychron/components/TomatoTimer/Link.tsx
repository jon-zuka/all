export {Link}

import { createMemo } from "solid-js";
import { usePageContext } from "vike-solid/usePageContext";
import { type JSX, children, Component } from "solid-js";
// export function Link(props: { href: string; children: string }) {
//   const pageContext = usePageContext();
//   const isActive = createMemo(() =>
//     props.href === "/" ? pageContext.urlPathname === props.href : pageContext.urlPathname.startsWith(props.href),
//   );
//   return (
//     <a href={props.href} class={isActive() ? "is-active" : undefined}>
//       {props.children}
//     </a>
//   );
// }

function Link(props: JSX.HTMLElementTags["a"] & { disabled?: boolean }) {
  const pageContext = usePageContext();
  const disabled = () => props.disabled || false;
  const isActive = createMemo(
    () =>
      !!props.href &&
      (props.href === "/"
        ? pageContext.urlPathname === props.href
        : pageContext.urlPathname.startsWith(props.href))
  );
  const resolvedChildren = children(() => props.children);
  return (
    <a
      {...props}
      classList={{
        disabled: disabled(),
        active: isActive() && !disabled(),
      }}
    >
      {resolvedChildren()}
    </a>
  );
}
