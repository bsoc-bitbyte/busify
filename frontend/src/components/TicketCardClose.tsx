import React, {useEffect, useState} from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
  List,
  ListItem,
} from '@mui/material';
import {styled} from '@mui/material';
import {TicketFetchedData, SchedulesByPassengerEmailPropsClose} from '../types';
import axios from 'axios';
import EmptyModal from './Custom Empty Modal';
import NotFound from '../assets/NotFound.svg';

const Root = styled(Card)({
  borderRadius: '24px',
  overflow: 'visible',
  backgroundColor: '#FFC107',
  width: '441.25px',
  height: '200px',
  margin: '16px auto',
  color: '#fff',
  position: 'relative',
});

const Header = styled(Box)({
  backgroundColor: '#FFC107',
  padding: '8px 32px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTopLeftRadius: '24px',
  borderTopRightRadius: '24px',
  color: '#fff',
  fontWeight: 'bold',
  position: 'relative',
  zIndex: 1,
});

const HeaderText = styled(Typography)({
  color: '#fff',
  fontWeight: 'bold',
  position: 'absolute',
  top: '-16px',
  left: '16px',
  backgroundColor: '#FFC107',
  padding: '4px 16px',
  borderRadius: '16px',
  zIndex: 20,
});

const Content = styled(CardContent)({
  backgroundColor: '#FFC107',
  color: '#fff',
  paddingBottom: '0px',
});

const BusInfo = styled(Box)({
  padding: '8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomLeftRadius: '16px',
  borderBottomRightRadius: '16px',
  backgroundColor: '#FFC107',
  marginTop: '8px',
});

const BusNumber = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#fff',
});

const TimeDate = styled(Box)({
  textAlign: 'right',
  color: '#fff',
});

const DashedLine = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '16px 0',
});

const DashedSegment = styled(Box)({
  width: '20px',
  height: '0px',
  borderTop: '2px solid #fff',
  margin: '0 5px',
});

const Circle = styled(Box)({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  border: '2px solid #fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const InnerCircle = styled(Box)({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: '#fff',
});

const LocationInfo = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '8px',
});

const Location = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const DoneStamp = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) rotate(-20deg)',
  color: '#fff',
  fontSize: '2rem',
  fontWeight: 'bold',
  opacity: 0.2,
  textTransform: 'uppercase',
  textAlign: 'center',
  zIndex: 10,
});

const FadedCircle = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  border: '4px dashed #fff',
  opacity: 0.2,
  zIndex: 9,
});

const BoldText = styled(Typography)({
  fontWeight: '600',
  fontSize: '1.125rem',
  font: 'Outfit',
  color: '#FFFFFF',
});
const BoldTextBottom = styled(Typography)({
  fontWeight: '500',
  fontSize: '9px',
  font: 'Outfit',
  WebkitTextStrokeWidth: '0.5px',
  lineHeight: '11.34px',
  color: ' #FFFFFF',
});

const Time = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#FFFFFF',
});

const BoldFooterText = styled(Typography)({
  fontWeight: '500',
  fontSize: '0.5625rem',
});

const SchedulesByPassengerEmailClose: React.FC<
  SchedulesByPassengerEmailPropsClose
> = ({email, filter}) => {
  const [filteredData, setFilteredData] = useState<TicketFetchedData[]>([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/ticket/by-passenger-email`,
          {params: {email}, withCredentials: true}
        );
        filterSchedulesByDate(response.data, filter);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSchedules();
    console.log(filter);
  }, [email, filter]);
  const isMobile = useMediaQuery('(max-width:600px)');
  const numberOfSegments = isMobile ? 5 : 11;
  const filterSchedulesByDate = (
    tickets: TicketFetchedData[],
    filter: string
  ) => {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    const filtered = tickets.filter(schedule => {
      const createdAt = new Date(schedule.createdAt);

      switch (filter) {
        case 'all': {
          return createdAt < yesterday;
        }
        case 'Last week': {
          const lastWeek = new Date();
          lastWeek.setDate(yesterday.getDate() - 7);
          return createdAt >= lastWeek && createdAt < yesterday;
        }
        case 'Last month': {
          const lastMonth = new Date();
          lastMonth.setMonth(yesterday.getMonth() - 1);
          return createdAt >= lastMonth && createdAt < yesterday;
        }
        case 'Last 3 months': {
          const last3Months = new Date();
          last3Months.setMonth(yesterday.getMonth() - 3);
          return createdAt >= last3Months && createdAt < yesterday;
        }
        case 'Last 6 months': {
          const last6Months = new Date();
          last6Months.setMonth(yesterday.getMonth() - 6);
          return createdAt >= last6Months && createdAt < yesterday;
        }
        default:
          return true;
      }
    });
    setFilteredData(filtered);
  };
  return (
    <>
      {filteredData.length === 0 ? (
        <EmptyModal
          img={NotFound}
          title="No completed tickets found!"
          description="Hey there! You have no completed tickets as there are no orders placed. Book tickets and complete a journey to see the expected."
        />
      ) : (
        <List>
          {filteredData.map((item, index) => (
            <ListItem key={index}>
              <Root>
                <Header>
                  <HeaderText>{item.schedule.id}</HeaderText>
                </Header>
                <FadedCircle />
                <DoneStamp>DONE</DoneStamp>
                <Content>
                  <LocationInfo>
                    <Location>
                      <BoldText>{item.schedule.from}</BoldText>
                      <BoldTextBottom>PDPM IIITDM Jabalpur</BoldTextBottom>
                    </Location>
                    <Location style={{textAlign: 'right'}}>
                      <BoldText align="right">{item.schedule.to}</BoldText>
                      <BoldTextBottom align="right">
                        Jabalpur City
                      </BoldTextBottom>
                    </Location>
                  </LocationInfo>
                  <DashedLine>
                    <Circle>
                      <InnerCircle />
                    </Circle>
                    {Array.from({length: numberOfSegments}, (_, ind) => (
                      <DashedSegment key={ind} />
                    ))}
                    <Circle>
                      <InnerCircle />
                    </Circle>
                  </DashedLine>
                </Content>
                <BusInfo>
                  <Box>
                    <BoldFooterText style={{color: '#FFFFFF'}}>
                      Bus No.
                    </BoldFooterText>
                    <BusNumber className={`${BusNumber} ${BoldFooterText}`}>
                      {item.schedule.busNumber}
                    </BusNumber>
                  </Box>
                  <TimeDate>
                    <BoldFooterText>
                      {new Date(item.createdAt).toISOString().slice(0, 10)}
                    </BoldFooterText>
                    <Time>{item.schedule.departureTime}</Time>
                  </TimeDate>
                </BusInfo>
              </Root>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default SchedulesByPassengerEmailClose;
