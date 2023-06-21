import {useTheme, Typography, Button, styled, Box} from '@mui/material';
import {useOrderStore} from '../../store/orderStore';
import BusDetailsCard from '../../components/BusDetailsCard';
import Ticketfare from '../../components/FareBreakdownCard';

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
  const ticketQuantity = useOrderStore(state => state.ticketQuantity);
  const theme = useTheme();
  return (
    <>
      <ConatinerMain>
        <Typography
          variant="h2"
          fontSize={{xs: '2.5rem', sm: '2.75rem', md: '3rem'}}
          marginTop="1.5rem"
          marginBottom="2.75rem"
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
        <Box display="flex" justifyContent="space-between" gap="4rem">
          <Box>
            <Box>
              <Typography
                variant="h2"
                fontSize={{xs: '1.5rem', sm: '1.75rem', md: '2rem'}}
                color={theme.palette.secondary.main}
              >
                Bus Details
              </Typography>
              <Details sx={{flexDirection: {xs: 'column', sm: 'row'}}}>
                <BusDetailsCard />
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
                    <Typography
                      variant="h6"
                      color={theme.palette.secondary.main}
                    >
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
            ></Box>
          </Box>
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="7.5rem"
            >
              <Box display="flex" justifyContent="space-between" gap="7rem">
                <Typography
                  variant="body2"
                  fontSize="1rem"
                  color={theme.palette.secondary.main}
                >
                  Total Amount
                </Typography>
                <Box display="flex">
                  <Typography fontSize="1.1rem" fontWeight="600">
                    &#x20B9;
                  </Typography>
                  <Typography fontSize="1.1rem" fontWeight="600">
                    {ticketQuantity * 20}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" gap="7rem">
                <Typography
                  variant="body2"
                  fontSize="1rem"
                  color={theme.palette.secondary.main}
                >
                  Processing Fee
                </Typography>
                <Box display="flex">
                  <Typography fontSize="1.1rem" fontWeight="600">
                    &#x20B9;
                  </Typography>
                  <Typography fontSize="1.1rem" fontWeight="600">
                    {Math.ceil(ticketQuantity * 20 * 0.02)}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" gap="7rem">
                <Typography
                  variant="h1"
                  fontSize="1rem"
                  color={theme.palette.secondary.main}
                >
                  Grand Total
                </Typography>
                <Box display="flex">
                  <Typography fontSize="1.1rem" fontWeight="800">
                    &#x20B9;
                  </Typography>
                  <Typography fontSize="1.1rem" fontWeight="800">
                    {ticketQuantity * 20 +
                      Math.ceil(ticketQuantity * 20 * 0.02)}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box marginTop="2rem">
              <Button
                variant="contained"
                sx={{
                  padding: '0.5rem 2rem',
                  borderRadius: '8px',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              >
                Pay Now
              </Button>
            </Box>
          </Box>
        </Box>
      </ConatinerMain>
    </>
  );
};

export default BusDetails;
