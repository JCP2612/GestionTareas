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

    return (
        <Box padding={5}>
            <Typography variant="h4" textAlign="center" gutterBottom>
                Lista de Tareas
            </Typography>
            <div>
                <FormularioTarea />
            </div>
            <Grid2 container spacing={2}>
                <Card style={{ backgroundColor: "#ffff" }}>
                    <CardContent>
                        <Typography variant="h6">Titulo: Hola</Typography>
                        <Typography variant="body2">Descripcion: Esto es una prueba</Typography>
                        <Typography variant="body2">Prioridad: Alta</Typography>
                        <Typography variant="body2">Estado: Pendiente</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton color="primary"><EditIcon /></IconButton>
                        <IconButton color="error"><DeleteIcon /></IconButton>
                    </CardActions>
                </Card>
            </Grid2>
        </Box>
    )
}

export default ListaTarea;