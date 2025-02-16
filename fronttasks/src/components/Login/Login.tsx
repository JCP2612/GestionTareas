import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2'

const Login: React.FC = () => {
    return (
        <Grid2
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
        >
            <Card style={{ width: 400 }}>
                <CardContent>
                    <Typography variant="h5" textAlign="center" gutterBottom>
                        Iniciar Sesión
                    </Typography>
                    <form >
                        <Box display="flex" flexDirection="column" gap={3}>
                            <TextField label="Correo" id="outlined-size-normal" />
                            <TextField label="Contraseña" id="outlined-size-normal" />
                        </Box>
                    </form>
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
                    >
                        Registrarse
                    </Button>
                </CardActions>
            </Card>
        </Grid2>
    );
}

export default Login;


