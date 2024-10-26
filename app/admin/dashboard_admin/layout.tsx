
import { Sidebar_admin } from "@/components/sidebar_admin";



type Props = {
    children: React.ReactNode;
};

const AdminLayout = ({ children }:Props) => {
    return (
        <div className="min-h-screen flex flex-row bg-dash">
            <>
                <Sidebar_admin />
                <main className=" flex-grow">
                    <div className="h-full ">
                    {children}
                    </div>
                </main>   
            </>             
        </div>
    );
};

export default AdminLayout;