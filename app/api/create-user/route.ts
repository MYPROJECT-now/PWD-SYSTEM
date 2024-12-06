import { db } from '@/db/drizzle';
import { clerkUserTable, pwdTable } from '@/db/schema';
import { clerkClient } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Random password generator
function generateRandomPassword(length = 12) {
  const charset = "ABCDEFGHJKMNOPQRSTUVWXYZabcdefghjkmnopqrstuvwxyz0123456789@#$&*";
  return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
}

// Email sending function
async function sendEmail(to: string, password: string, pwdNo: string) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email provider
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Your Account has been created',
    text: `Your account has been created successfully.
          Your username would be pwd-${pwdNo},
          Your temporary password is: ${password}
          Please change your password as soon as possible.`,

          
  };

  return transporter.sendMail(mailOptions);
}

export async function POST(request: Request) {
  try {
    const { pwdNo, email } = await request.json();

    if (!pwdNo || !email) {
      return NextResponse.json(
        { error: 'PWD No. and email are required' },
        { status: 400 }
      );
    }

   

       // Check if pwdNo exists in pwdTable
       const pwdNoExistsInPwdTable = await db.select().from(pwdTable).where(eq(pwdTable.pwdNo, pwdNo));
       if (!pwdNoExistsInPwdTable.length) {
         return NextResponse.json(
           { error: 'PWD number does not exist in the database' },
           { status: 400 }
         );
       }

  
    

         // Check if pwdNo exists in clerkUserTable
    const pwdNoExistsInClerkUserTable = await db.select().from(clerkUserTable).where(eq(clerkUserTable.pwdNo, pwdNo));
    if (pwdNoExistsInClerkUserTable.length) {
      return NextResponse.json(
        { error: 'PWD user already has an account' },
        { status: 400 }
      );
    }

   // Check if email exists in Clerk
   const emailExistsInClerk = await clerkClient.users.getUserList({ emailAddress: email });
   if (emailExistsInClerk.data.length > 0){
     return NextResponse.json(
       { error: 'Email is already in use' },
       { status: 400 }
     );
   }


    // Fetch the user's first and last name from the pwdTable
    const userFromPwdTable = await db
      .select()
      .from(pwdTable)
      .where(eq(pwdTable.pwdNo, pwdNo))
      .limit(1);


    const { surname, name } = userFromPwdTable[0];



    // Generate a random password
    const randomPassword = generateRandomPassword();

    // Create the user in Clerk with the random password
    const user = await clerkClient.users.createUser({
      username: `pwd-${pwdNo}`,
      password: randomPassword,
      emailAddress: [email],
      firstName: name, // Set the first name directly
      lastName: surname, // Set the last name directly
      publicMetadata: { 
        pwdNo, // Store the PWD No. in public metadata
        role: 'user',
        needsPasswordChange: true }, // sets the user as needing a password change
    });

      // Insert into the linking table to link Clerk user to pwdNo
      await db.insert(clerkUserTable).values({
        pwdNo,  // Link the PWD number to Clerk user
        clerkId: user.id,  // Store Clerk user ID
      });
  
    

    // Send the email with the password
    await sendEmail(email, randomPassword, pwdNo);

    return NextResponse.json({ message: 'User created, password sent to email', user });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error creating user or sending email' },
      { status: 500 }
    );
  }
}
