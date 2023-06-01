import {Typography, useTheme, Stack} from '@mui/material';
import Logo from '../../images/iiitdmj-logo.jpg';

export default function Footer() {
  const theme = useTheme();

  return (
    <Stack
      sx={{justifyContent: 'center', alignItems: 'center'}}
      direction={{xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row'}}
      position="static"
      spacing={0.5}
    >
      <img src={Logo} alt="College-logo" style={{height: '2.5vw'}}></img>
      <Typography
        variant="body2"
        color={theme.palette.secondary.main}
        style={{fontSize: '1.5vw'}}
      >
        INDIAN INSTITUTE OF INFORMATION
      </Typography>
      <Typography
        variant="body2"
        color={theme.palette.secondary.main}
        style={{fontSize: '1.5vw'}}
      >
        TECHNOLOGY DESIN AND MANUFACTURING
      </Typography>
      <Typography
        variant="body2"
        color={theme.palette.secondary.main}
        style={{fontSize: '1.5vw'}}
      >
        JABALPUR
      </Typography>
    </Stack>
  );
}
