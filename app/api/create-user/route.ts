// import { clerkClient } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   try {
//     const { pwdNo, password } = await request.json();

//     if (!pwdNo || !password) {
//       return NextResponse.json(
//         { error: 'PWD No. and password are required' },
//         { status: 400 }
//       );
//     }

//     // Create the user in Clerk using the provided password
//     const user = await clerkClient.users.createUser({
//       username: pwdNo,
//       password: password,
//     });

//     return NextResponse.json({ message: 'User created', user });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: 'Error creating user' },
//       { status: 500 }
//     );
//   }
// }



import { db } from '@/db/drizzle';
import { clerkUserTable } from '@/db/schema';
import { clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Random password generator
function generateRandomPassword(length = 12) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
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

    // Generate a random password
    const randomPassword = generateRandomPassword();

    // Create the user in Clerk with the random password
    const user = await clerkClient.users.createUser({
      username: `pwd-${pwdNo}`,
      password: randomPassword,
      emailAddress: [email],
      publicMetadata: { pwdNo }, // Store the PWD No. in public metadata
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
