// import { useState, useEffect } from "react";
// import { useBulletinModal } from "@/store/use-bulletin-modal";
// import { BulletinModal } from "./bulletin-modal";

// type Notification = {
//   id: number;
//   title: string;
//   message: string;
// };

// export const BulletinList = () => {
//   const bulletinModal = useBulletinModal();
//   const [notifications, setNotifications] = useState<Notification[]>([]);

//   // Fetch notifications from API
//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await fetch("/api/notification");
//         const data = await response.json();
//         setNotifications(data);
//       } catch (error) {
//         console.error("Failed to fetch notifications:", error);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   return (
//     <div>
//     <BulletinModal />
//       {notifications.length > 0 ? (
//         notifications.map((notif) => (
//           <div  key={notif.id} className="flex flex-col">
//           <button
//             className="p-2 bg-blue-500 text-white rounded mb-2"
//             onClick={() => bulletinModal.open(notif.title, notif.message)}
//           >
//             {notif.title}
//           </button>
//           </div>
//         ))
//       ) : (
//         <p>No notifications available.</p>
//       )}
//     </div>
//   );
// };
