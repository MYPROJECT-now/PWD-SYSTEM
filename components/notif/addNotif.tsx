"use client";
import { addNotif} from "@/actions/todoAction";
import AddNotif from "./addNotifTodo";


const Notif = () => {


  // Function to create a new todo item
  const createNotif = (title: string, message: string) => {
    addNotif(title, message);
  };

  // Rendering the Todo List component
  return (
    <div className="flex mx-auto flex-col items-center p-16 bg-neutral-500 h-full">
      <div className="text-5xl font-medium">Add Notification</div>
     
      {/* Adding Todo component for creating new todos */}
      <AddNotif createNotif={createNotif} />
    </div>
  );
};

export default Notif;
