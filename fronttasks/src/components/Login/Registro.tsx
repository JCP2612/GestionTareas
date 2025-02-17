import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import { useRegister } from '../../hooks/userRegister';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Registro: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const mutation = useRegister();
    const [open, setOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ email, password, name },
            {
                onSuccess: () => {
                    setOpen(true); // Abre el diálogo de éxito
                    // navigate('/'); // Redirige al usuario al componente de login
                },
                onError: (error) => {
                    console.error('Error al iniciar sesión:', error);
                }
            }
        );

    };
    const handleClose = () => {
        setOpen(false);
        navigate('/'); // Redirige al usuario al componente de login
    };

    return (
        <Grid2
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}
        >
            <Card style={{ width: 400 }}>
                <CardContent>
                    <Typography variant="h5" textAlign="center" gutterBottom>
                        Registro
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
                        <TextField
                            label="Nombre"
                            id="outlined-size-normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <TextField
                            label="Correo"
                            id="outlined-size-normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            label="Contraseña"
                            id="outlined-size-normal"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <CardActions>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Crear cuenta
                            </Button>
                        </CardActions>
                    </Box>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Registro Exitoso</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Tu cuenta ha sido creada exitosamente. Serás redirigido a la página de inicio de sesión.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid2>
    );
};

export default Registro;