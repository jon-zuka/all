import { rgba } from "polished";
import { JSX } from "solid-js";
import { styled } from "solid-styled-components";

const StyledDiv = styled("div")`

  width: 100%;
  height: 75%;
  overflow: hidden;
  position: relative;
  & .content {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => rgba(props.theme?.colors.background!, .6)};
    min-width: min-content;
    width: 100%;
    padding: 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    text-align: center;
  }
  & .title {
    font-size: 2.2rem;
    color: ${(props) => props.theme?.colors.primary!};

  }
  & .description {
    font-size: 1.4rem;
    
  }
`;

export const Carousel = ({ children }: JSX.HTMLAttributes<HTMLDivElement>) => {
  return <StyledDiv>{children}</StyledDiv>;
};
