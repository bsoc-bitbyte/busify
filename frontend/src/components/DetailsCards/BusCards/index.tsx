import {Box, Button, Paper, Typography, styled} from '@mui/material';
import {ScheduleType} from '../../../types';
import EditBusDetailsModal from '../../AdminPanel/EditBusDetailsModal';
import {useState} from 'react';

const BusCards = ({schedule}: {schedule: ScheduleType}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const FilterButton = styled(Button)`
    background: #f9f9f9;
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    color: #c6c6c6;
    margin-right: 15px;
  `;
  const UpcomingButton = styled(Button)`
    background: #fff1c7;
    border: 1px solid #fbbc05;
    border-radius: 12px;
    color: #fbbc05;
    margin-right: 15px;
  `;
  const CompletedButton = styled(Button)`
    background: #f9f9f9;
    border: 1px solid #ff6565;
    border-radius: 12px;
    color: #ff6565;
    margin-right: 15px;
  `;
  const LightText = styled(Typography)`
    color: #c6c6c6;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 2.4px;
  `;
  const BoldText = styled(Typography)`
    color: #1a1a1a;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  `;
  const MediumText = styled(Typography)`
    color: #fff;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;
  const LargeText = styled(Typography)`
    color: #fff;
    font-weight: 600;
    line-height: normal;
  `;
  const SmallText = styled(Typography)`
    color: #888;
    font-size: 8px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.6px;
  `;
  const Card = styled(Paper)`
    max-width: 435px;
    border-radius: 22px;
    background: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  const HeadBar = styled(Box)`
    max-width: 395px;
    background-color: #fbbc05;
    border-radius: 15px;
    padding-left: 0px;
    display: flex;
  `;
  const BusTag = styled(Box)`
    max-width: 117px;
    border-bottom-right-radius: 8px;
    background: #fff;
  `;
  return (
    <>
      <EditBusDetailsModal
        open={open}
        handleClose={handleClose}
        schedule={schedule}
      />
      <Card>
        <HeadBar>
          <Box>
            <BusTag>
              <LightText>BUS NUMBER</LightText>
            </BusTag>
            <MediumText
              sx={{
                pl: '10px',
                mt: '10px',
                fontSize: {xs: '28px', sm: '32px'},
              }}
            >
              {schedule?.busNumber.split('-')[0]}
            </MediumText>
          </Box>
          <LargeText
            sx={{
              ml: '10px',
              mt: '13px',
              fontSize: {xs: '48px', sm: '52px'},
            }}
          >
            {schedule?.busNumber.split('-')[1]}
          </LargeText>
        </HeadBar>
        <Box
          sx={{
            maxWidth: '395px',
            display: 'flex',
            mt: '15px',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              maxWidth: '150px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <LightText>CAPACITY</LightText>
            <Box display="flex" sx={{mt: '3px'}}>
              <BoldText sx={{fontSize: '32px'}}>50</BoldText>
              <BoldText sx={{fontSize: '12px', pt: '18px', pl: '5px'}}>
                Seats
              </BoldText>
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: '245px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <LightText>CONTRACTOR & ID</LightText>
            <BoldText sx={{fontSize: '24px', mt: '5px'}}>
              Jagat Zacharia
            </BoldText>
            <SmallText sx={{pt: '5px'}}>#4DERT653D5U</SmallText>
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: '395px',
            display: 'flex',
            mt: '15px',
            justifyContent: 'space-between',
          }}
        >
          <LightText>SCHEDULE</LightText>
          <LightText
            sx={{
              fontSize: '12px',
              textDecorationLine: 'underline',
              letterSpacing: '0px',
              cursor: 'pointer',
            }}
            onClick={handleOpen}
          >
            Edit Schedule
          </LightText>
        </Box>
        <Box
          sx={{
            maxWidth: '395px',
            display: 'flex',
            mt: '15px',
          }}
        >
          <CompletedButton>3:30 pm</CompletedButton>
          <UpcomingButton>6:30 pm</UpcomingButton>
          <FilterButton>8:00 pm</FilterButton>
          <FilterButton>10:00 pm</FilterButton>
        </Box>
      </Card>
    </>
  );
};

export default BusCards;
