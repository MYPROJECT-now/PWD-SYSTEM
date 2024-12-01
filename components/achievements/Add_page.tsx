"use client";

import { addAchievement } from "@/actions/todoAction";
import { useAddModal } from "@/store/use-add-modal";
import { AddAchievement } from "./addAchievements";



export const Add_Achievement = () => {
  const { open } = useAddModal();



  const createTodo = (title: string, description: string, imageSrc: string) => {
    addAchievement(title, description, imageSrc)
  
  };

 

  return (
    <div>
      <button
        className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-[250px] py-1 mt-4"
        onClick={open}
      >
        ADD ACHIEVEMENTS
      </button>
      <AddAchievement createTodo={createTodo} />
    </div>
  );
};


