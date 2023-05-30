import {Typography, useTheme, Grid} from '@mui/material';
import Logo from '../../images/iiitdmj-logo.jpg';

export default function Footer() {
  const theme = useTheme();

  return (
    <Grid
      container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        padding: '0',
      }}
    >
      <Grid item p={0.8}>
        <img
          src={Logo}
          alt="College-logo"
          style={{height: 'calc(8px + 1vw)'}}
        ></img>
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          color={theme.palette.secondary.main}
          style={{fontSize: 'calc(4px + 0.5vw)'}}
          position={'static'}
        >
          INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIN AND MANUFACTURING
          JABALPUR
        </Typography>
      </Grid>
    </Grid>
  );
}
