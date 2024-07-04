import {Typography, Box} from '@mui/material';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import BusDetails from '../BusDetails';
import {BusTicketData} from '../../types';
import {useOrderStore} from '../../store/orderStore';
export default function BusTicket({
  checkpoints,
  time,
  price,
  seatsLeft,
  from,
  to,
  scheduleId,
  disabled,
}: BusTicketData) {
  useOrderStore.setState(state => ({
    ...state,
    price: price,
    scheduleId,
  }));
  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: {xs: '1.5rem', sm: '2rem'},
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: {xs: '100%', lg: '80%'},
          height: {xs: '11rem', sm: '12rem', md: '14rem'},
          borderRadius: {xs: '10px', sm: '0.882vw'},
          border: '1px solid rgba(0, 0, 0, 0.2)',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: {xs: 'space-around', sm: 'space-evenly'},
            alignItems: 'flex-start',
            height: {xs: '11rem', sm: '12rem', md: '14rem'},
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
              width: {xs: '86%', sm: '105%'},
            }}
          >
            {checkpoints.map((checkpoint, index) => (
              <Box
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: '1.7vw',
                  minWidth: 'fit-content',
                  padding: '2px 8px',
                  marginRight: {xs: '3px', sm: '8px'},
                  marginBottom: {xs: '1.5rem', sm: '0px'},
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
              fontSize={{xs: '1.7rem', sm: '2.5rem', md: '3rem'}}
            >
              {time}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: {xs: 'space-around', sm: 'space-evenly'},
            height: {xs: '11rem', sm: '12rem', md: '14rem'},
            alignItems: 'flex-end',
            padding: '0vw 1.5vw',
            marginRight: {xs: '0.3rem', sm: '0rem'},
          }}
        >
          <Box className="Price" sx={{display: 'flex'}}>
            <Typography
              sx={{
                fontSize: {xs: '13px', sm: '17px', md: '18px'},
                marginTop: '1.4vw',
              }}
            >
              &#x20B9;
            </Typography>
            <Typography
              className="bus--price"
              sx={{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: {xs: '27px', sm: '37px', md: '50px'},
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
              fontSize: {xs: '13px', sm: '17px', md: '19px'},
              color: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            {seatsLeft} Seats Left
          </Typography>
          <BusDetails
            from={from}
            to={to}
            time={time}
            disabled={disabled}
            scheduleId={scheduleId}
          />
        </Box>
      </Box>
    </Box>
  );
}
