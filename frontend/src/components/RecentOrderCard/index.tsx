import {Typography, styled, Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip/Chip';
import busIcon from '../../assets/bus-icon.svg';
import arrowIcon from '../../assets/arrowIcon.svg';
import scheduleIcon from '../../assets/schedule-icon.svg';

export default function RecentOrderCard() {
  const Icon = styled('img')`
    width: 2.2rem;
    height: 2.2rem;

    @media (max-width: 600px) {
      width: 30px;
      height: 30px;
    }
  `;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        my: '2.5rem',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <CardContent sx={{flex: '1 0 auto'}}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1.5rem',
                alignItems: 'center',
                paddingBottom: '.2rem',
              }}
            >
              <Chip
                sx={{
                  fontSize: '.7rem',
                  color: 'white',
                  backgroundColor: 'black',
                }}
                label="order_M1m6RTTJ9mqpVY"
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '.3rem',
                  alignItems: 'center',
                }}
              >
                <Typography component="div" fontSize="1rem" fontWeight="bold">
                  By
                </Typography>
                <Typography component="div" fontSize="1rem">
                  Neyati
                </Typography>
              </Box>
              <Typography
                component="div"
                fontSize=".8rem"
                fontWeight="bold"
                color="rgba(0, 0, 0, 0.4)"
              >
                2 min ago
              </Typography>
            </Box>
          </CardContent>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <CardContent sx={{flex: '1 0 auto'}}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '.8rem',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '.8rem',
                  alignItems: 'center',
                }}
              >
                <Icon src={busIcon} alt="Bus Icon" />
                <Typography component="div" fontSize="1.3rem">
                  Rewa Residency
                </Typography>
                <Icon src={arrowIcon} alt="Bus Icon" />
                <Typography component="div" fontSize="1.3rem">
                  Sadar
                </Typography>
              </Box>

              <Typography
                component="div"
                mx="1.5rem"
                fontWeight="bold"
                color="rgba(0, 0, 0, 0.4)"
                fontSize="1.5rem"
              >
                |
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '.8rem',
                  alignItems: 'center',
                }}
              >
                <Icon src={scheduleIcon} alt="Schedule Icon" />
                <Typography component="div" fontSize="1.3rem">
                  12 May, 3:00 Pm
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mr: '.8rem',
          rowGap: '1rem',
        }}
      >
        <Typography component="div" variant="h1">
          &#x20B9; 75
        </Typography>
        <Typography component="div" fontSize="1.1rem">
          View Details
        </Typography>
      </Box>
    </Card>
  );
}
