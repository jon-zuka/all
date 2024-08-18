import type { Config } from "vike/types";
import Head from "../layouts/HeadDefault.jsx";
import Layout from "../layouts/LayoutDefault.jsx";
declare const _default: {
    Layout: typeof Layout;
    Head: typeof Head;
    ssr: false;
    title: string;
    extends: {
        name: string;
        require: {
            vike: string;
        };
        onRenderHtml: "import:vike-solid/renderer/onRenderHtml:onRenderHtml";
        onRenderClient: "import:vike-solid/renderer/onRenderClient:onRenderClient";
        clientRouting: true;
        hydrationCanBeAborted: true;
        meta: {
            Head: {
                env: {
                    server: true;
                };
            };
            Layout: {
                env: {
                    server: true;
                    client: true;
                };
                cumulative: true;
            };
            title: {
                env: {
                    server: true;
                    client: true;
                };
            };
            favicon: {
                env: {
                    server: true;
                    client: true;
                };
            };
            lang: {
                env: {
                    server: true;
                    client: true;
                };
            };
            ssr: {
                env: {
                    config: true;
                };
                effect: ({ configDefinedAt, configValue }: {
                    configValue: unknown;
                    configDefinedAt: `Config ${string} defined at ${string}`;
                }) => Config;
            };
            stream: {
                env: {
                    server: true;
                };
            };
            name: {
                env: {
                    config: true;
                };
            };
            require: {
                env: {
                    config: true;
                };
            };
        };
    };
};
export default _default;
