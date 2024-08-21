import { styled } from "solid-styled-components";
import { readableColor, rgba } from "polished";
import { JSX } from "solid-js";

const StyledNav = styled("nav")`
  display: flex;
  z-index: 999;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => rgba(props.theme?.colors.background!, 0.6)};
  color: ${(props) =>
    readableColor(
      props.theme?.colors.background!,
      undefined,
      props.theme?.colors.text!
    )};
  & > * {
    position: relative;
    text-align: center;
    padding: 0.5rem 0;
    text-transform: capitalize;
    width: 100%;
    &:hover {
      background-color: ${(props) => props.theme?.colors.primary!};
    }
    &.is-active::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 6px;
      background-color: ${(props) => props.theme?.colors.primary!};
    }
  }
`;

interface AppNavProps extends JSX.HTMLAttributes<HTMLDivElement> {}
export const AppNav = (props: AppNavProps) => {
  return <StyledNav>{props.children}</StyledNav>;
};
