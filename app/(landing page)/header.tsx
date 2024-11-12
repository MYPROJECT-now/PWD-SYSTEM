"use client"; 

import Image from "next/image";
import { ClerkLoading, 
        ClerkLoaded,
        SignedIn,
        SignedOut,
        UserButton,
        SignInButton,
        useUser,

} from "@clerk/nextjs";
import { Loader } from "lucide-react";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const Header = () => {
    const { user, isSignedIn, isLoaded } = useUser(); 
    const router = useRouter();

    useEffect(() => {
        // Check if the user is signed in and user data is loaded
        if (isSignedIn && isLoaded) {
            // Assuming you have 'role' stored in publicMetadata of the user
            if (user?.publicMetadata?.role === 'admin') {
                // Redirect to admin dashboard
                router.push("/admin/dashboard_admin");
            } else {
                // Redirect to user dashboard
                router.push("/user");
            }
        }
    }, [isSignedIn, isLoaded, user, router]);

    return (
        <header className="h-20 w-full border-b-2 border-black-300 px-5">
            <div className="lg:max-w-screen-2xl mx-auto flex items-center justify-between  h-full px-20">
                <div className="flex items-center ">
                    <Image
                        src= "/home.png"
                        alt="pdao logo"
                        width= {80}
                        height={80}
                    />
                    <p className="pl-2 font-sans font-semibold text-xl tracking-wide" >
                        PWD Management System
                    </p>
                </div>

                <div>
                    <ClerkLoading>
                        <Loader 
                        className="h-5 w-5 text-gray-400 animate-spin"
                        />
                    </ClerkLoading>

                    <ClerkLoaded>
                        <SignedIn>
                            <UserButton
                                afterSignOutUrl="/"
                            />
                        </SignedIn>

                        <SignedOut>
                            <SignInButton
                                mode="modal">
                                <button className="w-20 h-10 b-2 rounded-md bg-blue-400"> 
                                    LogIn
                                </button>
                            </SignInButton>
                        </SignedOut>
                    </ClerkLoaded>
                </div>
            </div>
        </header>
    );
};