
type Props = {
    children: React.ReactNode;
};

const HealthServicesLayout = ({ children }:Props) => {
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

export default HealthServicesLayout;