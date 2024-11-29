// import { create } from "zustand";

// type BulletinModalState = {
//     isOpen: boolean;
//     open: () => void;
//     close: () => void;
// };

// export const useBulletinModal = create<BulletinModalState>((set) => ({
//     isOpen: false, //change mo maya
//     open: () => set ({ isOpen: true}),
//     close: () => set ({ isOpen: false}),
// }));

import { create } from "zustand";

type BulletinModalState = {
  isOpen: boolean;
  title: string | null;
  message: string | null;
  open: (title: string, message: string) => void;
  close: () => void;
};

export const useBulletinModal = create<BulletinModalState>((set) => ({
  isOpen: false,
  title: null,
  message: null,
  open: (title, message) => set({ isOpen: true, title, message }),
  close: () => set({ isOpen: false, title: null, message: null }),
}));
