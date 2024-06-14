import {Box, Button, Paper, Typography, styled} from '@mui/material';
import QueueIcon from '@mui/icons-material/Queue';

const BusCards = () => {
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
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;
  const LargeText = styled(Typography)`
    color: #fff;
    font-size: 52px;
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
    width: 435px;
    height: 279px;
    border-radius: 22px;
    background: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  const HeadBar = styled(Box)`
    width: 395px;
    height: 80px;
    background-color: #fbbc05;
    border-radius: 15px;
    padding-left: 20px;
    display: flex;
  `;
  const BusTag = styled(Box)`
    width: 117px;
    height: 20px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    background: #fff;
  `;
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '50rem',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr',
            md: '1fr',
            lg: '1fr 1fr ',
            xl: '1fr 1fr ',
          },
          gap: '40px',
          pl: '1rem',
        }}
      >
        <Card>
          <HeadBar>
            <Box>
              <BusTag>
                <LightText sx={{textAlign: 'center'}}>BUS NUMBER</LightText>
              </BusTag>
              <MediumText sx={{mt: '10px'}}>MP - 20 - PA -</MediumText>
            </Box>
            <LargeText sx={{ml: '10px', mt: '13px'}}>0369</LargeText>
          </HeadBar>
          <Box
            sx={{
              width: '395px',
              height: '70px',
              display: 'flex',
              mt: '15px',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                width: '150px',
                height: '70px',
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
                width: '245px',
                height: '70px',
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
              width: '395px',
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
              }}
            >
              See More
            </LightText>
          </Box>
          <Box
            sx={{
              width: '395px',
              display: 'flex',
              mt: '15px',
            }}
          >
            <UpcomingButton>3:30 pm</UpcomingButton>
            <FilterButton>6:30 pm</FilterButton>
            <FilterButton>8:00 pm</FilterButton>
            <FilterButton>10:00 pm</FilterButton>
          </Box>
        </Card>
        <Card>
          <HeadBar>
            <Box>
              <BusTag>
                <LightText sx={{textAlign: 'center'}}>BUS NUMBER</LightText>
              </BusTag>
              <MediumText sx={{mt: '10px'}}>MP - 20 - PA -</MediumText>
            </Box>
            <LargeText sx={{ml: '10px', mt: '13px'}}>4495</LargeText>
          </HeadBar>
          <Box
            sx={{
              width: '395px',
              height: '70px',
              display: 'flex',
              mt: '15px',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                width: '150px',
                height: '70px',
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
                width: '245px',
                height: '70px',
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
              width: '395px',
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
              }}
            >
              See More
            </LightText>
          </Box>
          <Box
            sx={{
              width: '395px',
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
        <Card>
          <HeadBar>
            <Box>
              <BusTag>
                <LightText sx={{textAlign: 'center'}}>BUS NUMBER</LightText>
              </BusTag>
              <MediumText sx={{mt: '10px'}}>MP - 20 - PA -</MediumText>
            </Box>
            <LargeText sx={{ml: '10px', mt: '13px'}}>2210</LargeText>
          </HeadBar>
          <Box
            sx={{
              width: '395px',
              height: '70px',
              display: 'flex',
              mt: '15px',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                width: '150px',
                height: '70px',
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
                width: '245px',
                height: '70px',
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
              width: '395px',
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
              }}
            >
              See More
            </LightText>
          </Box>
          <Box
            sx={{
              width: '395px',
              display: 'flex',
              mt: '15px',
            }}
          >
            <UpcomingButton>3:30 pm</UpcomingButton>
            <UpcomingButton>6:30 pm</UpcomingButton>
            <FilterButton>8:00 pm</FilterButton>
            <FilterButton>10:00 pm</FilterButton>
          </Box>
        </Card>
        <Box
          sx={{
            width: '435px',
            height: '279px',
            borderRadius: '32px',
            border: '4px dashed #E6E6E6',
            background: '#F9F9F9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <QueueIcon
            sx={{
              width: '80px',
              height: '80px',
              color: '#e6e6e6',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default BusCards;
