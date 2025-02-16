import { create } from "zustand";
interface Modal {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useModal = create<Modal>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
