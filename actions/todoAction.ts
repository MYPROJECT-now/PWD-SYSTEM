"use server";
import { asc, eq, ilike, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { notificationTable, pwdTable } from "@/db/schema";

//get all data
export const getData = () => {
    const data = db.select().from(pwdTable).orderBy(asc(pwdTable.surname));
    return data;
  };

  // functions for crud
export const addTodo = async (pwdNo: string, surname: string, name: string,  middleName: string, Purok: string,
  age: number, contactNo: string, issueDate: string, expiryDate: string, typeOfDisability: string, status: string) => {
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
      status: status
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
  purok: string, age: number, contactNo: string, issueDate: string, expiryDate: string, typeOfDisability: string, status: string) => {
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
      status: status
    })
    .where(eq(pwdTable.id, id));

  revalidatePath("/");
};


// functions for analytics
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



export async function getDisabilityDistribution() {
  const disabilityGroups = await db
    .select({
      deafHardOfHearing: sql`COUNT(*) FILTER (WHERE type_of_disability = 'Deaf/Hard of Hearing')`.as("deafHardOfHearing"),
      intellectualDisability: sql`COUNT(*) FILTER (WHERE type_of_disability = 'Intellectual Disability')`.as("intellectualDisability"),
      learningDisability: sql`COUNT(*) FILTER (WHERE type_of_disability = 'Learning Disability')`.as("learningDisability"),
      mentalDisability: sql`COUNT(*) FILTER (WHERE type_of_disability = 'Mental Disability')`.as("mentalDisability"),
      physicalDisability: sql`COUNT(*) FILTER (WHERE type_of_disability = 'Physical Disability')`.as("physicalDisability"),
      psychologicalDisability: sql`COUNT(*) FILTER (WHERE type_of_disability = 'Psychological Disability')`.as("psychologicalDisability"),
      speechAndLanguageImpairment: sql`COUNT(*) FILTER (WHERE type_of_disability = 'Speech and Language Impairment')`.as("speechAndLanguageImpairment"),
      visualDisability: sql`COUNT(*) FILTER (WHERE type_of_disability = 'Visual Disability')`.as("visualDisability"),
      cancer: sql`COUNT(*) FILTER (WHERE type_of_disability = 'Cancer')`.as("cancer"),
      rareDisease: sql`COUNT(*) FILTER (WHERE type_of_disability = 'Rare Disease')`.as("rareDisease"),
    })
    .from(pwdTable);

  return disabilityGroups[0];
}


export async function getStatusDistribution() {
  const statusCounts = await db
    .select({
      active: sql`COUNT(*) FILTER (WHERE status = 'Active')`.as("active"),
      inactive: sql`COUNT(*) FILTER (WHERE status = 'Inactive')`.as("inactive"),
      deceased: sql`COUNT(*) FILTER (WHERE status = 'Deceased')`.as("deceased"),
    })
    .from(pwdTable);

  return statusCounts[0];
}


//notification

//adding notification
export const addNotif = async ( title: string, message: string) => {
  await db.insert(notificationTable).values({
    title: title,
    message: message
  });
};

//get pending notif
export const getPendingNotifications = async () => {
  const notifications = await db
    .select()
    .from(notificationTable)
    .where(eq(notificationTable.done, true));
  return notifications;
};

//update notif status
export const updateNotificationStatus = async (id: number) => {
  await db
    .update(notificationTable)
    .set({ done: false })
    .where(eq(notificationTable.id, id));
};

// fetching all notif
export const getNotifications = async () => {
  try {
    const notifications = await db.select()
      .from(notificationTable)
      .where(eq(notificationTable.done,false)); // For example, only get undone notifications


    return notifications;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return [];
  }
};