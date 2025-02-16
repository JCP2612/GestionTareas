import React from "react";
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    Select,
    // MenuItem,
    InputLabel,
    OutlinedInput,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
// import { SelectChangeEvent } from '@mui/material/Select';
import CloseIcon from "@mui/icons-material/Close";
import { create } from "zustand";
interface Modal {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const useModal = create<Modal>((set) => ({
    open: false,
    setOpen: (open) => set({ open })
}))

const FormularioTarea: React.FC = () => {
    const { open, setOpen } = useModal();

    return (
        <>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Crear nueva tarea</Button>
            <Modal open={open} onClose={() => setOpen(false)} sx={{
                backdropFilter: "blur(4px)", // Agrega un desenfoque al fondo
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro con opacidad
            }}>
                <Box
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
                    }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h6">Crear Tarea</Typography>
                        <IconButton onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Titulo"
                            name="name"
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Descripcion"
                            name="name"
                        />
                        <InputLabel id="demo-multiple-name-label">Prioridad</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            input={<OutlinedInput label="Name" />}
                            value="Selecciona una prioridad"
                        >
                        </Select>
                        <FormControlLabel
                            control={
                                <Checkbox defaultChecked sx={{
                                    color: "#43a047",
                                    '&.Mui-checked': {
                                        color: "#43a047",
                                    }
                                }}></Checkbox>
                            }
                            label="Marcar tarea como completada" />

                    </form>
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Button onClick={() => setOpen(false)} color="secondary" sx={{ mr: 1 }}>Cancelar</Button>
                        <Button variant="contained" color="primary">Agregar tarea</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default FormularioTarea;