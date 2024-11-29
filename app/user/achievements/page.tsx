import UserClientComponent from "@/app/admin/user_validate";
import { Achievements } from "@/components/achievements/acievements";
import { Dashboard_header } from "@/components/header";

const AchievementsPage = () => {
    return (
        <div className="h-full p-3 w-full">
            <UserClientComponent>
            <div className="bg-gray-400 h-full rounded-2xl pt-2">
            <Dashboard_header />
                <div className="mt-4 mx-16 bg-white h-[600px]">
                    <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
                    Achievements
                    </div>
                    <Achievements />
                </div>
            </div>
            </UserClientComponent>
        </div>

    );
};

export default AchievementsPage;