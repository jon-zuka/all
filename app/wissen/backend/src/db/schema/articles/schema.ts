import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "../users/schema";

// TODO: Add an article title maybe?
export const articlesTable = pgTable("articles_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  authorId: uuid("author_id")
    .references(() => usersTable.id)
    .notNull(),
  content: varchar("content", { length: 10000 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
