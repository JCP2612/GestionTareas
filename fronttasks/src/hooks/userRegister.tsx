import { useMutation } from '@tanstack/react-query';
import { getAuthHeaders } from '../api/tarea';
import useAuthStore from '../store/useAuthStore';

interface UserRegister {
    email: string;
    password: string;
    name: string;
}

interface UserLogin {
    email: string;
    password: string;
}

export const useRegister = () => {
    return useMutation<unknown, Error, UserRegister>({
        mutationFn: (newUser: UserRegister) =>
            fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify(newUser),
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Error en el registro');
                }
                return response.json();
            })
    });
};

export const useLogin = () => {
    const setToken = useAuthStore((state) => state.setToken);
    const setName = useAuthStore((state) => state.setName);

    return useMutation<unknown, Error, UserLogin>({
        mutationFn: (user: UserLogin) =>
            fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify(user),
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Error en el inicio de sesión');
                }
                return response.json();
            }),
        onSuccess: (data) => {
            const tokenData = data as { access_token: string, name: string };
            setToken(tokenData.access_token);
            setName(tokenData.name); // Almacena el nombre del usuario
            console.log('Stored name:', localStorage.getItem("name"));
        },
    });
};