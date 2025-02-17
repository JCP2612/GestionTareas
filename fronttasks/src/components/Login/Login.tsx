import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2'
import { useLogin } from '../../hooks/userRegister';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const mutation = useLogin();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ email, password }, {
            onSuccess: () => {
                navigate('/tasks');
            },
            onError: (error) => {
                console.error('Error al iniciar sesión:', error);
            }
        })
    };

    return (
        <Grid2
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
        >
            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={3}>
                <Card style={{ width: 400 }}>
                    <CardContent>
                        <Typography variant="h5" textAlign="center" gutterBottom>
                            Iniciar Sesión
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={3}>
                            <TextField name="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} label="Correo" id="outlined-size-normal"
                                required />
                            <TextField label="Contraseña" id="outlined-size-normal" type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </Box>
                    </CardContent>
                    <CardActions sx={{ mt: 2, px: 2, py: 2 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 1 }}
                        >
                            Iniciar Sesión
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 1 }}
                            onClick={() => window.location.href = '/register'}
                        >
                            Registrarse
                        </Button>
                    </CardActions>
                </Card>
            </Box>

        </Grid2>
    );
}

export default Login;


