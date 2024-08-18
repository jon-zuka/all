import { JSX } from "solid-js";
import { css, useTheme } from "solid-styled-components";

const Container = ({
  children,
  gap = "inherit",
  ...props
}: JSX.HTMLAttributes<HTMLDivElement> & {
  gap?: string;
}) => {
  return (
    <div
      {...props}
      class={css`
        display: grid;
        gap: ${gap};
        grid-template-columns: repeat(12, 1fr);
      `}
    >
      {children}
    </div>
  );
};

const Cell = (
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    span?: string | number[];
  }
) => {
  const span = () => props.span ?? [12, 6];
  const children = () => props.children;
  const classList = () => ({ ...props.classList });
  const theme = useTheme();
  const mobile = span()[0]?.toString();
  const tablet = span()[1]?.toString() ?? mobile;
  const desktop = span()[2]?.toString() ?? tablet;
  const wide = span()[3]?.toString() ?? desktop;

  const CellCss = css`
    grid-column: span ${mobile};

    @media (min-width: ${theme.breakpoints.mobile}) {
      grid-column: span ${tablet};
    }
    @media (min-width: ${theme.breakpoints.tablet}) {
      grid-column: span ${desktop};
    }
    @media (min-width: ${theme.breakpoints.desktop}) {
      grid-column: span ${wide};
    }
  `;

  return (
    <div {...props} classList={{ ...classList(), [CellCss]: true }}>
      {children()}
    </div>
  );
};

export const Grid = {
  Container,
  Cell,
};

// @media (min-width: ${theme.breakpoints.mobile}) {
//   grid-column: span ${mobile};
// }
// @media (min-width: ${theme.breakpoints.tablet}) {
//   grid-column: span ${tablet};
// }
// @media (min-width: ${theme.breakpoints.desktop}) {
//   grid-column: span ${desktop};
// }
