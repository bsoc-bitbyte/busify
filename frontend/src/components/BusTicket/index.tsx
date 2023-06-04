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
      className="ticket--container"
      sx={{
        display: 'flex',
        height: {xs: '39vw', sm: '33vw', md: '27vw', lg: '21vw'},
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        className="ticket"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: {xs: '85vw', md: '80vw', lg: '70vw'},
          height: {xs: '35vw', sm: '30vw', md: '23vw', lg: '18vw'},
          borderRadius: '0.882vw',
          boxShadow: '0px 0.294vw 0.882vw rgba(0, 0, 0, 0.25)',
        }}
      >
        <Box
          className="left--side--components"
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
            className="checkpoints"
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
            className="checkpoint--components"
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
            <Box
              className="locations"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: '1.7vw',
                padding: '0.44vw 1.33vw',
                marginRight: '7px',
              }}
            >
              {checkpoints[0]}
            </Box>
            <Box
              className="locations"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: '1.7vw',
                padding: '0.44vw 1.33vw',
                marginRight: '7px',
              }}
            >
              {checkpoints[1]}
            </Box>
            <Box
              className="locations"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: '1.7vw',
                padding: '0.44vw 1.33vw',
              }}
            >
              {checkpoints[2]}
            </Box>
          </Box>
          <Box className="time">
            <Typography sx={{fontSize: '4.1vw', fontWeight: '400'}}>
              {time}
            </Typography>
          </Box>
        </Box>
        <Box
          className="right--side--components"
          sx={{
            // backgroundColor:{xs:'red', sm:'white', md:'green', lg:'blue'},
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
            <Typography
              className="rupeeIcon"
              sx={{fontSize: '2.0vw', marginTop: '1.4vw'}}
            >
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
            className="seatsLeft"
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
            className="booking--button"
            sx={{
              width: {xs: '75px', sm: '160px', md: '170px', lg: '190px'},
              height: {xs: '33px', sm: '37px', md: '35px'},
              borderRadius: '0.588vw',
              backgroundColor: '#FBBC05',
            }}
          >
            <ConfirmationNumberIcon
              sx={{
                width: {xs: '16px', sm: '22px', md: '25px'},
                height: {xs: '16px', sm: '22px', md: '25px'},
                marginRight: {xs: '5px', sm: '9px'},
              }}
            ></ConfirmationNumberIcon>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: '400',
                fontSize: {xs: '10.5px', sm: '14px', md: '15px', lg: '17px'},
                color: 'rgba(0, 0, 0, 0.9)',
              }}
            >
              BOOK TICKETS
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
