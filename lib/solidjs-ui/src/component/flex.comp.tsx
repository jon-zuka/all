import { JSX } from "solid-js";
import { css } from "solid-styled-components";

export const Flex = (
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    gap: string;
    direction: 'column' | 'row'
  }
) => {
  return (
    <div
      {...props}
      class={css`
        display: flex;
        gap: ${props.gap};
        flex-wrap: wrap;
      `}
    />
  );
};
