"use client"; // Ensure this component is client-side

import { useState, useEffect } from "react";
import { Dashboard_header } from "@/components/header";
import { getAchievements, deleteAchievement } from "@/actions/todoAction";
import Image from "next/image";
import AdminClientComponent from "../admin_validate";
import { Add_Achievement } from "@/components/achievements/Add_page";
import { Achievements_admin } from "@/components/achievements/achievements_admin";

type Achievement = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
};

const AchievementsPage = () => {
  const [data, setData] = useState<Achievement[] | null>(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      const achievementsData = await getAchievements();
      setData(achievementsData); // Set the fetched data
    };

    fetchAchievements();
  }, []); // Empty dependency array means it runs once when the component mounts

  const handleDelete = async (id: number) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this achievement?");
    
    if (isConfirmed) {
      // Call the delete API or function to delete from the DB
      await deleteAchievement(id);
  
      // Remove the deleted achievement from the state to update the UI
      setData((prevData) => prevData?.filter((achievement) => achievement.id !== id) || []);
    }
  };

  return (
    <div className="h-full p-3 w-full">
      <AdminClientComponent>
        <div className="bg-gray-300 h-full rounded-2xl pt-2">
          <Dashboard_header />
          <div className="mt-4 mx-2 sm:mx-16 h-[580px] flex flex-col items-center">
            <div className="bg-dash font-bold text-white text-lg py-5 pl-5 w-full">
              Achievements
            </div>
            <div className="w-full h-full relative">
              <Image src="/health.jpg" fill alt="logo" />
              <div className="absolute top-0 bottom-10 left-0 w-full h-full bg-dash opacity-70" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center px-20 pt-[60px]">
                {data ? (
                  <Achievements_admin data={data} onDelete={handleDelete} />
                ) : (
                  <p>Loading achievements...</p>
                )}
                <div className="mt-5">
                  <Add_Achievement />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminClientComponent>
    </div>
  );
};

export default AchievementsPage;
