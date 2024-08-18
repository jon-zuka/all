import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../layouts/HeadDefault.jsx";
import Layout from "../layouts/LayoutDefault.jsx";

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,

  // <title>
  ssr: false,
  title: "Zychron",
  extends: vikeSolid,
} satisfies Config;
