import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

interface PrivateRouteProps {
    component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
    const token = useAuthStore((state) => state.token);

    return token ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;