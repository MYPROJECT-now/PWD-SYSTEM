import { create } from "zustand";

type AddModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useAddModal = create<AddModalState>((set) => ({
    isOpen: false, //change mo maya
    open: () => set ({ isOpen: true}),
    close: () => set ({ isOpen: false}),
}));