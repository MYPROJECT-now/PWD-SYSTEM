import { create } from "zustand";

type ChangeModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useChangeModal = create<ChangeModalState>((set) => ({
    isOpen: false, //change mo maya
    open: () => set ({ isOpen: true}),
    close: () => set ({ isOpen: false}),
}));