export { BaseLayout };

import {
  ThemeProvider,
  theme as defaultTheme,
  Scaffold,
  Modal,
} from "@jon-zuka/solidjs-ui";

import { type JSX } from "solid-js";
import "./style.css";

function BaseLayout(props: JSX.IntrinsicElements["div"]) {
  return (
    // TODO: Implement auth guard
    <ThemeProvider
      theme={{
        ...defaultTheme,
        colors: {
          ...defaultTheme.colors,
          background: "#121010",
          primary: "#68ff5d",
        },
      }}
    >
      <Scaffold>
        {props.children}
        <Modal />
      </Scaffold>
    </ThemeProvider>
  );
}
