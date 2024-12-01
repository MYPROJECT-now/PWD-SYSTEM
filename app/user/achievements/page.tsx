import { Dashboard_header } from "@/components/header";

import { Achievements } from "@/components/achievements/achievements";
import { getAchievements } from "@/actions/todoAction";
import UserClientComponent from "@/app/admin/user_validate";

const AchievementsPage = async () => {
  const data = await getAchievements();

    return (
        <div className="h-full p-3 w-full">
        <UserClientComponent>
          <div className="bg-gray-300 h-full rounded-2xl pt-2">
            <Dashboard_header />
            <div className="mt-4 mx-16 bg-white h-[520px]">
              <div className="bg-dash font-bold text-white text-lg py-5 pl-5 ">
                Achievements
              </div>
              <div className="mt-10">
              <Achievements data={data} />
              </div>
            </div>
          </div>
        </UserClientComponent>
      </div>
    );
};

export default AchievementsPage;