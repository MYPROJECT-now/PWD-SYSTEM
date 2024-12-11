import { create } from "zustand";

type CreateModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useCreateModal = create<CreateModalState>((set) => ({
    isOpen: false, //change mo maya
    open: () => set ({ isOpen: true}),
    close: () => set ({ isOpen: false}),
}));