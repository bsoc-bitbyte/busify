import {Typography, Box} from '@mui/material';
import {useTheme} from '@mui/material';
import styles from './navbar.module.scss';

export default function Navbar() {
  const theme = useTheme();
  return (
    <Box component="nav" className={styles.header}>
      <Typography variant="h1" color={theme.palette.primary.main}>
        Busify
      </Typography>
      <Typography>A centrailed bus ticket booking system</Typography>
    </Box>
  );
}
