import React, {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {useAuthStore} from '../store/authStore';

type AdminProtectedRoute = {
  children: ReactNode;
};

const AdminProtectedRoute: React.FC<AdminProtectedRoute> = ({children}) => {
  const {user} = useAuthStore();
  const isAdmin = user && user.role === 'admin';

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default AdminProtectedRoute;
