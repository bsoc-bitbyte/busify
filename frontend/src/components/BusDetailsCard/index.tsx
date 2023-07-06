import {useTheme, Typography, styled, Box} from '@mui/material';
import busIcon from '../../assets/bus-icon.svg';
import arrorIcon from '../../assets/arrowIcon.svg';
import scheduleIcon from '../../assets/schedule-icon.svg';
import {useOrderStore} from '../../store/orderStore';

const Icon = styled('img')`
  width: 40px;
  height: 40px;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

function BusDetailsCard() {
  const theme = useTheme();
  const time = useOrderStore(state => state.time);
  const source = useOrderStore(state => state.source);
  const destination = useOrderStore(state => state.destination);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: {xs: '10px', md: '2rem'},
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: {xs: '5px', md: '10px'},
          }}
        >
          <Icon src={busIcon} alt="Bus Icon" />
          <Box>
            <Typography
              variant="h6"
              fontSize={{xs: '0.8rem', md: '1rem'}}
              color={theme.palette.common.black}
            >
              From
            </Typography>
            <Typography
              variant="h4"
              fontSize={{xs: '1.25rem', md: '1.5rem'}}
              color={theme.palette.secondary.main}
            >
              {source}
            </Typography>
          </Box>
        </Box>
        <img src={arrorIcon} alt="Arrow Icon" />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: {xs: '5px', md: '10px'},
          }}
        >
          <Icon src={busIcon} alt="Bus Icon" />
          <Box>
            <Typography
              variant="h6"
              fontSize={{xs: '0.8rem', md: '1rem'}}
              color={theme.palette.common.black}
            >
              To
            </Typography>
            <Typography
              variant="h4"
              fontSize={{xs: '1.25rem', md: '1.5rem'}}
              color={theme.palette.secondary.main}
            >
              {destination}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '2px',
          height: '5vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          margin: '0 2rem',
          display: {xs: 'none', sm: 'block'},
        }}
      />

      <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
        <Icon src={scheduleIcon} alt="Schedule Icon" />
        <Box>
          <Typography
            variant="h6"
            fontSize={{xs: '0.8rem', md: '1rem'}}
            color={theme.palette.common.black}
          >
            Date and Time
          </Typography>
          <Typography
            variant="h4"
            fontSize={{xs: '1.25rem', md: '1.5rem'}}
            color={theme.palette.secondary.main}
          >
            {time}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default BusDetailsCard;
