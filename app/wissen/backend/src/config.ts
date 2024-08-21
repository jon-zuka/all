import { Static, Type } from "@sinclair/typebox";
import { AssertError, Value } from "@sinclair/typebox/value";

const configSchema = Type.Object({
  appName: Type.String({
    minLength: 1,
  }),
  databaseUrl: Type.String(),
  port: Type.String(),
});
export type Config = Static<typeof configSchema>;

const config = {
  appName: process.env.WISSEN_BACKEND_APP_NAME,
  databaseUrl: process.env.WISSEN_BACKEND_DATABASE_URL,
  port: process.env.WISSEN_BACKEND_PORT,
} as Config;

try {
  Value.Assert(configSchema, config);
} catch (e) {
  if (e instanceof AssertError) {
    console.error(JSON.stringify(Array.from(e.Errors()), null, 2));
    process.exit(1);
  }
  console.error(e);
}

export const useConfig = () => {
  return config;
};
