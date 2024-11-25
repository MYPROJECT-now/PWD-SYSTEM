"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { clerkClient, currentUser } from "@clerk/nextjs/server";

const ChangePassword = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handlePasswordChange = async () => {
        const user = await currentUser()

        if (!user) {
            setError("User not found");
            return;
          }

        try {
            // Update the user's password
            await clerkClient.users.updateUserMetadata(user.id, {
                // ...
              });;

            // Update the 'needsPasswordChange' flag in metadata
            await await clerkClient.users.updateUserMetadata(user.id, {
                publicMetadata: {
                  example: 'metadata',
                },
              })

            // Redirect to user dashboard
            router.push("/user");
        } catch (err) {
            setError(`${err} Failed to update password. Please try again.`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-xl font-bold">Change Your Password</h1>
            <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-4 p-2 border rounded"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
                onClick={handlePasswordChange}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
                Update Password
            </button>
        </div>
    );
};

export default ChangePassword;
