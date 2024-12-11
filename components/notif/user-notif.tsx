"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getPendingNotifications, updateNotificationStatus } from "@/actions/todoAction";
import { format } from 'date-fns';
import { Button } from "../ui/button";
import { CldImage } from "next-cloudinary";

// Define the type for notifications
type Notification = {
  id: number;
  title: string;
  message: string;
  timestamp: Date;
  done: boolean;
  imageSrc?: string | null; 
};

export const UserNotif = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentNotif, setCurrentNotif] = useState<Notification | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getPendingNotifications();
      if (data.length > 0) {
        setNotifications(data);
        setCurrentNotif(data[0]); // Show the first notification
      }
    };

    fetchNotifications();
  }, []);

  const handleAcknowledge = async () => {
    if (currentNotif) {
      await updateNotificationStatus(currentNotif.id);
      // Remove the acknowledged notification from the list
      const updatedNotifications = notifications.filter(
        (notif) => notif.id !== currentNotif.id
      );
      setNotifications(updatedNotifications);
      setCurrentNotif(updatedNotifications[0] || null); // Show the next notification
    }

    window.location.reload();
  };

  return (

    <Dialog open={!!currentNotif} onOpenChange={handleAcknowledge}>
      <DialogContent className="w-[250px] sm:w-[500px] min-h-[400px] flex flex-col rounded-t-lg">
        <DialogHeader>
        <DialogTitle className=" text-center text-white text-xl pt-3 bg-dash w-[253px] sm:w-[502px] h-[50px] -mt-[26px] -ml-[26px] rounded-t-lg">
            {currentNotif?.title || "Notification"}
        </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-center flex flex-col justify-between">
          <div className=" min-h-[300px]">
          <p className="p-2 text-sm mb-5">
            {currentNotif?.message || "You have a new notification."}
            </p>
          <div className="">
          {currentNotif?.imageSrc && (
            <CldImage
              width="300"
              height="300"
              src={currentNotif.imageSrc}
              alt={currentNotif.title || ""}
              className="mx-auto w-[150px] h-[150px]"
            />
          )}
          </div>
            
          </div>
          <div className="">
          <Button
          variant="signin"
          size="lg"
          className="mb-3"

          onClick={handleAcknowledge}
        >
          Okay
        </Button>
        <p>{currentNotif ? format(currentNotif.timestamp, 'MMMM dd, yyyy hh:mm a') : 'No timestamp available'}</p>
        </div>
        </DialogDescription>
       
      </DialogContent>
    </Dialog>
  
  );
};
