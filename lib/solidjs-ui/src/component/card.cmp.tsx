
import { rgba } from "polished";
import { JSX } from "solid-js";
import { styled } from "solid-styled-components";

const StyledDiv = styled("div")`
  min-height: 30rem;
  width: 100%;
  overflow: hidden;
  position: relative;

  .container {
    background-color: ${(props) => rgba(props.theme?.colors.background!, 0.8)};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    height: 10rem;

    .title {
      color: ${(props) => props.theme?.colors.primary};
      font-size: 1rem;
      margin-bottom: .5rem;
    }
  }
`;

export const Card = ({
  children,
  ...props
}: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StyledDiv {...props}>
      {children}
    </StyledDiv>
  );
};
