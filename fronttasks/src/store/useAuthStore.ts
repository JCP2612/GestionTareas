import { create } from "zustand";

interface AuthState {
  token: string | null;
  name: string | null;
  setToken: (token: string) => void;
  setName: (name: string) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  name: localStorage.getItem("name"),
  setToken: (token: string) => {
    localStorage.setItem("token", token);
    set({ token });
  },
  setName: (name: string) => {
    localStorage.setItem("name", name);
    set({ name });
  },
  clearAuth: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    set({ token: null, name: null });
  },
}));

export default useAuthStore;
