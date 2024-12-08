"use server";
import { asc, eq, ilike, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { notificationTable, pwdTable, clerkUserTable, AchievementsTable } from "@/db/schema";


import { auth, clerkClient } from "@clerk/nextjs/server";

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


// export const deleteTodo = async (id: number) => {
//   await db.delete(pwdTable).where(eq(pwdTable.id, id));
//   revalidatePath("/admin/masterlist");
// };

// export const deleteTodo = async (id: number) => {
//   // Fetch the PWD record to get the pwdNo for relation
//   const pwdRecord = await db
//     .select({ pwdNo: pwdTable.pwdNo })
//     .from(pwdTable)
//     .where(eq(pwdTable.id, id))
//     .limit(1);

//   if (pwdRecord.length > 0) {
//     const pwdNo = pwdRecord[0].pwdNo;

//     // Delete the related record in clerkUserTable
//     await db.delete(clerkUserTable).where(eq(clerkUserTable.pwdNo, pwdNo));
//   }

//   // Delete the PWD record from pwdTable
//   await db.delete(pwdTable).where(eq(pwdTable.id, id));

//   // Revalidate the page
//   revalidatePath("/admin/masterlist");
// };

export const deleteTodo = async (id: number) => {
  // Fetch the PWD record along with the related clerkId by joining pwdTable and clerkUserTable
  const pwdRecord = await db
    .select({ pwdNo: pwdTable.pwdNo, clerkId: clerkUserTable.clerkId })
    .from(pwdTable)
    .innerJoin(clerkUserTable, eq(pwdTable.pwdNo, clerkUserTable.pwdNo))  // Join the tables
    .where(eq(pwdTable.id, id))
    .limit(1);

  if (pwdRecord.length > 0) {
    const pwdNo = pwdRecord[0].pwdNo;
    const clerkId = pwdRecord[0].clerkId;

    // Delete the related record in clerkUserTable
    await db.delete(clerkUserTable).where(eq(clerkUserTable.pwdNo, pwdNo));

    // Now call Clerk's API to delete the user
    try {
      const client = await clerkClient();
      await client.users.deleteUser(clerkId);  // Use the dynamic clerkId
      console.log('User deleted from Clerk');
    } catch (error) {
      console.log('Error deleting user from Clerk:', error);
    }
  }

  // Delete the PWD record from pwdTable
  await db.delete(pwdTable).where(eq(pwdTable.id, id));

  // Revalidate the page
  revalidatePath('/admin/masterlist');
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
// export const addNotif = async ( title: string, message: string, imageSrc: string) => {
//   try {
//   await db.insert(notificationTable).values({
//     title: title,
//     message: message,
//     imageSrc: imageSrc
//   });
//   return { success: true };
//   } catch (error) {
//     console.error("Error adding notification:", error);
//   }
// };

export const addNotif = async (title: string, message: string, imageSrc?: string | null) => {
  try {
    await db.insert(notificationTable).values({
      title: title,
      message: message,
      imageSrc: imageSrc || null, // Default to null if undefined
    });
    return { success: true };
  } catch (error) {
    console.error("Error adding notification:", error);
    return { success: false };
  }
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


// Function to fetch user data based on the current Clerk user
export const getUserData = async () => {
  // Step 1: Get current Clerk user ID
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  // Step 2: Find the corresponding `pwdNo` in the `clerkUserTable` using Clerk's `userId`
  const clerkUser = await db
    .select()
    .from(clerkUserTable)
    .where(eq(clerkUserTable.clerkId, userId))
    .limit(1);

  if (clerkUser.length === 0) {
    throw new Error("No PWD data found for this user");
  }

  const pwdNo = clerkUser[0].pwdNo;

  // Step 3: Fetch the PWD data from `pwdTable` using `pwdNo`
  const userData = await db
    .select()
    .from(pwdTable)
    .where(eq(pwdTable.pwdNo, pwdNo))
    .limit(1);

  if (userData.length === 0) {
    throw new Error("No PWD data found for this pwdNo");
  }

  return userData[0]; // Return the first matching result
};


//adding achievements
export const addAchievement = async (title: string, description: string, imageSrc: string) => {
  try {
  await db.insert(AchievementsTable).values({
    title: title,
    description: description,
    imageSrc: imageSrc
  });
  return { success: true };
  } catch (error) {
    console.error("Error adding achievement:", error);
  }
}

//getting achievements
export const getAchievements = async () => {
  const achievements = await db.select().from(AchievementsTable);
  return achievements;
}

// deleting an achievement
// Function to delete an achievement by id
export const deleteAchievement = async (id: number) => {
  try {
    // Delete the achievement from the database using the provided id
    await db.delete(AchievementsTable).where(eq(AchievementsTable.id, id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting achievement:", error);
    return { success: false, error: "Failed to delete achievement" };
  }
};
