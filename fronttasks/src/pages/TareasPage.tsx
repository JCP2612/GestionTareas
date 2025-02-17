import React from 'react'
import ListaTarea from '../components/Tareas/ListaTarea';
import { Box, Typography } from '@mui/material';
import useAuthStore from '../store/useAuthStore';

const TareasPage: React.FC = () => {
    const name = useAuthStore((state) => state.name);
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Bienvenido, {name}
            </Typography>
            <ListaTarea />
        </Box>
    )
}

export default TareasPage;