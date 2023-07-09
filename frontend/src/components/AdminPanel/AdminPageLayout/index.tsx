import SideBar from '../AdminSideBar';
import {Typography, styled, Box} from '@mui/material';
import Card from '@mui/material/Card';
import {Avatar, useTheme} from '@mui/material';
import React, {useRef} from 'react';
// import { useAuthStore } from "../../../store/authStore";
import {useScreen} from '../../../customHooks/useScreen';
import helpIcon from '../../../assets/helpIcon.svg';
import RecentOrderCard from '../RecentOrderCard';
import Footer from '../../Footer';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import OpenIcon from '@mui/icons-material/MenuRounded';

export default function AdminPageLayout({children}: any) {
  const currentScreen = useScreen();

  const theme = useTheme();
  const profile_container = useRef<HTMLDivElement | null>(null);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openmenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    console.log('open');
  };

  const closeMenu = async (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const openSidebar = () => {
    if (document.getElementById('drawer')) {
      (document.getElementById('drawer') as HTMLElement).style.display =
        'block';
    }
  };

  const current = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthIndex = new Date().getMonth();
  const monthName = monthNames[monthIndex];
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayIndex = new Date().getDay();
  const dayName = dayNames[dayIndex];
  const date = `${dayName}, ${current.getDate()} ${monthName} ${current.getFullYear()}`;

  const ProfileContainer = styled(Box)`
    display: flex;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      border: 0.5px solid ${({theme}) => theme.palette.primary.main};
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
  `;

  const HelpButton = styled(Box)`
    align-items: center;
    gap: 5px;
    cursor: pointer;
  `;

  const Icon = styled('img')`
    width: 2rem;
    height: 2rem;

    @media (max-width: 600px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  `;

  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      {currentScreen !== 'xs' ? (
        <Box>
          <SideBar />
        </Box>
      ) : (
        <IconButton
          aria-label="delete"
          size="medium"
          onClick={openSidebar}
          sx={{
            display: {sm: 'none'},
            position: 'absolute',
            top: '-1px',
            left: '-.1px',
          }}
        >
          <OpenIcon fontSize="inherit" />
        </IconButton>
      )}

      <Box
        marginLeft={{sm: '5rem'}}
        marginRight="1rem"
        marginTop={{xs: '1.5rem', sm: '0px'}}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* topbar */}
        <Box sx={{width: '100%', position: 'static'}}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  width: {xs: '95%', sm: '100%'},
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  component="div"
                  sx={{fontWeight: 'bold', mt: '-.15rem'}}
                  fontSize={{xs: '2rem', md: '2.2rem', lg: '2.3rem'}}
                >
                  Manage Buses
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '1rem',
                  }}
                >
                  <HelpButton display={{xs: 'none', md: 'flex'}}>
                    <img src={helpIcon} alt="help" />
                    <Typography variant="h6" color={theme.palette.common.black}>
                      Help
                    </Typography>
                  </HelpButton>
                  <ProfileContainer
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={openmenu}
                    sx={{
                      cursor: 'pointer',
                      border:
                        currentScreen === 'xs' ? 'none' : '0.5px solid #4f4f4f',
                    }}
                    ref={profile_container}
                  >
                    <Avatar
                      // alt={user?.name}
                      // src={user?.picture}
                      sx={{
                        width: '1.5rem',
                        height: '1.5rem',
                        marginLeft: '.5em',
                      }}
                    />
                    <Typography
                      display={{xs: 'none', sm: 'flex'}}
                      variant="h6"
                      color={theme.palette.common.black}
                      paddingX="0.3rem"
                      textTransform={'none'}
                    >
                      Hi, User !{/* Hi, {user?.name}! */}
                    </Typography>
                  </ProfileContainer>
                </Box>
              </Box>
              <Typography
                component="div"
                sx={{
                  fontWeight: 'bold',
                  mb: '3rem',
                  color: 'rgba(0, 0, 0, 0.4)',
                }}
                fontSize={{md: '1.4rem', lg: '1.5rem'}}
              >
                {date}
              </Typography>
            </Box>
          </Box>
        </Box>
        {children}
        <Footer />
        <SideBar />
      </Box>
    </Box>
  );
}
