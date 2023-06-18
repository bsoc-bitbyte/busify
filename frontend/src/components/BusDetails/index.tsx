import {useState} from 'react';
import {
  useTheme,
  Typography,
  Drawer,
  Button,
  styled,
  Box,
  TextField,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import {BusDetailsType} from '../../types';
import {useNavigate} from 'react-router-dom';
import {useOrderStore} from '../../store/orderStore';
import toast, {Toaster} from 'react-hot-toast';
import React from 'react';
import BusDetailsCard from '../BusDetailsCard';

interface Passenger {
  rollNumber: string;
}

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

const CustomTextField = styled(TextField)`
  .MuiInput-underline:after {
    border-bottom-color: rgba(0, 0, 0, 0.5);
  }

  .MuiFormLabel-root.Mui-focused {
    color: rgba(0, 0, 0, 0.7);
  }

  .MuiFormLabel-root {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    .MuiFormLabel-root {
      font-size: 12px;
    }
  }

  margin: 0;
`;

const CrossIcon = styled(CloseIcon)`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 2px;
`;

const AddPassengerIcon = styled(AddIcon)`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 2px;
`;

const AddPassengerButton = styled(Button)`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  min-width: max-content;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
    background-color: transparent;
  }
`;

const BusDetails = ({time, from, to, disabled}: BusDetailsType) => {
  const addPassenger = useOrderStore(state => state.addPassenger);
  const removePassenger = useOrderStore(state => state.removePassenger);
  const passengerDetail = useOrderStore(state => state.passengerDetail);
  const navigate = useNavigate();
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [isAddingPassenger, setIsAddingPassenger] = useState(false);
  const [isToasterActive, setIsToasterActive] = React.useState(false);
  const notify = () => {
    if (!isToasterActive) {
      setIsToasterActive(true);

      toast.error('Add atleast one passenger', {
        position: 'top-center',
        duration: 3000,
      });
    }

    setTimeout(() => {
      setIsToasterActive(false);
    }, 3000);
  };

  const drawerstyle = {
    width: {xs: '100%', sm: '66.6667%'},
    padding: '2rem',
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleAddPassenger = (event: React.FormEvent) => {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const rollNumber = input.value.trim().toUpperCase();

    if (
      rollNumber !== '' &&
      passengers.length < 4 &&
      !passengers.some(p => p.rollNumber === rollNumber) &&
      !rollNumber.includes(' ')
    ) {
      const newPassenger: Passenger = {rollNumber};

      setPassengers(prevPassengers => [...prevPassengers, newPassenger]);
      input.value = '';
      setIsAddingPassenger(false);
      addPassenger(rollNumber);
    }
  };

  const handleRemovePassenger = (rollNumber: string) => {
    setPassengers(prevPassengers =>
      prevPassengers.filter(p => p.rollNumber !== rollNumber)
    );
    removePassenger(rollNumber);
  };

  return (
    <>
      <Button
        onClick={openDrawer}
        variant="contained"
        disabled={disabled}
        startIcon={<ConfirmationNumberIcon />}
        sx={{
          padding: '0.5vw 1.2vw',
          fontSize: {xs: '10px', sm: '12px', md: '15px'},
          minWidth: 'max-content',
          '&:hover': {
            backgroundColor: '#FBBC05',
          },
        }}
      >
        Book Ticket
      </Button>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: drawerstyle,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={closeDrawer}
            sx={{display: {xs: 'flex', sm: 'none'}}}
            size="small"
          >
            <CrossIcon sx={{fontSize: {md: '1rem'}}} />
          </IconButton>
        </Box>
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
            {!isAddingPassenger ? (
              <AddPassengerButton
                variant="text"
                onClick={() => setIsAddingPassenger(true)}
                style={{display: passengers.length === 4 ? 'none' : 'flex'}}
              >
                <AddPassengerIcon sx={{fontSize: {md: '1rem'}}} />
                <Typography
                  variant="h6"
                  color={theme.palette.common.black}
                  textTransform="none"
                  sx={{
                    display: {xs: 'none', sm: 'block'},
                    marginLeft: '0.5rem',
                  }}
                >
                  Add a new passenger
                </Typography>
              </AddPassengerButton>
            ) : (
              <IconButton
                onClick={() => setIsAddingPassenger(false)}
                size="small"
              >
                <CrossIcon sx={{fontSize: {md: '1rem'}}} />
              </IconButton>
            )}
          </Box>
          <PassengersContainer>
            {passengers.map((passenger, index) => (
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
                <IconButton
                  onClick={() => handleRemovePassenger(passenger.rollNumber)}
                  size="small"
                >
                  <CrossIcon sx={{fontSize: {md: '1rem'}}} />
                </IconButton>
              </Box>
            ))}
            {!isAddingPassenger ? (
              passengers.length === 0 && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '20vh',
                  }}
                >
                  <Typography
                    variant="h5"
                    color={theme.palette.common.black}
                    fontSize={{xs: '1rem', md: '1.25rem'}}
                  >
                    No Passengers are added currently
                  </Typography>
                </Box>
              )
            ) : (
              <form onSubmit={handleAddPassenger}>
                <CustomTextField
                  label="Write passenger’s roll number"
                  variant="standard"
                  fullWidth
                  onKeyDown={event => {
                    if (event.key === 'Enter') {
                      handleAddPassenger(event);
                    }
                  }}
                  onBlur={event => handleAddPassenger(event)}
                />
              </form>
            )}
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
            onClick={() => {
              passengerDetail.length
                ? navigate('/Checkout', {
                    state: {
                      from,
                      to,
                      time,
                    },
                  })
                : notify();
            }}
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
          <Toaster />
        </Box>
      </Drawer>
    </>
  );
};

export default BusDetails;
