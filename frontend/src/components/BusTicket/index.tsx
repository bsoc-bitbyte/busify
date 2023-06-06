import {Typography, Box, Button} from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import type {BusTicketData} from './ticketData';

export default function BusTicket({
  checkpoints,
  time,
  price,
  seatsLeft,
}: BusTicketData) {
  return (
    <Box
      sx={{
        display: 'flex',
        height: {xs: '39vw', sm: '33vw', md: '27vw', lg: '21vw'},
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: {xs: '85vw', md: '80vw', lg: '70vw'},
          height: {xs: '35vw', sm: '30vw', md: '23vw', lg: '18vw'},
          borderRadius: '0.882vw',
          border: '1px solid rgba(0, 0, 0, 0.2)',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            width: {xs: '49vw', md: '49vw'},
            padding: '0vw 1.5vw',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <ShareLocationIcon
              sx={{
                width: {xs: '15px', sm: '18px', md: '24px'},
                marginRight: '0.5vw',
              }}
            ></ShareLocationIcon>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: {xs: '13px', sm: '15px', md: '20px'},
              }}
            >
              Checkpoints
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              fontWeight: '400',
              fontSize: {xs: '10px', sm: '12px', md: '15px'},
              color: 'rgba(255, 255, 255, 0.9)',
              width: {xs: '105%', sm: '105%'},
            }}
          >
            {checkpoints.map((checkpoint, index) => (
              <Box
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: '1.7vw',
                  minWidth: 'fit-content',
                  padding: '0.5vw 1vw',
                  marginRight: '7px',
                }}
                key={index + checkpoint}
              >
                {checkpoint}
              </Box>
            ))}
          </Box>
          <Box className="time">
            <Typography
              fontWeight={400}
              fontSize={{xs: '1.5rem', sm: '2.5rem', md: '3rem'}}
            >
              {time}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: {xs: 'space-evenly', md: 'space-evenly'},
            width: '25vw',
            height: {xs: '35vw', sm: '30vw', md: '23vw', lg: '18vw'},
            alignItems: 'flex-end',
            padding: '0vw 1.5vw',
          }}
        >
          <Box className="Price" sx={{display: 'flex'}}>
            <Typography sx={{fontSize: '2.0vw', marginTop: '1.4vw'}}>
              &#x20B9;
            </Typography>
            <Typography
              className="bus--price"
              sx={{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '5.2vw',
                color: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              {price}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: '400',
              fontSize: {xs: '11.5px', sm: '16px', md: '17px'},
              color: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            {seatsLeft} Seats Left
          </Typography>
          <Button
            variant="contained"
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
        </Box>
      </Box>
    </Box>
  );
}
