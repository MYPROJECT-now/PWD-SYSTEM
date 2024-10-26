// // queries.ts
// import { db } from './drizzle';
// import { pwdTable } from './schema';
// import { eq, sql, and } from 'drizzle-orm';
// import { revalidatePath } from "next/cache";


// export async function getTotalPwdsBySex(sex: string): Promise<number> {
//   const totalPwds = await db
//     .select({
//       total: sql`COUNT(*)`.as('total'),
//     })
//     .from(pwdTable)
//     .where(eq(pwdTable.sex, sex));
//     revalidatePath(`/pwds/sex/${sex}`); // Revalidate the page for the specific sex
//   return Number(totalPwds[0].total);
// }

// export async function getTotalPwd() {
//   const totalPwds = await db
//     .select({
//       total: sql`COUNT(*)`.as('total'),
//     })
//     .from(pwdTable);
//     revalidatePath("/");
//   return Number(totalPwds[0].total);
// }

  

// // /db/queries.ts

// export const getAllPwds = async () => {
//   const pwds = await db
//     .select()
//     .from(pwdTable); // Replace with your actual PWDs table name
//     revalidatePath("/");
//   return pwds;
  
// };

