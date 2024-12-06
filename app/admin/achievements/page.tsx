import { Dashboard_header } from "@/components/header";
import AdminClientComponent from "../admin_validate";
import { Add_Achievement } from "@/components/achievements/Add_page";
import { Achievements } from "@/components/achievements/achievements";
import { getAchievements } from "@/actions/todoAction";
import Image from "next/image";

const AchievementsPage = async () => {
  const data = await getAchievements();

    return (
        <div className="h-full p-3 w-full">
        <AdminClientComponent>
          <div className="bg-gray-300 h-full rounded-2xl pt-2 ">
            <Dashboard_header />
            <div className="mt-4 mx-16 h-[580px]  flex flex-col items-center">
              <div className="bg-dash font-bold text-white text-lg py-5 pl-5 w-full">
                Achievements
              </div>
              <div className="w-full h-full relative">
              <Image src="/health.jpg" fill alt="logo" />
              <div className="absolute top-0 bottom-10 left-0 w-full h-full bg-dash opacity-70" /> 
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center px-20 pt-[60px] gap-10">
              <Achievements data={data} />
              <Add_Achievement />
            </div>
            </div>
          </div>
          </div>
        </AdminClientComponent>
      </div>
    );
};

export default AchievementsPage;