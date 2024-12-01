
import { useUser } from '@clerk/clerk-react';


// Use the type of the user object
type UserType = ReturnType<typeof useUser>['user'];


export const handlePasswordUpdate = async (
    user: UserType | null, // Accept the user as an argument, and allow it to be null
    currentPassword: string,
    newPassword: string
) => {
    try {
        if (!user) {
            throw new Error("User is not authenticated");
        }

        // Use the Clerk API to update the user's password
        await user.updatePassword({
            currentPassword,
            newPassword,
            signOutOfOtherSessions: true, // Optional: Sign out from other sessions
        });

         //  // Update metadata
         const response = await fetch('/api/update-meta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user.id,
            }),
        });

        const data = await response.json();
        if (!data.success) {
            throw new Error("Failed to update metadata");
        }
    
        return { success: true };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error);
            return { error: error.message || "Failed to update password. Please try again." };
        } else {
            console.error(error);
            return { error: "An unknown error occurred." };
        }
    }
};

   
