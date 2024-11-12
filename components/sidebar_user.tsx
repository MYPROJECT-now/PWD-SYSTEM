import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
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
                <Link href="/learn">
                    <Image 
                        src="/home.png" 
                        width={150}
                        height={150} 
                        alt="Dalawika icon"
                    />
                   
                </Link>

                <div className="flex flex-col gap-3 ">
                    <SidebarItem 
                        label="PRIVELAGES" 
                        href="/user"
                        iconSrc="/privelage.png" 
                    />
                     <SidebarItem 
                        label="HEALTH SERVICES" 
                        href="/user/health_services"
                        iconSrc="/health.png" 
                    />

                    <SidebarItem 
                        label="APPLICATION" 
                        href="/user/application"
                        iconSrc="/application.png" 
                    />

                    <SidebarItem 
                        label="ACHIEVEMENTS" 
                        href="/user/achievements"
                        iconSrc="/achievement.png" 
                    />

                   
                   
                </div>

            </div>
                
            {/* ClerkLoading and ClerkLoaded components added here for alignment */}
            <div className="pb-10">
                <ClerkLoading>
                    <Loader className="h-10 w-10 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
           
        </div>
    );
};
