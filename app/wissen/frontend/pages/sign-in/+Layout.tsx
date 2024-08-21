export { Layout };

import { BaseLayout } from "@/layouts/BaseLayout";
import { type JSX, children } from "solid-js";

function Layout(props: JSX.IntrinsicElements["div"]) {
  return <BaseLayout>{props.children}</BaseLayout>;
}
