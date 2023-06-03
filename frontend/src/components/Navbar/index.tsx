import {Typography, Box, Button, colors} from '@mui/material';
import {useTheme} from '@mui/material';
import styles from './navbar.module.scss';
import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
import {useAuthStore} from '../../store/authStore';
import google_icon from '../../assets/google_icon.png';
import help_icon from '../../assets/help_icon.svg';
export default function Navbar() {
  const theme = useTheme();
  const {isAuth, user} = useAuthStore();
  return (
    <Box
      component="nav"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant="h1"
        color={theme.palette.primary.main}
        style={{fontSize: 60, marginTop: '56px'}}
      >
        BUSIFY
      </Typography>
      <Typography
        style={{
          marginLeft: '900px',
          marginTop: '50px',
          marginRight: '0px',
          fontSize: '20px',
          color: 'rgba(214, 202, 202, 0.788)',
        }}
      >
        <img
          src={help_icon}
          style={{
            height: '20px',
            width: '20px',
            marginRight: '5px',
            marginTop: '30px',
          }}
        />
        Help
      </Typography>
      {isAuth ? (
        <div
          style={{
            borderRadius: '12px',
            color: 'rgba(0, 0, 0, 0.54)',
            marginTop: '56px',
            marginLeft: '0px',
          }}
        >
          <Typography>Hi!, {user?.name}</Typography>
          <img
            src=""
            alt="User Image"
            style={{width: 30, height: 30, borderRadius: 15}}
          ></img>
        </div>
      ) : (
        <Button
          variant="outlined"
          color="secondary"
          href={getGoogleOAuthURL()}
          style={{
            borderRadius: '12px',
            color: 'rgba(0, 0, 0, 0.54)',
            marginTop: '56px',
            marginLeft: '0px',
          }}
        >
          <img
            src={google_icon}
            style={{height: '40px', marginRight: '40px'}}
          />
          Sign in with Google
        </Button>
      )}
    </Box>
  );
}
