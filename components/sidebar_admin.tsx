import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
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
            <div className="gap-10 mx-auto flex flex-col items-center ">
                <Link href="/learn">
                    <Image 
                        src="/pdao.png" 
                        width={100}
                        height={100} 
                        alt="Dalawika icon"
                    />
                   
                </Link>

                <div className="flex flex-col gap-3 ">
                    <SidebarItem 
                        label="Dashboard" 
                        href="/admin/dashboard_admin"
                        iconSrc="/pdao.png" 
                    />

                    <SidebarItem 
                        label="PWD Masterlist" 
                        href="/admin/masterlist"
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
