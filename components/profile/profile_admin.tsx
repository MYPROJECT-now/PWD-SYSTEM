

"use client";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect } from "react";

export const Profile_admin = () => {
  const { user } = useUser();

  useEffect(() => {
      if (user) {
          console.log("User:", user);
      }
  }, [user]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button>
                {user?.imageUrl && (
                    <div className="">
                    <Image
                        src={user.imageUrl}
                        alt="User Profile Picture"
                        width={30}
                        height={30}
                        className="rounded-full" // For circular profile picture
                    />
                    </div>
                )}
            
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <SignOutButton>
                        LOGOUT
                </SignOutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
