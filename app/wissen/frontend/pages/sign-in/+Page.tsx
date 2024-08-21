import { styled, Typography, Image, Input } from "@jon-zuka/solidjs-ui";
import { createSignal, type JSX } from "solid-js";
import { PasswordSignIn } from "./PasswordSignIn";
import { SignIn } from "./SignIn";

const StyledDiv = styled("div")`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  & > .logo {
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-size: 1.6rem;
    letter-spacing: 2px;
    color: ${({theme})=> theme?.colors.primary};
  }
  & > div {
    text-align: center;
    z-index: 10;
    position: relative;
    max-width: ${({ theme }) => theme!.breakpoints.desktop};
    margin: 6rem auto;
  }
  & > img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    transform: scale(0.9);
  }
`;

export default function Page(props: JSX.IntrinsicElements["div"]) {
  return (
    <>
      <StyledDiv>
        <p class='logo'>Wissen</p>
        <img src="cube-spiral.png" />
        <div>
          <SignIn />
        </div>
      </StyledDiv>
    </>
  );
}
