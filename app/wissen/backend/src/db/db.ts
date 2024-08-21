export { db };

import { useConfig } from "../config"
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const { databaseUrl } = useConfig();
const sql = neon(databaseUrl);
const db = drizzle(sql, {logger: true});
