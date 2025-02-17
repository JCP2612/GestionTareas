import { create } from "zustand";
interface Task {
  id: string;
  title: string;
  priority: "Todas" | "Alta" | "Media" | "Baja";
}

// Zustand store for managing priority filter
export interface TaskStore {
  selectedPriority: "Todas" | "Alta" | "Media" | "Baja"; // Agrega "Todas" como opción
  setSelectedPriority: (priority: "Todas" | "Alta" | "Media" | "Baja") => void;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

interface Task {
  id: string;
  title: string;
  priority: "Todas" | "Alta" | "Media" | "Baja";
}

// Zustand store for managing priority filter
export interface TaskStore {
  selectedPriority: "Todas" | "Alta" | "Media" | "Baja"; // Agrega "Todas" como opción
  setSelectedPriority: (priority: "Todas" | "Alta" | "Media" | "Baja") => void;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

const useFilterStore = create<TaskStore>((set) => ({
  selectedPriority: "Todas",
  setSelectedPriority: (priority: "Todas" | "Alta" | "Media" | "Baja") =>
    set({ selectedPriority: priority }),
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
}));

export default useFilterStore;
