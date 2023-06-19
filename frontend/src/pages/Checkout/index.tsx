import {useTheme, Typography, Button, styled, Box} from '@mui/material';
import busIcon from '../../assets/bus-icon.svg';
import arrorIcon from '../../assets/arrowIcon.svg';
import scheduleIcon from '../../assets/schedule-icon.svg';
import {BusDetailsType} from '../../types';
import {useOrderStore} from '../../store/orderStore';
import BusDetailsCard from '../../components/BusDetailsCard';
import Ticketfare from '../../components/Ticketfare';
import {useLocation} from 'react-router-dom';

const ConatinerMain = styled(Box)`
width: {xs: '100%', sm: '66.6667%'},
    padding: '2rem',
`;

const Details = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 2rem 0;
  padding: 1.5rem;
`;

const Icon = styled('img')`
  width: 40px;
  height: 40px;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const FareBreakdown = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 2rem 0;
  padding: 1rem;
`;

const PassengersContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 2rem 0;
  padding: 1rem;
  min-height: 20vh;
`;

const BusDetails = () => {
  const passengerDetail = useOrderStore(state => state.passengerDetail);
  const theme = useTheme();
  const location = useLocation();
  const {from, to, time, ticketQuantity} = location.state;

  return (
    <>
      <ConatinerMain>
        <Typography
          variant="h1"
          fontSize={{xs: '1.5rem', sm: '1.75rem', md: '2rem'}}
          color={theme.palette.secondary.main}
        >
          Checkout
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        ></Box>
        <Box>
          <Typography
            variant="h2"
            fontSize={{xs: '1.5rem', sm: '1.75rem', md: '2rem'}}
            color={theme.palette.secondary.main}
          >
            Bus Details
          </Typography>
          <Details sx={{flexDirection: {xs: 'column', sm: 'row'}}}>
            <BusDetailsCard from={from} to={to} time={time} />
          </Details>
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h2"
              fontSize={{xs: '1.5rem', sm: '1.75rem', md: '2rem'}}
              color={theme.palette.secondary.main}
            >
              Passenger Details
            </Typography>
          </Box>
          <PassengersContainer>
            {passengerDetail.map((passenger, index) => (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" color={theme.palette.secondary.main}>
                  {index + 1}. {passenger.rollNumber}
                </Typography>
              </Box>
            ))}
          </PassengersContainer>
        </Box>
        <Box>
          <Typography
            variant="h2"
            fontSize={{xs: '1.5rem', sm: '1.75rem', md: '2rem'}}
            color={theme.palette.secondary.main}
          >
            Fare Breakdown
          </Typography>
          <Ticketfare />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <Button
            variant="contained"
            // onClick={() => navigate('/Checkout')}
            sx={{
              padding: '0.5rem 2rem',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            Pay Now
          </Button>
        </Box>
      </ConatinerMain>
    </>
  );
};

export default BusDetails;
