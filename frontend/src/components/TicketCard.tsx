import React from 'react';
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
import {SchedulesByPassengerEmailProps, TicketFetchedData} from '../types';
import {useEffect, useState} from 'react';
import axios from 'axios';
import EmptyModal from './Custom Empty Modal';
import NotFound from '../assets/NotFound.svg';

const Root = styled(Card)({
  borderRadius: '24px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  width: '441.25px',
  height: '200px',
  margin: '16px auto',
});

const Header = styled(Box)({
  padding: '8px 32px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  position: 'absolute',
  zIndex: 10,
});

const HeaderText = styled(Typography)({
  color: '#fff',
  fontWeight: 'bold',
  position: 'absolute',
  top: '-7px',
  left: '16px',
  backgroundColor: '#FFC107',
  padding: '4px 16px',
  borderRadius: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  zIndex: 20,
});

const Content = styled(CardContent)({
  padding: '38px',
  paddingBottom: '0px',
});

const BusInfo = styled(Box)({
  backgroundColor: '#FFC107',
  padding: '8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomLeftRadius: '16px',
  borderBottomRightRadius: '16px',
});

const BusNumber = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#fff',
});
const Time = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 600,
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
  flex: 1,
  borderTop: '2px solid #FFC107',
  height: '4px',
  margin: '0 5px',
});

const Circle = styled(Box)({
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  backgroundColor: '#FFC107',
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

const BoldText = styled(Typography)({
  fontWeight: '500',
  fontSize: '18px',
  font: 'Outfit',
  WebkitTextStrokeWidth: '0.5px',
  lineHeight: '22.68px',
  color: '#1A1A1A',
});
const BoldTextBottom = styled(Typography)({
  fontWeight: '400',
  fontSize: '9px',
  font: 'Outfit',
  WebkitTextStrokeWidth: '0.5px',
  lineHeight: '22.68px',
  color: ' #C6C6C6',
});
const BoldFooterText = styled(Typography)({
  fontWeight: '500',
  fontSize: '0.5625rem',
});

const SchedulesByPassengerEmail: React.FC<SchedulesByPassengerEmailProps> = ({
  email,
}) => {
  const [filteredData, setFilteredData] = useState<TicketFetchedData[]>([]);
  const [qr, setQr] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/ticket/by-passenger-email`,
          {params: {email}, withCredentials: true}
        );
        filterTickets(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSchedules();
  }, [email]);
  const isMobile = useMediaQuery('(max-width:600px)');
  const numberOfSegments = isMobile ? 5 : 11;
  const filterTickets = (tickets: TicketFetchedData[]) => {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    const filtered = tickets.filter(ticket => {
      const ticketDate = new Date(ticket.createdAt);
      return ticketDate >= yesterday;
    });
    setFilteredData(filtered);
  };
  return (
    <>
      {filteredData.length === 0 ? (
        <EmptyModal
          img={NotFound}
          title="No upcoming tickets found!"
          description="Hey there! You have no upcoming tickets as there are no orders placed. Book tickets to see the expected."
        />
      ) : (
        <List>
          {qr && (
            <Box
              height={'100vh'}
              width={'100vw'}
              position={'fixed'}
              top={0}
              left={0}
              zIndex={20}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              style={{
                backdropFilter: 'blur(10px)',
              }}
              onClick={() => setQr(null)}
            >
              <Box
                style={{backgroundColor: 'white'}}
                height={'200px'}
                width={'200px'}
                border={'2px solid #333'}
                overflow={'hidden'}
              >
                {JSON.stringify(qr)}
              </Box>
            </Box>
          )}
          {filteredData.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => {
                setQr(item.encryptedData);
              }}
            >
              <Root>
                <Header>
                  <HeaderText>{item.schedule.id}</HeaderText>
                </Header>
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
                    <Circle />
                    {Array.from({length: numberOfSegments}, (_, ind) => (
                      <DashedSegment key={ind} />
                    ))}
                    <Circle />
                  </DashedLine>
                </Content>
                <BusInfo>
                  <Box>
                    <BoldFooterText style={{color: '#fff'}}>
                      Bus No.
                    </BoldFooterText>
                    <BusNumber className={`${BusNumber} ${BoldFooterText}`}>
                      {item.schedule.busNumber}
                    </BusNumber>
                  </Box>
                  <TimeDate>
                    <BoldFooterText style={{color: '#fff'}}>
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

export default SchedulesByPassengerEmail;
