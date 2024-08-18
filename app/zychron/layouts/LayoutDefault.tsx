import {
  ThemeProvider,
  theme as defaultTheme,
  Scaffold,
  Modal,
} from "@repo/solidjs-ui";

import { type JSX } from "solid-js";
import "./style.css"

export default function Page(props: JSX.IntrinsicElements["div"]) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Scaffold>
        {props.children}
        <Modal />
      </Scaffold>
    </ThemeProvider>
  );
}

// {/* <Scaffold>
//   <AppNavBasic
//     logo={
//       <div
//         style={{
//           "font-size": "2rem",
//         }}
//       >
//         🍅
//       </div>
//     }
//     menu={
//       <>
//         <Link href="/">Focus</Link>

//       </>
//     }
//     background="primary"
//     alpha={0.9}
//   />
//   <section>{props.children}</section>
// </Scaffold>
// <Modal children={children()} open={open()} /> */}
