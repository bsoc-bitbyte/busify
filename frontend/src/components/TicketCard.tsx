import React from 'react';
import {Card, CardContent, Typography, Box, useMediaQuery} from '@mui/material';
import {styled} from '@mui/system';

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

interface TicketCardProps {
  busNumber: string;
  departure: string;
  destination: string;
  time: string;
  date: string;
  ticketId: string;
}

const TicketCard: React.FC<TicketCardProps> = ({
  busNumber,
  departure,
  destination,
  time,
  date,
  ticketId,
}) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const numberOfSegments = isMobile ? 5 : 11;

  return (
    <Root>
      <Header>
        <HeaderText>{ticketId}</HeaderText>
      </Header>
      <Content>
        <LocationInfo>
          <Location>
            <BoldText>{departure}</BoldText>
            <BoldTextBottom>PDPM IIITDM Jabalpur</BoldTextBottom>
          </Location>
          <Location style={{textAlign: 'right'}}>
            <BoldText align="right">{destination}</BoldText>
            <BoldTextBottom align="right">Jabalpur City</BoldTextBottom>
          </Location>
        </LocationInfo>
        <DashedLine>
          <Circle />
          {Array.from({length: numberOfSegments}, (_, index) => (
            <DashedSegment key={index} />
          ))}
          <Circle />
        </DashedLine>
      </Content>
      <BusInfo>
        <Box>
          <BoldFooterText style={{color: '#fff'}}>Bus No.</BoldFooterText>
          <BusNumber className={`${BusNumber} ${BoldFooterText}`}>
            {busNumber}
          </BusNumber>
        </Box>
        <TimeDate>
          <BoldFooterText style={{color: '#fff'}}>{date}</BoldFooterText>
          <Time>{time}</Time>
        </TimeDate>
      </BusInfo>
    </Root>
  );
};

export default TicketCard;
