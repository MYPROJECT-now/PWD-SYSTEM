import { Sidebar_admin } from "@/components/sidebar_admin";

type Props = {  
    children: React.ReactNode
  };

const NotificationLayout = ({ children }:Props) => {
    return ( 
        <div className="min-h-screen flex flex-grow bg-dash">
            <>
                <main className="flex-grow">
                    <div className="h-full">
                        {children}
                    </div>
                </main>
            </>
        </div>
    );
};
export default NotificationLayout;