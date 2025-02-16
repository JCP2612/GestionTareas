import useTareaStore from "./useTareaStore";

export const useTasks = () => {
    const tareas = useTareaStore((state) => state.tareas); // Accede a las tareas directamente desde la tienda
    const fetchTasks = useTareaStore((state) => state.fetchTasks); // Accede a la función para obtener tareas
    const createTask = useTareaStore((state) => state.createTask); // Accede a la función para crear tareas
    const deleteTask = useTareaStore((state) => state.deleteTask); // Accede a la función para eliminar tareas
    const updateTask = useTareaStore((state) => state.updateTask); // Accede a la función para actualizar tareas

    // Retorna los valores necesarios
    return {
        tareas,
        fetchTasks,
        createTask,
        deleteTask,
        updateTask,
    };
};