import { styled } from "@repo/solidjs-ui";
import { TomatoScore, TomatoTimer } from "../../components";

const StyledDiv = styled('div')`
  max-width: 30rem; 
  margin: 0 auto;
`

export default function Page() {
  return (
    <StyledDiv>
      <TomatoTimer />
      <TomatoScore />
    </StyledDiv>
  );
}
