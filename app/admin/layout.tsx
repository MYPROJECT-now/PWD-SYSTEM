"use client";
import { Footer } from "@/components/footer";
import { Sidebar_admin } from "@/components/sidebar_admin";

type Props = {
    children: React.ReactNode;
};
const MasterlistLayout = ({ children }:Props) => {
    return (
        
        <div className="min-h-screen flex flex-col flex-grow bg-dash">
            <>
            <div className="flex flex-row">               
                <Sidebar_admin />
                <main className="flex-grow">
                    <div className="h-full">
                        {children}
                    </div>
                </main>
                </div>
 
            </>
            <Footer/>
        </div>
    );
};

export default MasterlistLayout;