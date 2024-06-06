// PrivateRoute.jsx
import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    // Verifique a presença do token de autenticação no localStorage
    const isAuthenticated = Boolean(localStorage.getItem('authToken'));
    const navigate = useNavigate();
  
    if (!isAuthenticated) {
      navigate('/login');
      return null;
    }
  
    return <Route {...rest}>{children}</Route>;
};

export default PrivateRoute;