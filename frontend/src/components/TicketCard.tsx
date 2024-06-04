import React from 'react';
import {Card, CardContent, Typography, Box} from '@mui/material';
import {styled} from '@mui/system';
import busIcon from '../assets/busIcon.svg';

const Root = styled(Card)({
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  maxWidth: 600,
  margin: 'auto',
  border: '1px solid #FFC107',
  position: 'relative',
});

const Header = styled(Box)({
  backgroundColor: '#FFC107',
  padding: '8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  position: 'relative',
  zIndex: 1,
});

const HeaderText = styled(Typography)({
  color: '#fff',
  fontWeight: 'bold',
  position: 'absolute',
  top: '-3px',
  left: '16px',
  backgroundColor: '#FFC107',
  padding: '4px 8px',
  borderRadius: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  zIndex: 10, // Ensuring it stays above other elements
});

const Content = styled(CardContent)({
  padding: '16px',
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
  fontSize: '1.75rem',
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
  flex: 1,
  borderTop: '2px dashed #FFC107',
  position: 'relative',
});

const Circle = styled(Box)({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: '#FFC107',
});

const Icon = styled('img')({
  width: '24px',
  height: '24px',
});

const LocationInfo = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '16px',
});

const Location = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const BoldText = styled(Typography)({
  fontWeight: 'bold',
  WebkitTextStrokeWidth: '0.5px',
});

const BoldFooterText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.25rem',
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
  return (
    <Root>
      <Header>
        <HeaderText>{ticketId}</HeaderText>
      </Header>
      <Content>
        <LocationInfo>
          <Location>
            <BoldText variant="h6">{departure}</BoldText>
            <BoldText variant="subtitle2" color="textSecondary">
              PDPM IIITDM Jabalpur
            </BoldText>
          </Location>
          <Location style={{textAlign: 'right'}}>
            <BoldText variant="h6" align="right">
              {destination}
            </BoldText>
            <BoldText variant="subtitle2" color="textSecondary" align="right">
              Jabalpur City
            </BoldText>
          </Location>
        </LocationInfo>
        <DashedLine>
          <Circle />
          <DashedSegment />
          <Icon src={busIcon} alt="Bus Icon" />
          <DashedSegment />
          <Circle />
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

export default TicketCard;
