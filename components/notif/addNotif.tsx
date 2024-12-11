"use client";
import { addNotif} from "@/actions/todoAction";
import AddNotif from "./addNotifTodo";


const Notif = () => {


  // Function to create a new todo itemconst Notif = () => {
  // Function to create a new todo item
  const createNotif = (title: string, message: string, imageSrc: string) => {
    console.log("Creating todo item with pwdNo:", title, "tile:", message, "message:");
    addNotif(title, message, imageSrc)
    .then((response) => {
      console.log("Response from server:", response);
      if (response && response.success) {
        alert("You have successfully added a notification.");
      }
    })
    .catch((error) => {
      console.error("Error creating notification:", error);
      if (error) {
        alert("Error adding notification. Please try again.");
      }
    });
  };

  // Rendering the Todo List component
  return (
    <div className="flex mx-auto flex-col items-center justify-center p-16 bg-white h-full">
     
      {/* Adding Todo component for creating new todos */}
      <AddNotif createNotif={createNotif} />
    </div>
  );
};

export default Notif;