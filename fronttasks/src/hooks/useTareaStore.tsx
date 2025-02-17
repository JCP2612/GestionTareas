import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    createTaskRequest,
    deleteTaskRequest,
    getTasksRequest,
    updateTaskRequest,
} from "../api/tarea";
import { CreateTask, Tarea, UpdateTask } from "../interface/task.interface";


// Hook para obtener tareas
export const useFetchTasks = () => {
    const { data, error, refetch, isLoading, isError } = useQuery<Tarea[], Error>({
        queryKey: ["tareas"],
        queryFn: async () => {
            const response = await getTasksRequest();
            if (!response.ok) {
                throw new Error("Error al obtener las tareas");
            }
            return response.json();
        },
    });
    return { data, error, refetch, isLoading, isError };
};


// Hook para crear tareas
export const useCreateTask = () => {
    const queryClient = useQueryClient();

    return useMutation<Tarea, Error, CreateTask>({
        mutationFn: async (tarea: CreateTask) => {
            const response = await createTaskRequest(tarea);
            if (!response.ok) {
                throw new Error("Error al crear la tarea");
            }
            return response.json();
        },
        onSuccess: (newTask) => {
            // Actualizamos la caché de tareas después de crear una nueva
            queryClient.setQueryData<Tarea[]>(["tareas"], (oldTasks) =>
                oldTasks ? [...oldTasks, newTask] : [newTask]
            );
        },
        onError: (error) => {
            console.error("Error al crear la tarea:", error.message);
        },
    });
};

// Hook para actualizar tareas
export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    return useMutation<Tarea, Error, { id: string; tarea: UpdateTask }>({
        mutationFn: async ({ id, tarea }) => {
            const response = await updateTaskRequest(id, tarea);
            if (!response.ok) {
                throw new Error("Error al actualizar la tarea");
            }
            return response.json();
        },
        onSuccess: (updatedTask) => {
            // Actualizamos la caché de tareas después de modificar una
            queryClient.setQueryData<Tarea[]>(["tareas"], (oldTasks) =>
                oldTasks
                    ? oldTasks.map((task) =>
                        task._id === updatedTask._id ? updatedTask : task
                    )
                    : []
            );
        },
        onError: (error) => {
            console.error("Error al actualizar la tarea:", error.message);
        },
    });
};

// Hook para eliminar tareas
export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationFn: async (id: string) => {
            const response = await deleteTaskRequest(id);
            if (!response.ok) {
                throw new Error("Error al eliminar la tarea");
            }
        },
        onSuccess: (_, id) => {
            // Eliminamos la tarea de la caché
            queryClient.setQueryData<Tarea[]>(["tareas"], (oldTasks) =>
                oldTasks ? oldTasks.filter((task) => task._id !== id) : []
            );
        },
        onError: (error) => {
            console.error("Error al eliminar la tarea:", error.message);
        },
    });
};

// Hook personalizado para filtrar tareas
export const useFilteredTasks = (searchTerm: string) => {
    const { data: tareas = [], isLoading, isError } = useFetchTasks();

    const filteredTareas = tareas.filter((tarea) =>
        tarea.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return { filteredTareas, isLoading, isError };
};

