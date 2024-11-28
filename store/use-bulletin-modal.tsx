import { create } from "zustand";

type BulletinModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useBulletinModal = create<BulletinModalState>((set) => ({
    isOpen: false, //change mo maya
    open: () => set ({ isOpen: true}),
    close: () => set ({ isOpen: false}),
}));