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
            <div className="gap-10 mx-auto flex flex-col items-center ">
                <Link href="/dashboard_user">
                    <Image 
                        src="/pdao.png" 
                        width={100}
                        height={100} 
                        alt="PDAO icon"
                    />
                   
                </Link>

                <div className="flex flex-col gap-3 ">
                    <SidebarItem 
                        label="PRIVELAGES" 
                        href="/user"
                        iconSrc="/pdao.png" 
                    />
                     <SidebarItem 
                        label="HEALTH SERVICES" 
                        href="/user/health_services"
                        iconSrc="/pdao.png" 
                    />

                    <SidebarItem 
                        label="APPLICATION" 
                        href="/user/application"
                        iconSrc="/pdao.png" 
                    />

                    <SidebarItem 
                        label="ACHIVEMENTS" 
                        href="/user/achievements"
                        iconSrc="/pdao.png" 
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
