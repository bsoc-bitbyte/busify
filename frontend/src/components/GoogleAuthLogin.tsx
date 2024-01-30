import {Box, CircularProgress} from '@mui/material';
import axios from 'axios';
import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
const GoogleAuthLogin = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const googleLoginHandler = async () => {
      const code = searchParams.get('code');
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/google`,
        {
          code,
        },
        {
          withCredentials: true,
        }
      );
      window.location.replace(import.meta.env.VITE_FRONTEND_URL);
    };
    googleLoginHandler();
  }, [searchParams]);

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
};
export default GoogleAuthLogin;
