import {Grid, Typography} from '@mui/material';
import BusTicket from '../../components/BusTicket';
import theme from '../../theme';
import {useScreen} from '../../customHooks/useScreen';
import {useEffect, useState} from 'react';
import {BusTicketType} from '../../types';
import axios from 'axios';

const BusSchedule = () => {
  const currentScreen = useScreen();
  const [schedule, setSchedule] = useState<BusTicketType[]>([]);

  useEffect(() => {
    const getScheduleData = async () => {
      const res = await axios.get('http://localhost:3333/bus/schedule/', {
        withCredentials: true,
      });
      if (res.status === 200) {
        setSchedule(res.data.schedule);
      }
    };
    getScheduleData();
  }, []);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          md={12}
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
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
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
            {schedule.map((TicketData, index) => (
              <BusTicket
                checkpoints={TicketData.checkpoints}
                price={TicketData.ticketPrice}
                time={TicketData.departureTime}
                seatsLeft={TicketData.ticketPrice}
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
