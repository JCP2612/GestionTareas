import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2'


function Registro() {
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
                        Registro
                    </Typography>
                    <form >
                        <Box display="flex" flexDirection="column" gap={2}>
                            <TextField label="Correo" id="outlined-size-normal" defaultValue="Normal" />
                            <TextField label="Contraseña" id="outlined-size-normal" defaultValue="Normal" />
                        </Box>
                    </form>
                </CardContent>
                <CardActions>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Crear cuenta
                    </Button>
                </CardActions>
            </Card>
        </Grid2>
    );
}

export default Registro;