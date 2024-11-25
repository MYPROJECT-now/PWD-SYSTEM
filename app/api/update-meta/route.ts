import { clerkClient } from '@clerk/nextjs/server'; // Ensure you import the Clerk client properly

export async function POST(request: Request) {
    const { userId } = await request.json();
    
    try {
        // Update metadata
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                needsPasswordChange: false,
            },
        });
        
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: "Failed to update metadata." }),
            { status: 500 }
        );
    }
}
