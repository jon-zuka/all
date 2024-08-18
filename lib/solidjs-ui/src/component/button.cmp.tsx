import { JSX, splitProps, Show } from "solid-js";
import { getColor, ThemeColor } from "../theme";
import { styled } from "solid-styled-components";
import { rgba, readableColor } from "polished";

const Button = (
  props: JSX.IntrinsicElements["button"] & {
    color?: ThemeColor;
    active?: boolean;
    variant?: "outlined" | "contained" | "text";
    loading?: boolean;
    loadingComponent?: JSX.Element;
    fullWidth?: boolean
  }
) => {
  const [split, rest] = splitProps(props, [
    "children",
    "active",
    "disabled",
    "variant",
    "loading",
    "loadingComponent",
    "fullWidth"
  ]);
  return (
    <button
      {...rest}
      classList={{
        active: split.active,
        disabled: split.disabled,
        "full-width": split.fullWidth,
        [split.variant ?? "outlined"]: true,
      }}
    >
      <Show when={!split.loading} fallback={split.loadingComponent}>
        {split.children}
      </Show>
    </button>
  );
};

const css = String.raw;
const StyledButton = styled(Button)`
  ${({ theme, color = 'text' }) => css`
    transition: background-color 0.4s;
    cursor: pointer;
    background-color: transparent;
    border-radius: ${theme?.shapes.bevel};
    outline: 0.08rem solid;
    padding: 0 1rem;
    grid-column: span 1;
    outline-color: ${getColor(color)};
    color: ${getColor(color!)};
    height: 36px;
    &.contained {
      background-color: ${getColor(color)};
      color: ${readableColor(getColor(color))};
      outline-color: none;
      outline-color: ${getColor(color)};
      &:hover {
        background-color: ${rgba(getColor(color), 0.8)};
      }
    }
    &.full-width {
      width: 100%;
    }
    &.disabled {
      pointer-events: none;
      opacity: 0.8;
    }
    &.disabled.active {
      background-color: ${rgba(getColor(color), 0.1)};
    }
    &:hover {
      background-color: ${rgba(getColor(color), 0.2)};
    }
  `}
`;

export { StyledButton as Button };
