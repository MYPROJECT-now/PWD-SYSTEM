// // bulletinlist.tsx

// import { useBulletinModal } from "@/store/use-bulletin-modal";
// import { BulletinModal } from "./bulletin-modal";
// import { getNotifications } from "@/actions/todoAction";
// import { useEffect, useState } from "react";

// export const BulletinList = () => {
//   const { open, setNotificationData } = useBulletinModal(); // Added setNotificationData for dynamic modal content
//   const [notifications, setNotifications] = useState<any[]>([]); // bawal any

//   useEffect(() => {
//     // Fetch notifications on component mount
//     const fetchNotifications = async () => {
//       const data = await getNotifications(); // Fetch notifications from your server or database
//       setNotifications(data);
//     };

//     fetchNotifications();
//   }, []);

//   const handleButtonClick = (notification: any) => { //bawal any
//     setNotificationData(notification); // Set the clicked notification data
//     open(); // Open the modal
//   };

//   return (
//     <div className="px-3 w-full">
//       {notifications.map((notification) => (
//         <button
//         className="p-2 bg-blue-500 w-full text-white rounded-lg mb-2"
//           key={notification.id}
//           onClick={() => handleButtonClick(notification)}
//         >
//           {notification.title}
//           hihi
//         </button>
//       ))}
//       <BulletinModal />
//     </div>
//   );
// };


// // Define a Notification type that matches your expected structure
// type Notification = {
//   id: number; // Change to number if your ID is a number
//   title: string;
//   message: string; // Assuming this replaces the 'content' property
//   done: boolean; // Assuming you have a done property
//   timestamp: Date;
// };

// import { useBulletinModal } from "@/store/use-bulletin-modal";
// import { BulletinModal } from "./bulletin-modal";
// import { getNotifications } from "@/actions/todoAction";
// import { useEffect, useState } from "react";
// import { format } from 'date-fns';

// // Assume the fetch function returns data in the correct format
// export const BulletinList = () => {
//   const { open, setNotificationData } = useBulletinModal(); // Added setNotificationData for dynamic modal content
//   const [notifications, setNotifications] = useState<Notification[]>([]); // State is now properly typed as Notification[]

//   useEffect(() => {
//     // Fetch notifications on component mount
//     const fetchNotifications = async () => {
//       const data = await getNotifications(); // Fetch notifications from your server or database
//       // Ensure the fetched data is in the correct type format
//       const formattedData = data.map((notification: { id: number; title: string; message: string; imageSrc: string | null; done: boolean, timestamp: Date }) => ({
//         id: notification.id,
//         title: notification.title,
//         message: notification.message, // Map message to content if needed
//         imageSrc: notification.imageSrc,
//         done: notification.done,
//         timestamp: notification.timestamp
//       }));
//       setNotifications(formattedData); // Set the correctly typed data
//     };

//     fetchNotifications();
//   }, []);

//   const handleButtonClick = (notification: Notification) => { // notification is now typed as Notification
//     setNotificationData(notification); // Set the clicked notification data
//     open(); // Open the modal
//   };

//   return (
//     <div className="px-3 w-full ">
//       {notifications.map((notification) => (
//         <button
//         key={notification.id} 
//           className="p-3 bg-white border-2 border-l-8 border-neutral-300 w-full text-white rounded-lg mb-2"
          
//           onClick={() => handleButtonClick(notification)}
//         >
//           <p className="text-lg font-bold mb-1 text-black">{notification.title}</p>
//           <hr />
//           <p className="text-xs mt-1 text-black">{notification.timestamp ? format(notification.timestamp, 'MMMM dd, yyyy hh:mm a') : 'No timestamp available'}</p>
//         </button>
//       ))}
//       <BulletinModal />
//     </div>
//   );
// };

import { useBulletinModal } from "@/store/use-bulletin-modal";
import { BulletinModal } from "./bulletin-modal";
import { getNotifications } from "@/actions/todoAction";
import { useEffect, useState } from "react";
import { format } from "date-fns";

type Notification = {
  id: number;
  title: string;
  message: string;
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
