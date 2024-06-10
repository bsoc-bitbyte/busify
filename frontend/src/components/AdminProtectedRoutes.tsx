import {toast} from 'react-hot-toast';
import {useAuthStore} from '../store/authStore';
import {Navigate} from 'react-router-dom';
import {Box, CircularProgress} from '@mui/material';

type AdminProtectedRoutetypes = {
  children: React.ReactNode;
};

const AdminProtectedRoute: React.FC<AdminProtectedRoutetypes> = ({
  children,
}) => {
  const {user, isloading} = useAuthStore();

  if (isloading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
        }}
      >
        <CircularProgress size={100} />
      </Box>
    );
  }

  if (user?.role !== 'admin') {
    toast.error('Your role should be Admin to continue');
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default AdminProtectedRoute;
