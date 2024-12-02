"use client";

import { addAchievement } from "@/actions/todoAction";
import { useAddModal } from "@/store/use-add-modal";
import { AddAchievement } from "./addAchievements";
import { Button } from "../ui/button";



export const Add_Achievement = () => {
  const { open } = useAddModal();



  const createTodo = (title: string, description: string, imageSrc: string) => {
    addAchievement(title, description, imageSrc)
    .then((response) => {
      console.log("Response from server:", response);
      if (response && response.success) {
        alert("You have successfully added an achievement.");
      }
    })
    .catch((error) => {
      console.error("Error creating achievement:", error);
      if (error) {
        alert("Error adding achievement. Please try again.");
      }
    });
  };

  return (
    <div>
      <Button
        variant="add"
        size="lg"
        onClick={open}
      >
        ADD ACHIEVEMENTS
      </Button>
      <AddAchievement createTodo={createTodo} />
    </div>
  );
};


