"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { pwdTable } from "@/db/schema";

export const getData = async () => {
  const data = await db.select().from(pwdTable);
  revalidatePath("/admin/masterlist");
  return data;
  
};

export const addTodo = async (id: number, pwdNo: string, surname: string, name: string) => {
  await db.insert(pwdTable).values({
    id,
    pwdNo: pwdNo,
    surname: surname,
    name: name,
  });
  revalidatePath("/admin/masterlist");
};

export const deleteTodo = async (id: number) => {
  await db.delete(pwdTable).where(eq(pwdTable.id, id));

  revalidatePath("/");
};

export const toggleTodo = async (id: number) => {
  await db
    .update(pwdTable)
    .set({
      done: not(pwdTable.done),
    })
    .where(eq(pwdTable.id, id));

  revalidatePath("/");
};

export const editTodo = async (id: number, pwdNo: string, surname: string, name: string) => {
  await db
    .update(pwdTable)
    .set({
      pwdNo: pwdNo,
      surname: surname,
      name: name,
    })
    .where(eq(pwdTable.id, id));

  revalidatePath("/");
};