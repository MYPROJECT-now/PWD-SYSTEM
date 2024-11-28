
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, SignOutButton } from "@clerk/nextjs";
import { Loader} from "lucide-react";


type Props = {
    className?: string;
};


export const Sidebar_user = ({ className }: Props) => {


    return (
        <div
            className={cn(
                "flex flex-col h-screen w-[250px] items-center pt-5 justify-between",
                className
            )}
        >
             <div className="gap-1 mx-auto flex flex-col items-center ">
                <Link href="/user/user_dashboard">
                    <Image 
                        src="/home.png" 
                        width={150}
                        height={150} 
                        alt="Home"
                    />
                   
                </Link>

                <div className="flex flex-col gap-3 ">
                    <SidebarItem 
                        label="DASHBOARD" 
                        href="/user/user_dashboard"
                        iconSrc="/dashboard.png" 
                    />
                     <SidebarItem 
                        label="HEALTH SERVICES" 
                        href="/user/health_services"
                        iconSrc="/health.png" 
                    />

                    <SidebarItem 
                        label="ACHIEVEMENTS" 
                        href="/user/achievements"
                        iconSrc="/achievement.png" 
                    />

                   
                   
                </div>

            </div>
                
            {/* ClerkLoading and ClerkLoaded components added here for alignment */}
            <div className="pb-10 text-center">
                <div>
                    <button
                    className="text-white bg-blue-600 rounded-lg px-5 py-2.5 text-center mb-2"
                    >
                        Account Management</button>
                </div>
                <ClerkLoading>
                    <Loader className="h-10 w-10 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                <SignOutButton>
                    <button
                    className="text-white bg-blue-600 rounded-lg px-5 py-2.5 text-center"
                    >
                        Log Out</button>
                </SignOutButton>
                </ClerkLoaded>
            </div>
           
        </div>
    );
};
