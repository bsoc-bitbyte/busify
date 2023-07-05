import {Grid, Typography} from '@mui/material';
import BusTicket from '../../components/BusTicket';
import theme from '../../theme';
import {useScreen} from '../../customHooks/useScreen';
import {useEffect, useState} from 'react';
import {BusTicketType} from '../../types';
import axios from 'axios';
const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const BusSchedule = () => {
  const currentScreen = useScreen();
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [schedule, setSchedule] = useState<BusTicketType[]>([]);
  const [today, setToday] = useState<Date>(new Date());

  useEffect(() => {
    const getScheduleData = async () => {
      const res = await axios.get('http://localhost:3333/bus/schedule/', {
        withCredentials: true,
      });
      if (res.status === 200) {
        setSchedule(res.data.schedule);
        setToday(new Date(res.data.today));
        setSelectedDay(weekDays[today.getDay()]);
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
          lg={10}
          sx={{
            border: '1px solid rgba(0, 0, 0, 0.2)',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            marginTop: '2.5rem',
            padding: currentScreen === 'xs' ? '1rem' : '1.5rem 3rem',
          }}
        >
          {weekDays.map((day, index) => (
            <Grid item xs={1.2} key={index} textAlign="center">
              <Typography
                onClick={() => setSelectedDay(day)}
                sx={{
                  cursor: 'pointer',
                  color: selectedDay === day ? theme.palette.primary.main : '',
                  fontWeight: selectedDay === day ? 'bold' : 'normal',
                  padding: '0.25rem',
                  borderRadius: '8px',
                }}
              >
                {currentScreen === 'xs' || currentScreen === 'md'
                  ? day.slice(0, 3)
                  : day}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" marginTop="2rem">
          <Grid item>
            {schedule.map((TicketData, index) => {
              if (TicketData.days.includes(selectedDay)) {
                return (
                  <BusTicket
                    checkpoints={TicketData.checkpoints}
                    price={TicketData.ticketPrice}
                    time={TicketData.departureTime}
                    disabled={selectedDay !== weekDays[today.getDay()]}
                    seatsLeft={50}
                    key={index}
                    to={TicketData.to}
                    from={TicketData.from}
                  />
                );
              }
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BusSchedule;
