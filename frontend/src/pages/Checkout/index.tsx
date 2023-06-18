import {useTheme, Typography, Button, styled, Box} from '@mui/material';
import busIcon from '../../assets/bus-icon.svg';
import arrorIcon from '../../assets/arrowIcon.svg';
import scheduleIcon from '../../assets/schedule-icon.svg';
import {BusDetailsType} from '../../types';
import {useOrderStore} from '../../store/orderStore';

interface Passenger {
  rollNumber: string;
}
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

const BusDetails = ({disabled}: BusDetailsType) => {
  const passengerDetail = useOrderStore(state => state.passengerDetail);
  const theme = useTheme();

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
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: {xs: '10px', md: '2rem'},
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: {xs: '5px', md: '10px'},
                }}
              >
                <Icon src={busIcon} alt="Bus Icon" />
                <Box>
                  <Typography
                    variant="h6"
                    fontSize={{xs: '0.8rem', md: '1rem'}}
                    color={theme.palette.common.black}
                  >
                    From
                  </Typography>
                  <Typography
                    variant="h4"
                    fontSize={{xs: '1.25rem', md: '1.5rem'}}
                    color={theme.palette.secondary.main}
                  >
                    Rewa Residency
                  </Typography>
                </Box>
              </Box>
              <img src={arrorIcon} alt="Arrow Icon" />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: {xs: '5px', md: '10px'},
                }}
              >
                <Icon src={busIcon} alt="Bus Icon" />
                <Box>
                  <Typography
                    variant="h6"
                    fontSize={{xs: '0.8rem', md: '1rem'}}
                    color={theme.palette.common.black}
                  >
                    To
                  </Typography>
                  <Typography
                    variant="h4"
                    fontSize={{xs: '1.25rem', md: '1.5rem'}}
                    color={theme.palette.secondary.main}
                  >
                    Sadar
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: '2px',
                height: '5vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                margin: '0 2rem',
                display: {xs: 'none', sm: 'block'},
              }}
            />

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Icon src={scheduleIcon} alt="Schedule Icon" />
              <Box>
                <Typography
                  variant="h6"
                  fontSize={{xs: '0.8rem', md: '1rem'}}
                  color={theme.palette.common.black}
                >
                  Date and Time
                </Typography>
                <Typography
                  variant="h4"
                  fontSize={{xs: '1.25rem', md: '1.5rem'}}
                  color={theme.palette.secondary.main}
                >
                  12th May, 3:30PM
                </Typography>
              </Box>
            </Box>
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
          <FareBreakdown>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" color={theme.palette.secondary.main}>
                Ticket Price
              </Typography>
              <Box sx={{display: 'flex', gap: '2px'}}>
                <Typography>&#x20B9;</Typography>
                <Typography variant="h6" color={theme.palette.secondary.main}>
                  0
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" color={theme.palette.secondary.main}>
                Ticket Quantity
              </Typography>
              <Box sx={{display: 'flex', gap: '2px'}}>
                <Typography>&#x20B9;</Typography>
                <Typography variant="h6" color={theme.palette.secondary.main}>
                  0
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1rem',
              }}
            >
              <Typography
                variant="h4"
                color={theme.palette.secondary.main}
                sx={{
                  fontSize: {xs: '1.25rem', md: '1.5rem'},
                  fontWeight: {xs: 600, md: 700},
                }}
              >
                NET AMOUNT TO PAY
              </Typography>
              <Box sx={{display: 'flex', gap: '2px'}}>
                <Typography fontWeight={600}>&#x20B9;</Typography>
                <Typography
                  variant="h1"
                  color={theme.palette.secondary.main}
                  fontWeight={600}
                >
                  0
                </Typography>
              </Box>
            </Box>
          </FareBreakdown>
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
