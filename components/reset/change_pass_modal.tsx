"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { handlePasswordUpdate } from "@/actions/changePassword";
import { useUser } from "@clerk/clerk-react"; // Assuming you're using Clerk for authentication
import { useChangeModal } from "@/store/use-change_pass";


export const ChangePassword = () => {
    const { user } = useUser(); // Get the user from the Clerk hook
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const { isOpen } = useChangeModal();

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
        <Dialog open={isOpen}>
            <DialogContent className="w-[500px] min-h-[400px] text-center p-10 bg-white rounded-lg shadow-lg">
            <DialogHeader>
              <DialogTitle>
                <p className="w-full text-center text-2xl font-bold mb-4 underline">
                Change Your Password
                </p>
              </DialogTitle>
            </DialogHeader>
            <div className="mb-4 flex flex-row items-center gap-3">
                <label className="text-lg mb-2 w-[100px]" 
                htmlFor="username">
                    Current Password
                </label>
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                   className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
            </div>

            <div className="mb-4 flex flex-row items-center gap-3">
                <label className="text-lg mb-2 w-[100px]" 
                htmlFor="username">
                    Current Password
                </label>
                <input
                    type="password"
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
                onClick={handlePasswordChange}
               className="w-[350px] mt-5 p-3 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Update Password
            </button>
            </DialogContent>
        </Dialog>
    );
};
