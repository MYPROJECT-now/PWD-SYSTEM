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
   


export default function Home() {
  const { user, isSignedIn, isLoaded } = useUser(); 
  const router = useRouter();
  
  useEffect(() => {
      // Check if the user is signed in and user data is loaded
      if (isSignedIn && isLoaded) {
          // Assuming you have 'role' stored in publicMetadata of the user
          const needsPasswordChange = user?.publicMetadata?.needsPasswordChange;
          if (needsPasswordChange) {
              router.push("/reset"); // change to reset tomorrow
          }
          else {
              if (user?.publicMetadata?.role === 'admin') {
                  router.push("/admin/dashboard_admin");
              } else {
                  router.push("/user/user_dashboard");
              }
          }
      }
  }, [isSignedIn, isLoaded, user, router]);

  return (
    <div className="w-full h-full relative">
    <Image src="/health.jpg" fill alt="logo" />
    <div className="absolute w-full h-full bg-dash opacity-70" />
    <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center -mt-5 sm:mt-0 mx-auto  gap-3">
      <div>
        <Image
        src="/home.png"
        width={200}
        height={200}
        alt="logo"
        className="hidden sm:block" />

        <Image
        src="/home.png"
        width={100}
        height={100}
        alt="logo"
        className="block sm:hidden" />
      </div>

      <div className="text-center">
        <p className="text-sm sm:text-3xl font-extrabold -mt-6 mb-2 text-white  mx-5">
          Person With Disability Management System
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
                                {/* <button className="w-20 h-10 b-2 rounded-md bg-blue-400"> 
                                    LogIn
                                </button> */}
                                <div>
                                    <div className="hidden sm:block">
                                    <button
                                    className="w-[200px] h-10 b-2  rounded-xl text-xl bg-transparent border-2 border-white text-white">
                                        SIGN IN
                                    </button>
                                    </div>

                                    <div className="block sm:hidden">
                                    <button
                                    className="w-[150px] h-9 b-2 rounded-xl bg-transparent border-2 border-white text-white">
                                        SIGN IN
                                    </button>
                                    </div>
                                </div>
                            </SignInButton>
                        </SignedOut>
                        
                    </ClerkLoaded>
      </div>
    </div>
  </div>
    
  );
}
