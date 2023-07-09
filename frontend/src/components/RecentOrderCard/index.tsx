import {Typography, styled, Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip/Chip';
import busIcon from '../../assets/bus-icon.svg';
import arrowIcon from '../../assets/arrowIcon.svg';
import scheduleIcon from '../../assets/schedule-icon.svg';

export default function RecentOrderCard() {
  const Icon = styled('img')`
    width: 2rem;
    height: 2rem;

    @media (max-width: 600px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  `;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: '1rem',
        my: '1rem',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
      }}
    >
      <Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <CardContent sx={{flex: '1 0 auto'}}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1rem',
                alignItems: 'center',
                paddingBottom: '.2rem',
              }}
            >
              <Chip
                sx={{
                  fontSize: {md: '.7rem'},
                  color: 'white',
                  backgroundColor: 'black',
                }}
                size="small"
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
                <Typography
                  component="div"
                  fontSize={{md: '.8rem', lg: '1rem'}}
                  fontWeight="bold"
                >
                  By
                </Typography>
                <Typography
                  component="div"
                  fontSize={{md: '.8rem', lg: '1rem'}}
                >
                  Neyati
                </Typography>
              </Box>
              <Typography
                component="div"
                fontSize={{md: '.7rem', lg: '.8rem'}}
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
                flexDirection: {lg: 'row', md: 'column'},
                gap: '.8rem',
                alignItems: {lg: 'center'},
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '.2rem',
                  alignItems: 'center',
                }}
              >
                <Icon src={busIcon} alt="Bus Icon" />
                <Typography
                  component="div"
                  fontSize={{md: '1rem', lg: '1.1rem'}}
                >
                  Rewa Residency
                </Typography>
                <Icon src={arrowIcon} alt="Arrow Icon" />
                <Typography
                  component="div"
                  fontSize={{md: '1rem', lg: '1.1rem'}}
                >
                  Sadar
                </Typography>
              </Box>

              <Typography
                component="div"
                mx={{md: '0rem', lg: '1rem'}}
                fontWeight="bold"
                color="rgba(0, 0, 0, 0.4)"
                fontSize={{md: '0rem', lg: '1rem'}}
              >
                |
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '.2rem',
                  alignItems: 'center',
                }}
              >
                <Icon src={scheduleIcon} alt="Schedule Icon" />
                <Typography
                  component="div"
                  fontSize={{md: '1rem', lg: '1.1rem'}}
                >
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
          ml: '0rem',
          rowGap: '1rem',
        }}
      >
        <Typography
          component="div"
          sx={{fontWeight: 'bold'}}
          fontSize={{md: '2.2rem', lg: '2.3rem'}}
        >
          &#x20B9; 75
        </Typography>
        <Chip
          label="View Details"
          size="small"
          variant="outlined"
          sx={{fontSize: '.8rem'}}
        />
      </Box>
    </Card>
  );
}
