import { Dashboard_header } from "@/components/header";

const HealthServicesPage = () => {
    return (
        <div className="h-full p-3 w-full">
            <div className="bg-gray-400 h-full rounded-2xl pt-2">
            <Dashboard_header />
                <div className="mt-4 mx-16 bg-white h-[600px]">
                    <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
                    Health Services
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HealthServicesPage;