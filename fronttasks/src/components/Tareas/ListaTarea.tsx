import React from "react";
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

const ListaTarea: React.FC = () => {

    const { data: tareas } = useFetchTasks();
    const deleteTask = useDeleteTask();

    const handleDelete = async (id: string) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
            try {
                await deleteTask.mutateAsync(id); // Llamada para eliminar
                alert("Tarea eliminada con éxito.");
            } catch (error) {
                console.error('Error al eliminar la tarea', error)
                alert("Hubo un error al eliminar la tarea.")
            }
        }
    }

    return (
        <Box padding={5}>
            <Typography variant="h4" textAlign="center" gutterBottom>
                Lista de Tareas
            </Typography>
            <div>
                <FormularioTarea />
            </div>
            <Grid2 container spacing={2}>
                {tareas?.map((tarea) => (
                    <Card key={tarea._id} style={{ backgroundColor: "#ffff" }}>
                        <CardContent>
                            <Typography variant="h6">Titulo: {tarea.title}</Typography>
                            <Typography variant="body2">Descripcion: {tarea.description}</Typography>
                            <Typography variant="body2">Prioridad: {tarea.priority}</Typography>
                            <Typography variant="body2">Estado: {tarea.complete ? "Completada" : "Pendiente"}</Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton color="primary"><EditIcon /></IconButton>
                            <IconButton onClick={() => handleDelete(tarea._id)} color="error"><DeleteIcon /></IconButton>
                        </CardActions>
                    </Card>
                ))}

            </Grid2>
        </Box>
    )
}

export default ListaTarea;