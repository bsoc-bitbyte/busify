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
import busIcon from '../../assets/bus-icon.svg';
import arrorIcon from '../../assets/arrowIcon.svg';
import scheduleIcon from '../../assets/schedule-icon.svg';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import {BusDetailsType} from '../../types';

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
  padding: 1.5rem 1rem;
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
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: rgba(0, 0, 0, 0.5);
    }
    &.Mui-focused fieldset {
      border-color: rgba(0, 0, 0, 0.5);
    }
  }
  .MuiFormLabel-root.Mui-focused {
    color: rgba(0, 0, 0, 0.7);
  }

  margin: 1rem 0;
`;

const CrossIcon = styled(CloseIcon)`
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 2px;
`;

const AddPassengerIcon = styled(AddIcon)`
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 2px;
`;

const AddPassengerButton = styled(Button)`
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    color: rgba(0, 0, 0, 0.5);
    background-color: transparent;
  }
`;

const BusDetails = ({disabled}: BusDetailsType) => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [isAddingPassenger, setIsAddingPassenger] = useState(false);

  const drawerstyle = {
    width: '66.6667%',
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
    }
  };

  const handleRemovePassenger = (rollNumber: string) => {
    setPassengers(prevPassengers =>
      prevPassengers.filter(p => p.rollNumber !== rollNumber)
    );
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
        <Box>
          <Typography variant="h2" color={theme.palette.secondary.main}>
            Bus Details
          </Typography>
          <Details>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <img src={busIcon} alt="Bus Icon" />
              <Box>
                <Typography variant="h6" color={theme.palette.common.black}>
                  From
                </Typography>
                <Typography variant="h4" color={theme.palette.secondary.main}>
                  Rewa Residency
                </Typography>
              </Box>
            </Box>
            <img src={arrorIcon} alt="Arrow Icon" />
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <img src={busIcon} alt="Bus Icon" />
              <Box>
                <Typography variant="h6" color={theme.palette.common.black}>
                  To
                </Typography>
                <Typography variant="h4" color={theme.palette.secondary.main}>
                  Sadar
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: '2px',
                height: '5vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                margin: '0 2rem',
              }}
            />

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <img src={scheduleIcon} alt="Schedule Icon" />
              <Box>
                <Typography variant="h6" color="text.primary">
                  Date and Time
                </Typography>
                <Typography variant="h4" color={theme.palette.secondary.main}>
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
            <Typography variant="h2" color={theme.palette.secondary.main}>
              Passenger Details
            </Typography>
            {!isAddingPassenger ? (
              <AddPassengerButton
                variant="text"
                startIcon={<AddPassengerIcon />}
                onClick={() => setIsAddingPassenger(true)}
                style={{display: passengers.length === 4 ? 'none' : 'flex'}}
              >
                Add a new passenger
              </AddPassengerButton>
            ) : (
              <IconButton
                onClick={() => setIsAddingPassenger(false)}
                size="small"
              >
                <CrossIcon />
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
                  <CrossIcon />
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
                  <Typography variant="h5" color={theme.palette.common.black}>
                    No Passengers are added currently
                  </Typography>
                </Box>
              )
            ) : (
              <form onSubmit={handleAddPassenger}>
                <CustomTextField
                  label="Write passenger’s roll number"
                  variant="outlined"
                  fullWidth
                  onKeyPress={event => {
                    if (event.key === 'Enter') {
                      handleAddPassenger(event);
                    }
                  }}
                />
              </form>
            )}
          </PassengersContainer>
        </Box>
        <Box>
          <Typography variant="h2" color={theme.palette.secondary.main}>
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
                fontWeight={600}
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
      </Drawer>
    </>
  );
};

export default BusDetails;
