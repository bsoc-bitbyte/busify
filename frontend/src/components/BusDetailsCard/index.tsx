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
          gap: {xs: '10px', sm: '2px', md: '10px'},
          margin: {xs: '0', md: '0 0.5rem'},
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <Icon src={busIcon} alt="Bus Icon" />
          <Box>
            <Typography
              variant="h6"
              fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}
              color={theme.palette.common.black}
            >
              From
            </Typography>
            <Typography
              variant="h4"
              fontSize={{xs: '1rem', sm: '0.8rem', md: '1.3rem'}}
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
            gap: '5px',
          }}
        >
          <Icon src={busIcon} alt="Bus Icon" />
          <Box>
            <Typography
              variant="h6"
              fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}
              color={theme.palette.common.black}
            >
              To
            </Typography>
            <Typography
              variant="h4"
              fontSize={{xs: '1rem', sm: '0.8rem', md: '1.3rem'}}
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
          margin: {xs: '0', sm: '20px', md: '2px 2rem'},
          display: {xs: 'none', sm: 'none', md: 'block'},
        }}
      />

      <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
        <Icon src={scheduleIcon} alt="Schedule Icon" />
        <Box>
          <Typography
            variant="h6"
            fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}
            color={theme.palette.common.black}
          >
            Date and Time
          </Typography>
          <Typography
            variant="h4"
            fontSize={{xs: '1.25rem', sm: '1rem', md: '1.3rem'}}
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
