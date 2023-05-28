import {Typography, Box} from '@mui/material';
import Navbar from '../../components/Navbar';
import styles from './home.module.scss';

const Home = () => {
  return (
    <Box className={styles.mainWrapper}>
      <Navbar />
      <Typography variant="h4">Home Page</Typography>
    </Box>
  );
};

export default Home;
