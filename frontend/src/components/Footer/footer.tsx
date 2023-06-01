import {Typography, useTheme, Grid} from '@mui/material';
import Logo from '../../assets/iiitdmj-logo.jpg';
export default function Footer() {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={1}
      padding={1}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item padding={0} margin={1}>
        <img src={Logo} alt="college-logo" width={50} />
      </Grid>
      <Grid item padding={0}>
        <Typography
          align="center"
          color={theme.palette.secondary.main}
          sx={{fontSize: '1.2rem'}}
          padding={0}
        >
          INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIN AND MANUFACTURING
          JABALPUR
        </Typography>
      </Grid>
    </Grid>
  );
}
