import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const FillDatabase = async () => {
    await db.insert(schema.pwdTable).values([
        {
            pwdNo: "001",
            surname: "Divinagracia",
            name: "Ian Red",
            middleName: "Estrada",
            Purok: "Purok 1",
            age: 20,
            issueDate: "2022-10-10",
            expiryDate: "2022-10-10",
            typeOfDisability: "None" 
        },
        {
            pwdNo: "002",
            surname: "Curatchia",
            name: "Darius",
            middleName: "Estrada",
            Purok: "Purok 1",
            age: 20,
            issueDate: "2022-10-10",
            expiryDate: "2022-10-10",
            typeOfDisability: "None", 
        },

        {
            pwdNo: "003",
            surname: "Recierdo",
            name: "angela",
             middleName: "Estrada",
            Purok: "Purok 3",
            age: 20,
            issueDate: "2022-10-10",
            expiryDate: "2022-10-10",
            typeOfDisability: "None",  
        },

        {
            pwdNo: "004",
            surname: "Tarsona",
            name: "Tristan",
             middleName: "Pilliarka",
            Purok: "Purok 6",
            age: 20,
            issueDate: "2022-10-10",
            expiryDate: "2022-10-10",
            typeOfDisability: "Blind",  
        },
        
    ]);
};

const main = async () => {
    try {
        console.log("Seeding the database");

        // Clear the existing data in the table
        await db.delete(schema.pwdTable);

        // Call the FillDatabase function to insert data
        await FillDatabase();

        console.log("Seeding finished");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
};

main();
