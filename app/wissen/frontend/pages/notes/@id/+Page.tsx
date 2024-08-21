import { styled } from "@jon-zuka/solidjs-ui";
import { Editor } from "../components/Editor/Editor";
import { usePageContext } from 'vike-solid/usePageContext'


const StyledDiv = styled("div")`
  width: 100%;
  margin: 5rem 0;
`;

export default function Page() {
  const pageContext = usePageContext()
  return (
    <StyledDiv>
      <Editor innerText={pageContext.routeParams.id!}/>
    </StyledDiv>
  );
}
