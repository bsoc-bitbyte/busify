import {Typography, Box} from '@mui/material';
import Navbar from '../../components/Navbar';
import styles from './home.module.scss';
import Footer from '../../components/Footer';
import {TicketData} from '../../components/BusTicket/ticketData';
import BusTicket from '../../components/BusTicket';

const Home = () => {
  return (
    <Box className={styles.mainWrapper}>
      <Navbar />
      <Typography variant="h4">Home Page</Typography>
      <BusTicket {...TicketData} />
      <BusTicket {...TicketData} />
      <Footer />
    </Box>
  );
};

export default Home;
