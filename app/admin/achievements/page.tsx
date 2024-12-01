import { Dashboard_header } from "@/components/header";
import AdminClientComponent from "../admin_validate";
import { Add_Achievement } from "@/components/achievements/Add_page";
import { Achievements } from "@/components/achievements/achievements";
import { getAchievements } from "@/actions/todoAction";

const AchievementsPage = async () => {
  const data = await getAchievements();

    return (
        <div className="h-full p-3 w-full">
        <AdminClientComponent>
          <div className="bg-gray-300 h-full rounded-2xl pt-2 ">
            <Dashboard_header />
            <div className="mt-4 mx-16 h-[520px] bg-white flex flex-col items-center gap-5">
              <div className="bg-dash font-bold text-white text-lg py-5 pl-5 w-full">
                Achievements
              </div>
              <Achievements data={data} />
              <Add_Achievement />
            </div>
          </div>
        </AdminClientComponent>
      </div>
    );
};

export default AchievementsPage;