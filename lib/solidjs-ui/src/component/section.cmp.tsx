import { type JSX } from "solid-js";
import { styled } from "solid-styled-components";

const StyledSection = styled("section")`
  width: 100%;
  text-align: center;
  & > div {
    padding: 2rem 2rem;
    & > .title {
      color: ${(props) => props.theme?.colors.primary};
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }
`;

export const Section = ({ children }: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StyledSection>
      <div>{children}</div>
    </StyledSection>
  );
};
