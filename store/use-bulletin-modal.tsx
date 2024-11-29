// use-bulletin-modal.ts (Zustand store)

import { create } from "zustand";

type BulletinModalState = {
  isOpen: boolean;
  notificationData: any; // Holds the data for the selected notification
  open: () => void;
  close: () => void;
  setNotificationData: (data: any) => void; // Set the notification data
};

export const useBulletinModal = create<BulletinModalState>((set) => ({
  isOpen: false,
  notificationData: null, // Initially no notification is selected
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setNotificationData: (data) => set({ notificationData: data }), // Set the notification data when a button is clicked
}));
