import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";

type Props = {
    className?: string;
};

export const Sidebar_admin = ({ className }: Props) => {
    return (
        <div
            className={cn(
                "flex flex-col h-screen w-[250px] items-center pt-5",
                className
            )}
        >
            
            <div className="gap-1 mx-auto flex flex-col items-center mt-[50px] ">
                <Link href="/admin/dashboard_admin">
                    <Image 
                        src="/home.png" 
                        width={130}
                        height={130} 
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
                        label="Notifications" 
                        href="/admin/notification"
                        iconSrc="/notif.png" 
                    />

                    <SidebarItem 
                        label="Achievements" 
                        href="/admin/achievements"
                        iconSrc="/achievement.png" 
                    />
                </div>

                

            </div>
                
           
           
        </div>
    );
};
