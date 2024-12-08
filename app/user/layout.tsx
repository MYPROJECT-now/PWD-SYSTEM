
import { Sidebar_user } from "@/components/sidebar_user";


type Props = {
    children: React.ReactNode;
};

const UserLayout = ({ children }:Props) => {
    return (
        <div className="min-h-screen flex flex-row bg-dash">
            <>               
                <Sidebar_user className="hidden lg:block" />
                <main className=" flex-grow">
                    <div className="h-full ">
                    {children}
                    </div>
                </main>   

            </>             
        </div>
    );
};

export default UserLayout;