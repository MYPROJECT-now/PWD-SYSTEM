import { clerkClient } from '@clerk/nextjs/server';
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
        const { username } = await request.json();

        if (!username) {
            return new Response(JSON.stringify({ error: "Username is required." }), { status: 400 });
        }

        // Fetch the user by username using Clerk API
        const response = await clerkClient.users.getUserList({ username: [username] });
        const users = response.data;
        if (users.length === 0) {
            return new Response(JSON.stringify({ error: "Username not found." }), { status: 404 });
        }

        const user = users[0];

        // Generate a random password
        const newPassword = generateRandomPassword();

        // Update the user's password metadata
        await clerkClient.users.updateUser(user.id, {
            password: newPassword, // Clerk may not support direct password update.
        });

        // Send the temporary password to the user's email
        await sendEmail(user.emailAddresses[0]?.emailAddress, newPassword);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "An unexpected error occurred." }), { status: 500 });
    }
}
