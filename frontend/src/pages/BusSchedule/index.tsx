import {Grid, Typography} from '@mui/material';
import BusTicket from '../../components/BusTicket';
import {TicketData} from '../../components/BusTicket/ticketData';
import theme from '../../theme';
import {useScreen} from '../../customHooks/useScreen';

const BusSchedule = () => {
  const currentScreen = useScreen();

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          lg={10}
          sx={{
            border: '1px solid rgba(0, 0, 0, 0.2)',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            marginTop: '2.5rem',
            padding: currentScreen === 'xs' ? '1rem' : '1.5rem 3rem',
          }}
        >
          {[
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ].map((day, index) => (
            <Grid item xs={1.2} key={index} textAlign="center">
              <Typography color={theme.palette.secondary.main}>
                {currentScreen === 'xs' || currentScreen === 'md'
                  ? day.slice(0, 3)
                  : day}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" marginTop="2rem">
          <Grid item>
            {[...Array(5)].map((_, index) => (
              <BusTicket
                checkpoints={TicketData.checkpoints}
                price={TicketData.price}
                seatsLeft={TicketData.seatsLeft}
                time={TicketData.time}
                key={index}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BusSchedule;
