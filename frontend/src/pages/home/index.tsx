import {Typography, Box} from '@mui/material';
import Navbar from '../../components/Navbar';
import styles from './home.module.scss';
import Footer from '../../components/Footer';
// import CustomButton from '../../components/CustomButton/index';

const Home = () => {
  // const ButtonClicked = () => {
  //   console.log('Button clicked!');
  // };

  return (
    <Box className={styles.mainWrapper}>
      <Navbar />
      <Typography variant="h4">Home Page</Typography>
      <Footer />
      {/* <CustomButton title='click here to submit' label="submit" size="medium" color="primary"/> */}
    </Box>
  );
};

export default Home;
