

import { useBulletinModal } from "@/store/use-bulletin-modal";
import { BulletinModal } from "./bulletin-modal";
import { getNotifications } from "@/actions/todoAction";
import { useEffect, useState } from "react";
import { format } from "date-fns";

type Notification = {
  id: number;
  title: string;
  message: string;
  imageSrc: string | null; 
  done: boolean;
  timestamp: Date;
};

export const BulletinList = () => {
  const { open, setNotificationData } = useBulletinModal();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust the number of items per page

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getNotifications();
      const formattedData = data.map(
        (notification: {
          id: number;
          title: string;
          message: string;
          imageSrc: string | null;
          done: boolean;
          timestamp: Date;
        }) => ({
          id: notification.id,
          title: notification.title,
          message: notification.message,
          done: notification.done,
          imageSrc: notification.imageSrc, 
          timestamp: notification.timestamp,
        })
      );
      setNotifications(formattedData);
    };

    fetchNotifications();
  }, []);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNotifications = notifications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleButtonClick = (notification: Notification) => {
    setNotificationData(notification);
    open();
  };

  return (
    <div className="px-3 w-full">
      <div className="flex flex-col h-[420px]">
      {paginatedNotifications.map((notification) => (
        <button
          key={notification.id}
          className="p-3 bg-white border-2 border-l-8 border-neutral-300 w-full text-white rounded-lg mb-2"
          onClick={() => handleButtonClick(notification)}
        >
          <p className="text-lg font-bold mb-1 text-black">{notification.title}</p>
          <hr />
          <p className="text-xs mt-1 text-black">
            {notification.timestamp
              ? format(notification.timestamp, "MMMM dd, yyyy hh:mm a")
              : "No timestamp available"}
          </p>
        </button>
      ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-3 py-1 border rounded-l-md bg-gray-200 disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="px-3 py-1 border">{currentPage}</span>
        <button
          disabled={startIndex + itemsPerPage >= notifications.length}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-3 py-1 border rounded-r-md bg-gray-200 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
      <BulletinModal />
    </div>
  );
};
