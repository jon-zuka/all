import {
  css,
  useTheme,
} from "solid-styled-components";
import { rgba, readableColor } from "polished";
import { type Theme } from "../../theme";
import { JSX } from "solid-js";

type StypeProps = {
  background?: keyof Theme["colors"];
  alpha?: number;
};

export interface AppNavBasicProps
  extends JSX.HTMLAttributes<HTMLDivElement>,
    StypeProps {
  logo?: JSX.Element;
  menu?: JSX.Element;
  action?: JSX.Element;
}

export const AppNavBasic = ({
  logo,
  background = 'background',
  menu,
  alpha = 1,
  action
}: AppNavBasicProps) => {
  const theme: Theme = useTheme();
  const computedBackground = rgba(
    theme.colors?.[background],
    alpha
  );

  return (
    <div
      class={css`
        display: flex;
        align-items: center;
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: ${computedBackground};
        color: ${rgba(readableColor(computedBackground), 0.8)};
        padding: 0.2rem .8rem;
        .menu {
          margin: 0 auto;
          display: flex;
          gap: 1rem;
          .disabled {
            color: ${rgba(readableColor(computedBackground), 0.5)};
          }
          .active {
            color: ${rgba(readableColor(computedBackground), 1)};
          }
        }
      `}
    >
      {logo ?? <div />}
      <div class="menu">{menu}</div>
      <div class="action">{action}</div>
    </div>
  );
};
