"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect } from "react";
import { MobileSidebar } from "../mobile-sidebar";
import { Profile_admin } from "../profile/profile_admin";

export const Dashboard_header = () => {
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            console.log("User:", user);
        }
    }, [user]);

    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',   // Day of the week (e.g., Monday)
        year: 'numeric',   // Full year (e.g., 2024)
        month: 'long',     // Full month (e.g., October)
        day: 'numeric',     // Day of the month (e.g., 8)
      });
      
      
    return (
        <div className="flex flex-row justify-between mx-9">
            <div className="flex flex-row">
             <nav className="lg:hidden block h-full items-center  mt-3 mr-1 z-50">
            <MobileSidebar />
            </nav>
          
            <div className="flex flex-col">
                <p className="text-dash font-bold text-lg sm:text-xl">
                    PWD MANAGEMENT SYSTEM
                </p>
                <p className="text-neutral-500 font-bold text-[10px] sm:text-xs">
                    {currentDate}
                </p>
            </div>
            </div>

            <div className="flex flex-row gap-3 items-center">
                <Image 
                    src="/home.png"
                    width={50}
                    height={50}
                    alt="logo"
                    className="hidden sm:block"
                />

                <h1 className="hidden sm:block">
                {user?.fullName}
                </h1>

                {/* {user?.imageUrl && (
                    <div className="">
                    <Image
                        src={user.imageUrl}
                        alt="User Profile Picture"
                        width={30}
                        height={30}
                        className="rounded-full" // For circular profile picture
                    />
                    </div>
                )} */}
                 <Profile_admin />
            
                
            </div>
        </div>
    );
};

