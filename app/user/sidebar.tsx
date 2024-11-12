import Image from "next/image";
import Link from "next/link";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

export const Sidebar = () => {
    return (
        <div className="h-screen bg-violet-400 w-[250px] fixed flex flex-col">
            <div className="flex mx-auto pt-5 pb-8 items-center ">
                <Image
                    src= "/pdao.png"
                    alt="pdao logo"
                    width= {100}
                    height={710}
                />
            </div>

            <div className="flex flex-col mx-4 justify-between bg-slate-500 h-[550px]">
                <div className="flex flex-col gap-3">
                    <div className="bg-red-500 flex flex-row ">
                        <Image 
                            src="/"  
                            alt=""
                            className="mr-5"
                            height={32}
                            width={32}
                        />
                        <button className="flex flex-row items-center justify-center h-[60px] lg:h-auto w-[250px]">
                            <Link href="/1">
                                    DASHBOARD
                            </Link>
                        </button>
                    </div>
                    <div className="bg-red-500 flex flex-row ">
                        <Image 
                            src="/"  
                            alt=""
                            className="mr-5"
                            height={32}
                            width={32}
                        />
                        <button className="flex flex-row items-center justify-center h-[60px] lg:h-auto w-[250px]">
                            <Link href="/1">
                                    DASHBOARD
                            </Link>
                        </button>
                    </div>
                    <div className="bg-red-500 flex flex-row ">
                        <Image 
                            src="/"  
                            alt=""
                            className="mr-5"
                            height={32}
                            width={32}
                        />
                        <button className="flex flex-row items-center justify-center h-[60px] lg:h-auto w-[250px]">
                            <Link href="/1">
                                    DASHBOARD
                            </Link>
                        </button>
                    </div>
                    <div className="bg-red-500 flex flex-row ">
                        <Image 
                            src="/"  
                            alt=""
                            className="mr-5"
                            height={32}
                            width={32}
                        />
                        <button className="flex flex-row items-center justify-center h-[60px] lg:h-auto w-[250px]">
                            <Link href="/1">
                                    DASHBOARD
                            </Link>
                        </button>
                    </div>
                    <div className="bg-red-500 flex flex-row ">
                        <Image 
                            src="/"  
                            alt=""
                            className="mr-5"
                            height={32}
                            width={32}
                        />
                        <button className="flex flex-row items-center justify-center h-[60px] lg:h-auto w-[250px]">
                            <Link href="/1">
                                    DASHBOARD
                            </Link>
                        </button>
                    </div>
                    <div className="bg-red-500 flex flex-row ">
                        <Image 
                            src="/"  
                            alt=""
                            className="mr-5"
                            height={32}
                            width={32}
                        />
                        <button className="flex flex-row items-center justify-center h-[60px] lg:h-auto w-[250px]">
                            <Link href="/1">
                                    DASHBOARD
                            </Link>
                        </button>
                    </div>
                </div>
                
                {/* ClerkLoading and ClerkLoaded components added here for alignment */}
                <div className="mx-auto">
                    <ClerkLoading>
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <UserButton afterSignOutUrl="/" />
                    </ClerkLoaded>
                </div>
            </div>
        </div>
         
    )
}