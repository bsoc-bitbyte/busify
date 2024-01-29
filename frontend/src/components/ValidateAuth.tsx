import {useEffect} from 'react';
import {useAuthStore} from '../store/authStore';
import axios from 'axios';

const ValidateAuth: React.FC = () => {
  const {setIsAuth, setUser, setIsLoading} = useAuthStore();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/auth/me`,
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          setIsAuth(true);
          setUser(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [setIsAuth, setIsLoading, setUser]);
  return <></>;
};
export default ValidateAuth;
