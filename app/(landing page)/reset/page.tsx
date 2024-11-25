

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { handlePasswordUpdate } from "./changePassword";
import { useUser } from "@clerk/clerk-react"; // Assuming you're using Clerk for authentication


const ChangePassword = () => {
    const { user } = useUser(); // Get the user from the Clerk hook
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handlePasswordChange = async () => {
        if (!user) {
            setError("User not found");
            return;
        }

        const result = await handlePasswordUpdate(user, currentPassword, newPassword); // Pass user to the function

        if (result.error) {
            setError(result.error);
        } else {
            router.push("/user");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-xl font-bold">Change Your Password</h1>
            <input
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-4 p-2 border rounded"
            />
            <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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



