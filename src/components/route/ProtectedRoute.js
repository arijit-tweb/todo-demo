import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const location = useLocation();
  const token_ = localStorage.getItem('token');
  
  return token_ ? children : <Navigate to="/login" state={{from: location}} replace/>
}

export default ProtectedRoute;