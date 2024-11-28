import { create } from "zustand";

type NotifModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const notifAddModal = create<NotifModalState>((set) => ({
    isOpen: false, //change mo maya
    open: () => set ({ isOpen: true}),
    close: () => set ({ isOpen: false}),
}));