import { create } from "zustand";

type BenefitsModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useBenefitsModal = create<BenefitsModalState>((set) => ({
    isOpen: false, //change mo maya
    open: () => set ({ isOpen: true}),
    close: () => set ({ isOpen: false}),
}));