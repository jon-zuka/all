import {
  pgTable,
  timestamp,
  uuid,
  varchar,
  boolean
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  isAdmin: boolean('is_admin').default(false).notNull(),
  firstName: varchar("first_name", { length: 100 }).notNull().unique(),
  lastName: varchar("last_name", { length: 100 }).notNull().unique(),
  username: varchar("name", { length: 100 }).notNull().unique(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  password: varchar("password", { length: 100 }).notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
