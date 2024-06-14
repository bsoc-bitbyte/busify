import {Box, Paper, Typography} from '@mui/material';
import QueueIcon from '@mui/icons-material/Queue';

const ConductorCards = () => {
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
            md: '1fr 1fr',
            lg: '1fr 1fr 1fr 1fr',
          },
          gap: '40px',
          pl: '1rem',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            width: '260px',
            height: '320px',
            borderRadius: '22px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#FFF',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          }}
        >
          <Box
            sx={{
              width: '150px',
              height: '150px',
              border: '2px solid #E6E6E6',
              mt: '2rem',
              borderRadius: '50%',
            }}
          ></Box>
          <Typography
            sx={{
              color: '#C6C6C6',
              textAlign: 'center',
              fontSize: '10px',
              fontWeight: '800',
              lineHeight: 'normal',
              mt: '25px',
              letterSpacing: '1.6px',
            }}
          >
            CONDUCTOR
          </Typography>
          <Typography
            sx={{
              color: '#FBBC05',
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              lineHeight: 'normal',
              mt: '10px',
            }}
          >
            Vikrant Golla
          </Typography>
          <Typography
            sx={{
              color: '#000',
              textAlign: 'center',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 'bold',
              lineHeight: 'normal',
              letterSpacing: '2.4px',
              mt: '15px',
            }}
          >
            BUS NO. 0369
          </Typography>
        </Paper>
        <Paper
          elevation={6}
          sx={{
            width: '260px',
            height: '320px',
            borderRadius: '22px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#FFF',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          }}
        >
          <Box
            sx={{
              width: '150px',
              height: '150px',
              border: '2px solid #E6E6E6',
              mt: '2rem',
              borderRadius: '50%',
            }}
          ></Box>
          <Typography
            sx={{
              color: '#C6C6C6',
              textAlign: 'center',
              fontSize: '10px',
              fontWeight: '800',
              lineHeight: 'normal',
              mt: '25px',
              letterSpacing: '1.6px',
            }}
          >
            CONDUCTOR
          </Typography>
          <Typography
            sx={{
              color: '#FBBC05',
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              lineHeight: 'normal',
              mt: '10px',
            }}
          >
            Rupal Deshpande
          </Typography>
          <Typography
            sx={{
              color: '#000',
              textAlign: 'center',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 'bold',
              lineHeight: 'normal',
              letterSpacing: '2.4px',
              mt: '15px',
            }}
          >
            BUS NO. 2210
          </Typography>
        </Paper>
        <Box
          sx={{
            width: '260px',
            height: '320px',
            borderRadius: '22px',
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

export default ConductorCards;
