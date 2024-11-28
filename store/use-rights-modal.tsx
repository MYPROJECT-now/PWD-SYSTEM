import { create } from "zustand";

type RightsModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useRightsModal = create<RightsModalState>((set) => ({
    isOpen: false, //change mo maya
    open: () => set ({ isOpen: true}),
    close: () => set ({ isOpen: false}),
}));