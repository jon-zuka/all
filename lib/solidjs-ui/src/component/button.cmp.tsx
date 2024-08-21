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
    fullWidth?: boolean;
  }
) => {
  const [split, rest] = splitProps(props, [
    "children",
    "active",
    "disabled",
    "variant",
    "loading",
    "loadingComponent",
    "fullWidth",
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
  ${({ theme, color = "inherit" }) => css`
    height: 36px;
    transition: background-color 0.4s;
    cursor: pointer;
    background-color: transparent;
    border-radius: ${theme?.shapes.bevel};
    &.outlined {
      outline: 0.08rem solid;
      padding: 0 1rem;
      &:hover {
        background-color: ${rgba(getColor(theme!, color), 0.2)};
      }
    }
    grid-column: span 1;
    outline-color: ${getColor(theme!, color)};
    color: ${getColor(theme!, color!)};
    &.text {
      color: ${rgba(getColor(theme!, color), 0.8)};
      height: auto;
      &:hover {
        color: ${rgba(getColor(theme!, color), 1)};
      }
    }
    &.contained {
      background-color: ${rgba(getColor(theme!, color), 0.8)};
      color: ${readableColor(getColor(theme!, color))};
      outline-color: none;
      outline-color: ${getColor(theme!, color)};
      &:hover {
        background-color: ${rgba(getColor(theme!, color), 1)};
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
      background-color: ${rgba(getColor(theme!, color), 0.1)};
    }
  `}
`;

export { StyledButton as Button };
