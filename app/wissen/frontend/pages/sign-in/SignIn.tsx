export { SignIn };

import { styled, Typography } from "@jon-zuka/solidjs-ui";
import { PasswordSignIn } from "./PasswordSignIn";

const StyledDiv = styled("div")`
text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    max-width: 20rem;
    & > div {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
`;

function SignIn() {
  return (
    <StyledDiv>
        <Typography
          style={{
            "font-size": "1.4rem",
          }}
        >
          Sign In to Wissen
        </Typography>
        {/* <div>
          <div>GitHub</div>
          <div>Google</div>
        </div> */}
        {/* <div>or</div> */}
        <PasswordSignIn />
    </StyledDiv>
  );
}
