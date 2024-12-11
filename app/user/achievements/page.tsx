"use client"; // Ensure this component is client-side

import { useState, useEffect } from "react";
import { Achievements } from "@/components/achievements/achievements";
import { getAchievements } from "@/actions/todoAction";
import UserClientComponent from "@/app/admin/user_validate";
import Image from "next/image";
import { Dashboard_header_user } from "@/components/header/header_user";

type Achievement = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
};

const AchievementsPage = () => {
  // Explicitly type the state to either null or an array of Achievement objects
  const [data, setData] = useState<Achievement[] | null>(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchAchievements = async () => {
      const achievementsData = await getAchievements();
      setData(achievementsData); // Set the fetched data
    };

    fetchAchievements();
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div className="h-full p-3 w-full">
      <UserClientComponent>
        <div className="bg-gray-300 h-full rounded-2xl pt-2">
          <Dashboard_header_user />
          <div className="mt-4 mx-2 sm:mx-16 h-[580px] flex flex-col items-center">
            <div className="bg-dash font-bold text-white text-lg py-5 pl-5 w-full">
              Achievements
            </div>
            <div className="w-full h-full relative">
              <Image src="/health.jpg" fill alt="logo" />
              <div className="absolute top-0 bottom-10 left-0 w-full h-full bg-dash opacity-70" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center px-20 pt-[60px]">
                {data ? (
                  <Achievements data={data} />
                ) : (
                  <p>Loading achievements...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </UserClientComponent>
    </div>
  );
};

export default AchievementsPage;
