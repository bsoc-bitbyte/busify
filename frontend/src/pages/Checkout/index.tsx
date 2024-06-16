import {useTheme, Typography, Button, styled, Box} from '@mui/material';
import {useOrderStore} from '../../store/orderStore';
import BusDetailsCard from '../../components/BusDetailsCard';
import FareBreakDownCard from '../../components/FareBreakdownCard';
import {Navigate} from 'react-router-dom';
import {toast} from 'react-hot-toast';
import {useEffect, useState} from 'react';
import {loadScript} from '../../utils/razorpay';
import {notify} from '../../utils/notify';
import axios from 'axios';
import {useAuthStore} from '../../store/authStore';

const ConatinerMain = styled(Box)`
  width: {xs: '100%', sm: '66.6667%'},
  padding: '2rem',
  margin: '2 2',
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
  const {passengerDetail, ticketQuantity, price, scheduleId} = useOrderStore();
  const [razorpayLoading, setRazorpayLoading] = useState(false);
  const {user} = useAuthStore();
  const theme = useTheme();

  useEffect(() => {}, []);

  const handleTicketCreated = async (orderId: String) => {
    const ticketCreated = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/ticket/create`,
      {
        orderId: orderId,
        passengerEmail: passengerDetail,
      },
      {
        withCredentials: true,
      }
    );

    return ticketCreated;
  };

  async function displayRazorpay() {
    try {
      setRazorpayLoading(true);
      const loadedScript = await loadScript(
        'https://checkout.razorpay.com/v1/checkout.js'
      );
      if (!loadedScript) {
        notify(
          'There is some problem with your internet connection. Please try again',
          'error'
        );
        return;
      }
      const order = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/orders/create`,
        {
          ticketQuantity,
          scheduleId,
        },
        {
          withCredentials: true,
        }
      );
      const options = {
        key: import.meta.env.VITE_RAZORPAY_ID,
        currency: 'INR',
        amount: (order.data.amount * 100).toString(),
        order_id: order.data.id,
        name: 'Pay for your ticket',
        description: 'Thank you for nothing. Please give us some money',
        image: `${import.meta.env.VITE_FRONTEND_URL}/busIcon.svg`,
        handler: function (response: any) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
          handleTicketCreated(response.razorpay_order_id);
        },
        prefill: {
          email: user?.email,
        },
      };
      const _window: any = window;
      const paymentObject = new _window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      notify('Unable to load Razorpay', 'error');
    } finally {
      setRazorpayLoading(false);
    }
  }
  return passengerDetail.length === 0 ? (
    <>
      {toast.error('Please book a ticket first!')}
      <Navigate to="/bus-schedule" />
    </>
  ) : (
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
            flexDirection: {xs: 'column', lg: 'row'},
            justifyContent: 'space-between',
            gap: '4rem',
          }}
        >
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
                      {index + 1}. {passenger.emailID}
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
              <FareBreakDownCard />
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: {xs: '11.5rem', md: '14rem'},
              }}
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
                    {ticketQuantity * price}
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
                    {Math.ceil(ticketQuantity * price * 0.02)}
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
                    {ticketQuantity * price +
                      Math.ceil(ticketQuantity * price * 0.02)}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" marginTop="1rem">
                <Button
                  variant="contained"
                  disabled={razorpayLoading}
                  onClick={displayRazorpay}
                  sx={{
                    padding: {xs: '0.7rem', sm: '1rem'},
                    borderRadius: '8px',
                    width: {xs: '80%', lg: '100%'},
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                    },
                  }}
                >
                  {razorpayLoading ? 'Loading...' : 'Pay Now'}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </ConatinerMain>
    </>
  );
};

export default BusDetails;
