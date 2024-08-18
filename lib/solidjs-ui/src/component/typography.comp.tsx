import { JSX} from "solid-js";

import { getColor } from "../theme";
import { DefaultTheme, styled, CSSAttribute } from "solid-styled-components";

export { StyledTypography as Typography };

const Typography = (
  props: JSX.IntrinsicElements["p"] & {
    color?: keyof DefaultTheme["colors"];
    active?: boolean;
    align: CSSAttribute['textAlign']
  }
) => {
  return (
    <p
      {...props}
      classList={{
        active: props.active,
      }}
    />
  );
};

const StyledTypography = styled(Typography)`
  text-align: ${({ align }) => getColor(align)};
  color: ${({ color }) => getColor(color)};
`;
