
type Props = {
    children: React.ReactNode;
};

const PrivilegesLayout = ({ children }:Props) => {
    return (
        <div className="min-h-screen flex flex-row bg-dash">
            <>
                <main className=" flex-grow">
                    <div className="h-full ">
                    {children}
                    </div>
                </main>   
            </>             
        </div>
    );
};

export default PrivilegesLayout;