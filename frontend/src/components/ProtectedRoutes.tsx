import {toast} from 'react-hot-toast';
import {useAuthStore} from '../store/authStore';
import {Navigate} from 'react-router-dom';
import {Box, CircularProgress} from '@mui/material';

type UserProtectedRoutetypes = {
  children: React.ReactNode;
};

const UserProtectedRoute: React.FC<UserProtectedRoutetypes> = ({children}) => {
  const {isAuth, isloading} = useAuthStore();

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

  if (!isAuth) {
    toast.error('You need to login first!');
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default UserProtectedRoute;
