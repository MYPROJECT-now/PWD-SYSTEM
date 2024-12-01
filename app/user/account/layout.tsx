

type Props = {
    children: React.ReactNode;
};
const ResetLayout = ({ children }:Props) => {
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

export default ResetLayout;