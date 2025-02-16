import React, { useState } from "react";
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
import { useCreateTask } from "../../hooks/useTareaStore"; // Usar el hook de React Query

const FormularioTarea: React.FC = () => {
    const { mutate: createTask } = useCreateTask();
    const [open, setOpen] = useState(false);
    const [taskData, setTaskData] = useState<{
        title: string;
        description: string;
        priority: "Baja" | "Media" | "Alta";
        complete: boolean;
    }>({
        title: "",
        description: "",
        priority: "Baja",
        complete: false,
    });

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
        createTask(taskData, {
            onSuccess: () => {
                setTaskData({ title: "", description: "", priority: "Baja", complete: false });
                alert("Tarea creada exitosamente");
                setOpen(false);
            },
            onError: (error) => {
                console.error("Error al crear la tarea", error);
                alert("Error al crear la tarea");
            },
        });
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                Crear nueva tarea
            </Button>
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
                        <Typography variant="h6">Crear Tarea</Typography>
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
                            Agregar nueva tarea
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default FormularioTarea;
