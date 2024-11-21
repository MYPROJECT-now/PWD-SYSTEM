  import { serial,varchar, pgTable, integer, date } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm"

  export const pwdTable = pgTable("pwdTable", {
    id: serial("id").primaryKey(),
    pwdNo: varchar('pwd_no', { length: 50 }).notNull().unique(),
    surname: varchar('surname', { length: 100 }).notNull(),
    middleName: varchar('middle_name', { length: 100 }).notNull(),
    name: varchar('name', { length: 100 }).notNull(),
    suffix: varchar('suffix', { length: 10 }),  // Optional
    Purok: varchar('purok', { length: 10 }).notNull(),
    age: integer('age').notNull(),
    contactNo: varchar('contact', { length: 11 }).notNull(),
    issueDate: date('issue_date').notNull(),
    expiryDate: date('expiry_date').notNull(),
    typeOfDisability: varchar('type_of_disability', { length: 50 }).notNull(),
  });

  export const clerkUserTable = pgTable("clerk_user", {
    id: serial("id").primaryKey(),
    pwdNo: varchar("pwd_no", { length: 50 }).notNull().unique(), // Reference to pwdNo
    clerkId: varchar("clerk_id", { length: 100 }).notNull(), // Clerk's generated user ID
  });


  export const clerkUserRelations = relations(clerkUserTable, ({ one }) => ({
    pwd: one(pwdTable, {
      fields: [clerkUserTable.pwdNo],
      references: [pwdTable.pwdNo],
    }),
  }));