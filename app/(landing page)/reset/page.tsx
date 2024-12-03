

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { handlePasswordUpdate } from "./changePassword";
import { useUser } from "@clerk/clerk-react"; // Assuming you're using Clerk for authentication
import { Button } from "@/components/ui/button";


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
            router.push("/user/user_dashboard");
        }
    };

    return (
        <div className="h-[625px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-gray-500 h-[300px] w-[500px] rounded-lg ">
            
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
            <Button
                onClick={handlePasswordChange}
                variant="signin"
                size="lg"
                className="mt-5"
            >
                Update Password
            </Button>
        </div>
        </div>
    );
};

export default ChangePassword;



