import { create } from "zustand";

interface Task {
  _id?: string;
  title: string;
  priority: "Alta" | "Media" | "Baja";
  description: string;
  complete: boolean;
}

interface TaskState {
  tasks: Task[];
  createTask: (task: Task) => void;
  updateTask: (id: string, updatedTask: Task) => void;
}

const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  createTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: Date.now().toString() }],
    })),
  updateTask: (id, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task._id === id ? { ...task, ...updatedTask } : task
      ),
    })),
}));

interface Modal {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useModal = create<Modal>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

export default useTaskStore;
