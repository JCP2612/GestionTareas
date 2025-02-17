import React, { useEffect, useState } from "react";
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    Select,
    InputLabel,
    Checkbox,
    FormControlLabel,
    MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SelectChangeEvent } from "@mui/material";
import { useUpdateTask } from "../../hooks/useTareaStore"; // Usar el hook de React Query

interface Tarea {
    _id?: string;
    title: string;
    priority: "Alta" | "Media" | "Baja" | "Todas";
    description: string;
    complete: boolean;
}

interface EditarTareaProps {
    task: Tarea;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const EditarTarea: React.FC<EditarTareaProps> = ({ task, open, setOpen }) => {
    const { mutate: updateTask } = useUpdateTask();
    const [taskData, setTaskData] = useState<Tarea>(task);

    useEffect(() => {
        setTaskData(task);
    }, [task]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setTaskData((prev) => ({
            ...prev,
            [name!]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target;
        setTaskData((prev) => ({
            ...prev,
            [name]: name === "priority" ? (value as "Baja" | "Media" | "Alta") : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateTask({ id: task._id!, tarea: taskData }, {
            onSuccess: () => {
                setTaskData({ title: "", description: "", priority: "Baja", complete: false });
                alert("Tarea actualizada exitosamente");
                setOpen(false);
            },
            onError: (error) => {
                console.error("Error al actualizar la tarea", error);
                alert("Error al actualizar la tarea");
            },
        });
    };

    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    backdropFilter: "blur(4px)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        width: 400,
                        border: "1px solid #ddd",
                    }}
                >
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h6">Editar Tarea</Typography>
                        <IconButton onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Titulo"
                        name="title"
                        value={taskData.title}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Descripcion"
                        value={taskData.description}
                        onChange={handleChange}
                        name="description"
                    />
                    <InputLabel id="priority-label">Prioridad</InputLabel>
                    <Select
                        name="priority"
                        labelId="priority-label"
                        value={taskData.priority}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value="Baja">Baja</MenuItem>
                        <MenuItem value="Media">Media</MenuItem>
                        <MenuItem value="Alta">Alta</MenuItem>
                    </Select>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="complete"
                                checked={taskData.complete}
                                onChange={handleChange}
                                sx={{
                                    color: "#43a047",
                                    "&.Mui-checked": {
                                        color: "#43a047",
                                    },
                                }}
                            />
                        }
                        label="Marcar tarea como completada"
                    />
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Button onClick={() => setOpen(false)} color="secondary" sx={{ mr: 1 }}>
                            Cancelar
                        </Button>
                        <Button variant="contained" color="primary" type="submit" >
                            Actualizar Tarea
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default EditarTarea;