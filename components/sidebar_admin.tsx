import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, SignOutButton } from "@clerk/nextjs";
import { Loader} from "lucide-react";

type Props = {
    className?: string;
};

export const Sidebar_admin = ({ className }: Props) => {
    return (
        <div
            className={cn(
                "flex flex-col h-screen w-[250px] items-center pt-5 justify-between",
                className
            )}
        >
            
            <div className="gap-1 mx-auto flex flex-col items-center ">
                <Link href="/admin/dashboard_admin">
                    <Image 
                        src="/home.png" 
                        width={150}
                        height={150} 
                        alt="PWD Icon"
                    />
                   
                </Link>

                <div className="flex flex-col gap-3 ">
                    <SidebarItem 
                        label="Dashboard" 
                        href="/admin/dashboard_admin"
                        iconSrc="/dashboard.png" 
                    />

                    <SidebarItem 
                        label="PWD Masterlist" 
                        href="/admin/masterlist"
                        iconSrc="/masterlist.png" 
                    />

                    <SidebarItem 
                        label="Create User" 
                        href="/admin/create"
                        iconSrc="/create.png" 
                    />

                    <SidebarItem 
                        label="Notifications" 
                        href="/admin/notification"
                        iconSrc="/notification.png" 
                    />

                    <SidebarItem 
                        label="Achievements" 
                        href="/admin/achievements"
                        iconSrc="/notification.png" 
                    />
                </div>

                

            </div>
                
            {/* ClerkLoading and ClerkLoaded components added here for alignment */}
            <div className="pb-10">
                <ClerkLoading>
                    <Loader className="h-10 w-10 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>

                <SignOutButton>
                    <button
                    className="text-white bg-blue-600 rounded-lg px-5 py-2.5 text-center"
                    >
                        Log Out
                    </button>
                </SignOutButton>
                </ClerkLoaded>
            </div>
           
        </div>
    );
};
