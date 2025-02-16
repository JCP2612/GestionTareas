import { create } from "zustand";
import { CreateTask, Tarea, UpdateTask } from "../interface/task.interface";
import {
    createTaskRequest,
    deleteTaskRequest,
    getTasksRequest,
    updateTaskRequest,
} from "../api/tarea";

interface TareaStore {
    tareas: Tarea[];
    fetchTasks: () => Promise<void>;
    createTask: (tarea: CreateTask) => Promise<void>;
    updateTask: (id: string, tarea: UpdateTask) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
}

const useTareaStore = create<TareaStore>((set) => ({
    tareas: [],

    fetchTasks: async () => {
        const response = await getTasksRequest();
        const data = await response.json();
        set({ tareas: data })
    },

    createTask: async (tarea: CreateTask) => {
        const response = await createTaskRequest(tarea);
        const data = await response.json();
        set((state) => ({ tareas: [...state.tareas, data] }));
    },

    updateTask: async (id: string, tarea: UpdateTask) => {
        const response = await updateTaskRequest(id, tarea);
        const data = await response.json();
        set((state) => ({
            tareas: state.tareas.map((tarea) =>
                tarea._id === id ? { ...tarea, ...data } : tarea
            ),
        }));
    },

    deleteTask: async (id: string) => {
        const response = await deleteTaskRequest(id);
        if (response.status === 204) {
            set((state) => ({
                tareas: state.tareas.filter((tarea) => tarea._id !== id),
            }));
        }
    },
}));

export default useTareaStore;
