

type Props = {
    children: React.ReactNode;
};
const ResetLayout = ({ children }:Props) => {
    return (
        
        <div className="h-full flex flex-grow">
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