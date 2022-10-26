import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Spinner animation="grow" />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children;

};

export default PrivateRoute;