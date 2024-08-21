import {
  pgTable,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { usersTable } from "../users/schema";

export const sessionsTable = pgTable("sessions_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => usersTable.id)
    .notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});