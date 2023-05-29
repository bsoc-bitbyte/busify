import {Typography, Box, Button} from '@mui/material';
import {useTheme} from '@mui/material';
import styles from './navbar.module.scss';
import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';

export default function Navbar() {
  const theme = useTheme();
  return (
    <Box component="nav" className={styles.header}>
      <Typography variant="h1" color={theme.palette.primary.main}>
        Busify
      </Typography>
      <Typography>A centrailed bus ticket booking system</Typography>
      <Button variant="contained" color="primary" href={getGoogleOAuthURL()}>
        Login with Google
      </Button>
    </Box>
  );
}
