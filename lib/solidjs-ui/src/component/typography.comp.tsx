import { JSX} from "solid-js";

import { getColor } from "../theme";
import { DefaultTheme, styled, CSSAttribute } from "solid-styled-components";

export { StyledTypography as Typography };

const Typography = (
  props: JSX.IntrinsicElements["p"] & {
    color?: string;
    active?: boolean;
    align?: CSSAttribute['textAlign']
  }
) => {
  return (
    <p
      {...props}
      classList={{
        active: props.active,
      }}
    >{props.children}</p>
  );
};

const StyledTypography = styled(Typography)`
  text-align: ${({ align = 'inherit' }) => align};
  color: ${({ theme, color = 'text'}) => getColor(theme!, color)};
`;
