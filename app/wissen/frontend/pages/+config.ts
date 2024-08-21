import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../layouts/HeadDefault.jsx";

// Default config (can be overridden by pages)
export default {
  Head,
  // Layout,
  // <title>
  ssr: false,
  title: "Wissen",
  extends: vikeSolid,
} satisfies Config;
