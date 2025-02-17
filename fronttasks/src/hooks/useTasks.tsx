import { useFetchTasks, useCreateTask, useDeleteTask, useUpdateTask } from "./useTareaStore";

export const useTasks = () => {
    const { data: tareas = [], isLoading, isError } = useFetchTasks();
    const createTask = useCreateTask();
    const deleteTask = useDeleteTask();
    const updateTask = useUpdateTask();

    return {
        tareas, // Lista de tareas
        createTask, // Hook para crear tareas
        deleteTask, // Hook para eliminar tareas
        updateTask, // Hook para actualizar tareas
        isLoading, // Estado de carga
        isError, // Estado de error
    };
};
