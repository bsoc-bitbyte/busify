import React from 'react';
import {Card, CardContent, Typography, Box, useMediaQuery} from '@mui/material';
import {styled} from '@mui/system';

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
  position: 'absolute',
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

interface TicketCardCloseProps {
  busNumber: string;
  departure: string;
  destination: string;
  time: string;
  date: string;
  ticketId: string;
}

const TicketCardClose: React.FC<TicketCardCloseProps> = ({
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
      <FadedCircle />
      <DoneStamp>DONE</DoneStamp>
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
          <Circle>
            <InnerCircle />
          </Circle>
          {Array.from({length: numberOfSegments}, (_, index) => (
            <DashedSegment key={index} />
          ))}
          <Circle>
            <InnerCircle />
          </Circle>
        </DashedLine>
      </Content>
      <BusInfo>
        <Box>
          <BoldFooterText style={{color: '#FFFFFF'}}>Bus No.</BoldFooterText>
          <BusNumber className={`${BusNumber} ${BoldFooterText}`}>
            {busNumber}
          </BusNumber>
        </Box>
        <TimeDate>
          <BoldFooterText>{date}</BoldFooterText>
          <Time>{time}</Time>
        </TimeDate>
      </BusInfo>
    </Root>
  );
};

export default TicketCardClose;
