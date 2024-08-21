import {
  ThemeProvider,
  theme as defaultTheme,
  Scaffold,
  Modal,
  type ThemeColor,
} from "@jon-zuka/solidjs-ui";

import { type JSX } from "solid-js";
import "./style.css";
import { AppNav } from "./components/AppNav";

export default function Page(props: JSX.IntrinsicElements["div"]) {
  return (
    <ThemeProvider
      theme={{
        ...defaultTheme,
        colors: {
          ...defaultTheme.colors,
          background: "#121010",
          primary: "",
        },
      }}
    >
      <Scaffold>
        <AppNav
          color={"background" as ThemeColor}
        />
        {props.children}
        <Modal />
      </Scaffold>
    </ThemeProvider>
  );
}
