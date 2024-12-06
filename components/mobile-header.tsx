import { MobileSidebar } from "@/components/mobile-sidebar";

export const MobileHeader = () => {
    return(
        <div className="flex flex-row">
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-button border-b fixed top-0 w-full z-50">
            <MobileSidebar />
        </nav>
        </div>
    );
};