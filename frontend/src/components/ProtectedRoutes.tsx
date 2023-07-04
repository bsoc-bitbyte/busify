import {toast} from 'react-hot-toast';
import {Navigate} from 'react-router-dom';

type UserProtectedRoutetypes = {
  isAuth: boolean;
  children: React.ReactNode;
};

const UserProtectedRoute: React.FC<UserProtectedRoutetypes> = props => {
  if (!props.isAuth) {
    toast.error('You need to login first!');
    return <Navigate to="/" replace />;
  }
  return <>{props.children}</>;
};

export default UserProtectedRoute;
