import { db } from '@/db/drizzle';
import { clerkUserTable } from '@/db/schema';
import { clerkClient } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import nodemailer from 'nodemailer';

// Generate a random password
function generateRandomPassword(length = 12) {
    const charset = "ABCDEFGHJKMNOPQRSTUVWXYZabcdefghjkmnopqrstuvwxyz0123456789@#$&*";
    return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
}

// Send email function
async function sendEmail(to: string, newPassword: string) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Your Password Has Been Reset',
        text: `
            Hello,

            Your password has been reset. Please use the following temporary password to log in:
            
            Temporary Password: ${newPassword}

            Please update your password in the Account Management after logging in.

            Best regards,
            Barangay PWD Office
        `,
    };

    return transporter.sendMail(mailOptions);
}

export async function POST(request: Request) {
    try {
        const { pwdNo } = await request.json();

        if (!pwdNo) {
            return new Response(JSON.stringify({ error: "PWD No. is required." }), { status: 400 });
        }

        // Fetch user from the database
        const userRecord = await db.select().from(clerkUserTable).where(eq(clerkUserTable.pwdNo, pwdNo)).limit(1);
        if (!userRecord.length) {
            return new Response(JSON.stringify({ error: "PWD No. not found." }), { status: 404 });
        }

        const userId = userRecord[0].clerkId;

        // Generate a random password
        const newPassword = generateRandomPassword();

        // Update user's metadata and email them
        await clerkClient.users.updateUser(userId, {
            password: newPassword,
        });

        await sendEmail(userRecord[0].email, newPassword);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "An unexpected error occurred." }), { status: 500 });
    }
}
