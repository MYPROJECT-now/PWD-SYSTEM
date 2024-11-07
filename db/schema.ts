import { serial,varchar, pgTable, integer, date } from "drizzle-orm/pg-core";

export const pwdTable = pgTable("pwdTable", {
  id: serial("id").primaryKey(),
  pwdNo: varchar('pwd_no', { length: 50 }).notNull().unique(),
  surname: varchar('surname', { length: 100 }).notNull(),
  middleName: varchar('middle_name', { length: 100 }).notNull(),
  name: varchar('name', { length: 100 }).notNull(),
  suffix: varchar('suffix', { length: 10 }),  // Optional
  Purok: varchar('purok', { length: 10 }).notNull(),
  sex: varchar('sex', { length: 10 }).notNull(),
  typeOfDisability: varchar('type_of_disability', { length: 50 }).notNull(),
});

// import { pgTable, serial, varchar, integer, date, text, boolean } from 'drizzle-orm/pg-core';
// // Define the PWD table schema
// export const pwdTable = pgTable('pwds', {
//   id: serial('id').primaryKey(),  // Auto-incrementing primary key
//   pwdNo: varchar('pwd_no', { length: 50 }).notNull().unique(), // Unique PWD ID
//   surname: varchar('surname', { length: 100 }).notNull(),
//   name: varchar('name', { length: 100 }).notNull(),
  // Purok: varchar('purok', { length: 10 }).notNull(),
  // sex: varchar('sex', { length: 10 }).notNull(),
//   done: boolean("done").default(false).notNull(),



  // middleName: varchar('middle_name', { length: 100 }),
  // suffix: varchar('suffix', { length: 10 }),  // Optional
  // dateOfBirth: date('date_of_birth').notNull(),
  // age: integer('age').notNull(),
  // civilStatus: varchar('civil_status', { length: 50 }).notNull(),
  // typeOfDisability: text('type_of_disability').notNull(),
  // residentAddress: text('resident_address').notNull(),  // Auto data for Brgy. Parian, etc.
  // contactNo: varchar('contact_no', { length: 15 }).notNull(),
  // educationalAttainment: varchar('educational_attainment', { length: 50 }).notNull(),
// });
