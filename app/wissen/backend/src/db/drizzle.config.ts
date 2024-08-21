import { defineConfig } from "drizzle-kit";
import {useConfig} from '../config'

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: useConfig().databaseUrl,
  },
});
