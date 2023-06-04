import {useTheme, Typography, Box, Button, styled} from '@mui/material';
import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';
import {Link} from 'react-router-dom';
import {useAuthStore} from '../../store/authStore';
import helpIcon from '../../assets/helpIcon.svg';
import googleIcon from '../../assets/googleIcon.svg';

const NavContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HelpButton = styled(Box)`
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: none;
  border: 4px solid rgba(66, 133, 244, 0.1);
  border-radius: 8px;

  &:hover {
    border: 4px solid rgba(66, 133, 244, 0.1);
    background-color: #fff;
  }
`;

const ProfileContainer = styled(Box)`
  display: flex;
  align-items: center;
  border: 0.5px solid #4f4f4f;
  border-radius: 8px;
`;

export default function Navbar() {
  const theme = useTheme();
  const {isAuth, user} = useAuthStore();
  return (
    <NavContainer>
      <Typography
        variant="h1"
        color={theme.palette.primary.main}
        fontSize={{xs: '1.25rem', md: '2.5rem'}}
      >
        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
          BUSIFY
        </Link>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <HelpButton display={{xs: 'none', md: 'flex'}}>
          <img src={helpIcon} alt="help" />
          <Typography variant="h6" color={theme.palette.common.black}>
            Help
          </Typography>
        </HelpButton>
        {!isAuth ? (
          <GoogleButton variant="outlined" href={getGoogleOAuthURL()}>
            <img src={googleIcon} alt="google" />
            <Typography variant="h6" color={theme.palette.common.black}>
              Login with Google
            </Typography>
          </GoogleButton>
        ) : (
          <ProfileContainer>
            <Typography
              variant="h6"
              color={theme.palette.common.black}
              padding="0.5rem 1rem"
              textTransform={'none'}
            >
              Hi, {user?.name}!
            </Typography>
          </ProfileContainer>
        )}
      </Box>
    </NavContainer>
  );
}
