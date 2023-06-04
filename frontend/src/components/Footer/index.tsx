import {Typography, useTheme, Grid} from '@mui/material';
import Logo from '../../assets/iiitdmj-logo.jpg';
export default function Footer() {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      padding={1}
      justifyContent="center"
      alignItems="center"
      marginTop="2rem"
    >
      <Grid item padding={0}>
        <img src={Logo} alt="College-logo" width={45} />
      </Grid>
      <Grid item padding={0}>
        <Typography
          align="center"
          color={theme.palette.secondary.main}
          sx={{fontSize: '1.2rem'}}
          padding={0}
        >
          INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIGN AND MANUFACTURING
          JABALPUR
        </Typography>
      </Grid>
    </Grid>
  );
}
