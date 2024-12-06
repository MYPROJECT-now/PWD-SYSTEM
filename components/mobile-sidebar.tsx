import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { Sidebar_user } from "./sidebar_user";

export const MobileSidebar = () => {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-dash "/>
            </SheetTrigger>

            <SheetContent className="p-0 z-[100] bg-dash" side="left">
                <Sidebar_user />
            </SheetContent>
        </Sheet>
    )
}
