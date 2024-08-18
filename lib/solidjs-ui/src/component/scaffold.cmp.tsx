export { StyledScaffold as Scaffold };

import { type JSX } from "solid-js";

import { styled } from "solid-styled-components";
const Scaffold = (props: JSX.IntrinsicElements["div"]) => {
  return <div {...props} />;
};

const StyledScaffold = styled(Scaffold)`
  position: absolute;
  font-family: "Poppins";
  font-size: 0.9rem;
  inset: 0;
  overflow-y: scroll;
  background-color: ${(props) => props.theme?.colors.background!};
  color: ${(props) => props.theme?.colors.text!};
`;
