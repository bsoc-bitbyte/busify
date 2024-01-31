import React, {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {useAuthStore} from '../store/authStore';
import {toast} from 'react-hot-toast';

type AdminProtectedRoute = {
  children: ReactNode;
};

const AdminProtectedRoute: React.FC<AdminProtectedRoute> = ({children}) => {
  const {user} = useAuthStore();
  const isAdmin = user && user.role === 'admin';

  if (!isAdmin) {
    toast.error('Access denied!', { position: toast.POSITION.TOP_CENTER });
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default AdminProtectedRoute;
