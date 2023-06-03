import {Typography, Box, Button} from '@mui/material';
import Navbar from '../../components/Navbar';
import styles from './home.module.scss';
import Footer from '../../components/Footer';
import {Grid} from '@mui/material';
import bus from '../../assets/bus.png';
import bgimg from '../../assets/bgimg.png';
import person from '../../assets/person.png';
import ticket from '../../assets/ticket.png';

const Home = () => {
  return (
    <Box className={styles.mainWrapper}>
      <Navbar />

      <Grid container spacing={10} justifyContent="center" marginTop="1%">
        <Grid spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'relative',
                paddingTop: '60px',
                width: {},
              }}
            >
              <img
                src={bgimg}
                alt="bgimg"
                style={{
                  width: '200%',
                  height: '100%',
                  borderRadius: '15px',
                }}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                width="200%"
                height="90%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  paddingTop: '100px',
                  borderRadius: '62px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  marginTop: '60px',
                }}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '50%',
                    left: '75%',
                    transform: 'translate(-120%, -70%)',
                    color: 'white',
                    fontSize: '4.0rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Effortless transportation for students
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    height: '50px',
                    fontWeight: 'bold',
                    width: '220px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '50%',
                    left: '70%',
                    transform: 'translate(-170%, 250%)',
                  }}
                >
                  See Schedule
                </Button>
              </Box>
            </Box>
          </Grid>
          <Typography
            align="center"
            sx={{fontSize: '40px', fontWeight: 'bold', paddingTop: '70px'}}
          >
            How to Book
          </Typography>
        </Grid>

        <Grid item justifyContent="center" marginBottom="8%">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              height: '250px',
              width: '250px',
              boxShadow: '6px 12px 12px rgba(0, 0, 0, 0.25)',
              borderRadius: '15px',
              '&:hover': {
                boxShadow: '2px 1px 4px 4px rgba(0, 0, 0, 0.25)',
              },
            }}
          >
            <img src={bus} alt="bus" />
            <Typography sx={{fontWeight: 'bold', paddingTop: '12%'}}>
              Search For Bus
            </Typography>
          </Box>
        </Grid>

        <Grid item>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              height: '250px',
              width: '250px',
              boxShadow: '6px 12px 12px rgba(0, 0, 0, 0.25)',
              borderRadius: '15px',
              '&:hover': {
                boxShadow: '2px 1px 4px 4px rgba(0, 0, 0, 0.25)',
              },
            }}
          >
            <img src={ticket} alt="ticket" />
            <Typography sx={{fontWeight: 'bold', paddingTop: '20%'}}>
              Add Tickets
            </Typography>
          </Box>
        </Grid>

        <Grid item>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              height: '250px',
              width: '250px',
              boxShadow: '6px 12px 12px rgba(0, 0, 0, 0.25)',
              borderRadius: '15px',
              '&:hover': {
                boxShadow: '2px 1px 4px 4px rgba(0, 0, 0, 0.25)',
              },
            }}
          >
            <img src={person} alt="person" />
            <Typography sx={{fontWeight: 'bold', paddingTop: '20%'}}>
              Do Payment
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
};

export default Home;
