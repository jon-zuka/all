import type { Preview } from "storybook-solidjs";
import { Scaffold, theme } from "../src/main";
import {JSX} from 'solid-js'
import { DecoratorFunction } from "storybook/internal/types";
import { ThemeProvider } from "solid-styled-components";


// export const decorators = [
//   (Story) => {
//     const solidRoot = document.createElement("div");

//     render(Story, solidRoot);

//     return solidRoot;
//   },
// ];

const withTheme: DecoratorFunction = (story) => {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        colors: {
          background: "#03050d",
          primary: "#6c1c1c",
          text: "#c3c0c0",
          danger: "#c3c0c0",
          info: "#c3c0c0",
          success: "#c3c0c0",
          warn: "#c3c0c0",
        },
      }}
    >
      <Scaffold>
        <>{story}</>
      </Scaffold>
    </ThemeProvider>
  );
};

export const decorators = [withTheme];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
