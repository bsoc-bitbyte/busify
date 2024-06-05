import React from 'react';
import {Card, CardContent, Typography, Box} from '@mui/material';
import {styled} from '@mui/system';

const Root = styled(Card)({
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: '#FFC107',
  width: '441.25px',
  height: '211.25px',
  margin: 'auto',
  padding: '8px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  position: 'relative',
  color: '#fff',
});

const Header = styled(Box)({
  backgroundColor: '#FFC107',
  padding: '8px 16px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  color: '#fff',
  fontWeight: 'bold',
  position: 'relative',
  zIndex: 1,
});

const HeaderText = styled(Typography)({
  color: '#fff',
  fontWeight: 'bold',
  position: 'absolute',
  top: '-10px',
  left: '16px',
  backgroundColor: '#FFC107',
  padding: '4px 8px',
  borderRadius: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  zIndex: 10,
});

const Content = styled(CardContent)({
  paddingTop: '8px',
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
  opacity: 0.1,
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
  opacity: 0.1,
  zIndex: 9,
});

const BoldText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '0.875rem',
});

const BoldFooterText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1rem',
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
            <BoldText variant="h6">{departure}</BoldText>
            <BoldText variant="subtitle2">PDPM IIITDM Jabalpur</BoldText>
          </Location>
          <Location style={{textAlign: 'right'}}>
            <BoldText variant="h6" align="right">
              {destination}
            </BoldText>
            <BoldText variant="subtitle2" align="right">
              Jabalpur City
            </BoldText>
          </Location>
        </LocationInfo>
        <DashedLine>
          <Circle>
            <InnerCircle />
          </Circle>
          <DashedSegment />
          <DashedSegment />
          <DashedSegment />
          <DashedSegment />
          <DashedSegment />
          <DashedSegment />
          <DashedSegment />
          <DashedSegment />
          <DashedSegment />
          <DashedSegment />
          <DashedSegment />
          <DashedSegment />
          <Circle>
            <InnerCircle />
          </Circle>
        </DashedLine>
      </Content>
      <BusInfo>
        <Box>
          <BoldFooterText variant="subtitle2" style={{color: '#fff'}}>
            Bus No.
          </BoldFooterText>
          <BusNumber className={`${BusNumber} ${BoldFooterText}`}>
            {busNumber}
          </BusNumber>
        </Box>
        <TimeDate>
          <BoldFooterText variant="subtitle2">{date}</BoldFooterText>
          <BoldFooterText variant="h6">{time}</BoldFooterText>
        </TimeDate>
      </BusInfo>
    </Root>
  );
};

export default TicketCardClose;
