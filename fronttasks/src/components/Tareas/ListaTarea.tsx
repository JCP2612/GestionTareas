import React, { useEffect, useCallback, useState } from "react";
import { useDeleteTask, useFetchTasks } from "../../hooks/useTareaStore";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Box,
    Grid2,
    IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FormularioTarea from "./FormularioTarea";
import EditarTarea from "./EditarTarea";
import PriorityFilter from "../Busqueda/Busqueda";
import useTaskStore from "../../interface/filter.interface";
import { Tarea } from "../../interface/task.interface";

const ListaTarea: React.FC = () => {
    const { data: tareas, refetch, isError, error, isLoading } = useFetchTasks();
    const deleteTask = useDeleteTask();
    const selectedPriority = useTaskStore((state) => state.selectedPriority);
    const [selectTask, setSelectTask] = useState<Tarea | null>(null);
    const [editModal, setEditModal] = useState(false);

    // Callback para refetch con manejo de errores
    const refetchTasks = useCallback(async () => {
        try {
            await refetch();
        } catch (err) {
            console.error("Error al obtener las tareas:", err);
        }
    }, [refetch]);

    useEffect(() => {
        refetchTasks();
    }, [refetchTasks]);

    const handleEdit = (tarea: Tarea) => {
        setSelectTask(tarea);
        setEditModal(true);
    }


    const handleDelete = async (id: string) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
            try {
                await deleteTask.mutateAsync(id); // Llamada para eliminar
                alert("Tarea eliminada con éxito.");
                await refetchTasks(); // Refresca la lista de tareas después de eliminar
            } catch (error) {
                console.error('Error al eliminar la tarea', error)
                alert("Hubo un error al eliminar la tarea.")
            }
        }
    }


    if (isLoading) {
        return <p>Cargando tareas...</p>;
    }

    if (isError) {
        return <p>Error al cargar tareas: {error?.message}</p>;
    }

    console.log("Tareas:", tareas); // Verifica si las tareas se están actualizando

    return (
        <Box padding={5}>
            <Typography variant="h4" textAlign="center" gutterBottom>
                Lista de Tareas
            </Typography>
            <Box marginBottom={3}>
                <FormularioTarea />
            </Box>
            <Box marginBottom={3}>
                <PriorityFilter />
            </Box>
            <Grid2 container spacing={2}>
                {tareas
                    ?.filter((tarea) => selectedPriority === "Todas" || tarea.priority === selectedPriority)
                    .map((tarea) => (
                        <Card key={tarea._id} style={{ backgroundColor: "#ffff" }}>
                            <CardContent>
                                <Typography variant="h6">Titulo: {tarea.title}</Typography>
                                <Typography variant="body2">Descripcion: {tarea.description}</Typography>
                                <Typography variant="body2">Prioridad: {tarea.priority}</Typography>
                                <Typography variant="body2">Estado: {tarea.complete ? "Completada" : "Pendiente"}</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton color="primary" onClick={() => handleEdit(tarea)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(tarea._id!)} color="error"><DeleteIcon /></IconButton>
                            </CardActions>
                        </Card>
                    ))}
            </Grid2>
            {selectTask && (
                <EditarTarea
                    task={selectTask}
                    open={editModal}
                    setOpen={setEditModal}
                />
            )}
        </Box>
    )
}

export default ListaTarea;