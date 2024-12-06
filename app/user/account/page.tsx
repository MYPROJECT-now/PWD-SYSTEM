

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { handlePasswordUpdate } from "./changePassword";
import { useUser } from "@clerk/clerk-react"; // Assuming you're using Clerk for authentication
import UserClientComponent from "@/app/admin/user_validate";
import { Dashboard_header } from "@/components/header";
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
        <div className="h-full p-3 w-full">
        <UserClientComponent>
        <div className="bg-gray-400 h-full rounded-2xl pt-2">
        <Dashboard_header />
            <div className="mt-4 mx-2 xl:mx-16 bg-white h-[600px] w-[400px] sm:w-[720px] xl:w-[1100px]   items-center flex flex-col">
                <div className="bg-dash font-bold w-full  text-white text-lg py-5 pl-5">
                    Account Management
                </div>

        <div className="flex flex-col  items-center justify-center bg-slate-400 w-[300px] sm:w-[450px] h-[300px] mt-[80px] rounded-lg">
            <h1 className="text-xl sm:text-3xl text-white font-bold">Change Your Password</h1>
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
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <Button
            variant="signin"
            size="lg"
            className="mt-4"
                onClick={handlePasswordChange}
            >
                Update Password
            </Button>
        </div>

        </div>
        </div>
        </UserClientComponent>
        </div>
    );
};

export default ChangePassword;



