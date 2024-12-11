
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";


type Props = {
    className?: string;
};


export const Sidebar_user = ({ className }: Props) => {


    return (
        <div
            className={cn(
                "flex flex-col h-screen w-[250px] items-center pt-5",
                className
            )}
        >
             <div className="gap-1 mx-auto flex flex-col items-center  mt-[50px]">
                <Link href="/user/user_dashboard">
                    <Image 
                        src="/home.png" 
                        width={120}
                        height={120} 
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
           
        </div>
    );
};
