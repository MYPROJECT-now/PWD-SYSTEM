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

// Define the type for notifications
type Notification = {
  id: number;
  title: string;
  message: string;
  done: boolean;
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">{currentNotif?.title || "Notification"}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-center">
          {currentNotif?.message || "You have a new notification."}
        </DialogDescription>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAcknowledge}
        >
          Okay
        </button>
      </DialogContent>
    </Dialog>
  );
};
