// import {Header}  from "./header"
type Props = {
    children: React.ReactNode;
};

const LandingPage = ({ children }:Props) => {
    return (
        <div className="min-h-screen flex flex-grow">
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

export default LandingPage;