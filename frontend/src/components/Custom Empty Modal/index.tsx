import {Box, Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {CustomEmptyProps} from '../../types';

const EmptyModal: React.FC<CustomEmptyProps> = props => {
  const navigate = useNavigate();
  const GoHome = () => {
    navigate('/');
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: {xs: 'column'},
          paddingTop: '20px',
          paddingRight: '30px',
        }}
      >
        <Box>
          <img src={props.img} alt="NotFound" height={314} width={420} />
        </Box>
        <Box
          sx={{
            marginLeft: '10px',
            marginBottom: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: {xs: 'center'},
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginTop: '10px',
              textAlign: {xs: 'center'},
            }}
          >
            {props.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: '30px',
            }}
            onClick={() => {
              GoHome();
            }}
          >
            Go to home
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EmptyModal;
