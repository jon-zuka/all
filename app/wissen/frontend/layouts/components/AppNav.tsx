import { styled, getColor, Typography, rgba } from "@jon-zuka/solidjs-ui";
export { StyledAppNav as AppNav };
import { type JSX } from "solid-js";

const Avatar = (
  props: {
    color?: string;
    size?: string;
  } & JSX.IntrinsicElements['div']
) => {
  return <div {...props} />;
};

const StyledAvatar = styled(Avatar)`
  width: ${({ size = "48px" }) => size};
  height: ${({ size = "48px" }) => size};
  border-radius: 50%;
  background-color: ${({ theme, color = "white" }) => getColor(theme!, color)};
  justify-content: center;
  align-items: center;
  display: flex;
`;

const AppNav = (
  props: {
    color: string;
    alpha?: number;
  } & JSX.IntrinsicElements['div']
) => {
  return (
    <div {...props}>
      <div>
        <div />
        <StyledAvatar color="danger">
          <Typography style={{ "font-size": "24px" }}>J</Typography>
        </StyledAvatar>
      </div>
    </div>
  );
};

const StyledAppNav = styled(AppNav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  border-bottom: 1px solid #ffffff3b;
  background-color: ${({ theme, color, alpha = 0.6 }) =>
    rgba(getColor(theme!, color), alpha)};
  & > div {
    display: flex;
    height: 100%;
    width: 100%;
    max-width: ${({ theme }) => theme?.breakpoints.desktop};
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }
`;
