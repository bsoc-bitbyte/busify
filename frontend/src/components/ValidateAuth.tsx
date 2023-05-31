import {useEffect} from 'react';
import {useAuthStore} from '../store/authStore';
import axios from 'axios';

const ValidateAuth: React.FC = () => {
  const {setIsAuth, setUser} = useAuthStore();
  useEffect(() => {
    const checkAuth = async () => {
      const res = await axios.get('http://localhost:3333/auth/me', {
        withCredentials: true,
      });
      if (res.status === 200) {
        setIsAuth(true);
        setUser(res.data);
      }
    };
    checkAuth();
  }, [setIsAuth, setUser]);
  return <></>;
};
export default ValidateAuth;
