import {Box, Paper, Typography} from '@mui/material';

const ConductorCards = () => {
  return (
    <>
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
    </>
  );
};

export default ConductorCards;
