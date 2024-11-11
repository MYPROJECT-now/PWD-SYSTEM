"use server";
import { asc, eq, ilike, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { pwdTable } from "@/db/schema";


export const getData = () => {

    const data = db.select().from(pwdTable).orderBy(asc(pwdTable.surname));
    return data;
  };


export const addTodo = async (pwdNo: string, surname: string, name: string,  middleName: string, Purok: string,
  age: number, contactNo: string, issueDate: string, expiryDate: string, typeOfDisability: string) => {
  try {
    await db.insert(pwdTable).values({
      pwdNo: pwdNo,
      surname: surname,
      name: name,
      middleName: middleName,
      Purok: Purok,
      age: age,
      contactNo: contactNo,
      issueDate: issueDate,
      expiryDate: expiryDate,
      typeOfDisability: typeOfDisability,
    });
    revalidatePath("/admin/masterlist");
    revalidatePath("admin/masterlist/editPage");
    revalidatePath("admin/dashboard_admin");
    return { success: true };
  } catch (error) {
    if (error instanceof Error && (error as any).code === '23505') {
      return Promise.reject({ message: `PwdNo ${pwdNo} already exists in the database.` });
    } else {
      console.error(error);
      throw new Error('An error occurred while adding the todo item.');
    }
  }
};




export const deleteTodo = async (id: number) => {
  await db.delete(pwdTable).where(eq(pwdTable.id, id));
  revalidatePath("/admin/masterlist");
};



export const editTodo = async (id: number, pwdNo: string, surname: string, name: string, middlename: string, 
  purok: string, age: number, contactNo: string, issueDate: string, expiryDate: string, typeOfDisability: string) => {
  await db
    .update(pwdTable)
    .set({
      pwdNo: pwdNo,
      surname: surname,
      name: name,
      middleName: middlename,
      Purok: purok,
      age: age,
      contactNo: contactNo,
      issueDate: issueDate,
      expiryDate: expiryDate,
      typeOfDisability: typeOfDisability,
    })
    .where(eq(pwdTable.id, id));

  revalidatePath("/");
};



export async function getTotalPwd() {
  const totalPwds = await db
    .select({
      total: sql`COUNT(*)`.as('total'),
    })
    .from(pwdTable);
    revalidatePath("/admin/masterlist");
    revalidatePath("admin/masterlist/editPage");
    revalidatePath("admin/dashboard_admin");
  return Number(totalPwds[0].total);
}

export async function getAgeGroupDistribution() {
  const ageGroups = await db
    .select({
      children: sql`COUNT(*) FILTER (WHERE age BETWEEN 0 AND 12)`.as("children"),
      teens: sql`COUNT(*) FILTER (WHERE age BETWEEN 13 AND 19)`.as("teens"),
      adults: sql`COUNT(*) FILTER (WHERE age BETWEEN 20 AND 59)`.as("adults"),
      elderly: sql`COUNT(*) FILTER (WHERE age BETWEEN 60 AND 100)`.as("elderly"),
    })
    .from(pwdTable);

  return ageGroups[0];
}

// export const addTodo = async ( pwdNo: string, surname: string, name: string) => {
//   await db.insert(pwdTable).values({
//     pwdNo: pwdNo,
//     surname: surname,
//     name: name,
//   });
//   revalidatePath("/admin/masterlist");
//   revalidatePath("admin/masterlist/editPage");
// };


// export const addTodo = async (pwdNo: string, surname: string, name: string) => {
//   try {
//     await db.insert(pwdTable).values({
//       pwdNo: pwdNo,
//       surname: surname,
//       name: name,
//     });
//     revalidatePath("/admin/masterlist");
//     revalidatePath("admin/masterlist/editPage");
//     return { success: true };
//   } catch (error) {
//     const failedPwdNo = pwdNo; // capture the value of pwdNo
//     if (error instanceof Error && (error as any).code === '23505') {// 23505 is the PostgreSQL error code for unique constraint violation
//       return { success: false, message: `PwdNo ${failedPwdNo} already exists in the database.` };
//     } else {
//       console.error(error);
//       return { success: false, message: 'An error occurred while adding the todo item.' };
//     }
//   }
// };

// export const toggleTodo = async (id: number) => {
//   await db
//     .update(pwdTable)
//     .set({
//       done: not(pwdTable.done),
//     })
//     .where(eq(pwdTable.id, id));

//   revalidatePath("/");
// };


// export const addTodo = async (pwdNo: string, surname: string, name: string) => {
//     await db.insert(pwdTable).values({
//       pwdNo: pwdNo,
//       surname: surname,
//       name: name,
//     });
// };

// // todoAction.ts
// export const getData = (filter: string) => {
//   if (filter) {
//     const data = db.select().from(pwdTable).where(eq(pwdTable.Purok, filter));;
//     return data;
//   } else {
//     const data = db.select().from(pwdTable);
//     return data;
//   }
// };
