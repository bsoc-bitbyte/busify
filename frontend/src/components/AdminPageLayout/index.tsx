import SideBar from '../AdminSideBar';
import {ThemeProvider, CssBaseline, Drawer} from '@mui/material';
import {Typography, styled, Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip/Chip';
import busIcon from '../../assets/bus-icon.svg';
import arrowIcon from '../../assets/arrowIcon.svg';
import scheduleIcon from '../../assets/schedule-icon.svg';
import Grid from '@mui/material/Grid/Grid';
import Navbar from '../Navbar';
import {Avatar, useTheme} from '@mui/material';
import React, {useRef} from 'react';
import {useAuthStore} from '../../store/authStore';
import {useScreen} from '../../customHooks/useScreen';
import helpIcon from '../../assets/helpIcon.svg';

export default function AdminPage() {
  const theme = useTheme();
  const currentScreen = useScreen();
  const profile_container = useRef<HTMLDivElement | null>(null);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openmenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = async (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    event.stopPropagation();
    setAnchorEl(null);
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
    <Box
      margin={{xs: '2rem', md: '3rem 5rem'}}
      sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}
    >
      <SideBar />
      <Box sx={{width: '100%'}}>
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
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                component="div"
                sx={{fontWeight: 'bold', mt: '-.6rem'}}
                fontSize={{md: '2.2rem', lg: '2.3rem'}}
              >
                Manage Buses
              </Typography>
              <Box
                sx={{display: 'flex', flexDirection: 'row', columnGap: '1rem'}}
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
                    sx={{width: '1.5rem', height: '1.5rem', marginLeft: '.5em'}}
                  />
                  <Typography
                    variant="h6"
                    color={theme.palette.common.black}
                    paddingX="0.5rem"
                    textTransform={'none'}
                  >
                    Hi, User!
                    {/* Hi, {user?.name}! */}
                  </Typography>
                </ProfileContainer>
              </Box>
            </Box>
            <Typography
              component="div"
              sx={{fontWeight: 'bold', mb: '3rem', color: 'rgba(0, 0, 0, 0.4)'}}
              fontSize={{md: '1.4rem', lg: '1.5rem'}}
            >
              {date}
            </Typography>
          </Box>
        </Box>

        <Card
          sx={{
            backgroundColor: 'rgba(255, 226, 131, 1)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.3rem',
            my: '1rem',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
            width: 'fit-content',
            columnGap: '1rem',
          }}
        >
          <Box
            sx={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              component="div"
              sx={{fontWeight: 'bold'}}
              fontSize={{md: '1.4rem', lg: '1.5rem'}}
            >
              Tickets booked today
            </Typography>
          </Box>
          <Typography
            component="div"
            sx={{fontWeight: 'bold'}}
            fontSize={{md: '2.2rem', lg: '2.3rem'}}
          >
            100
          </Typography>
          {/* <Box>


                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      // mr: '.8rem',
                      // ml:'0rem',
                      rowGap: '1rem',
                    }}
                  >
                    <Typography component="div" sx={{fontWeight:'bold'}} fontSize={{md:'2.2rem', lg:'2.3rem'}}>
                      100
                    </Typography>
                  </Box> */}
        </Card>
        <Typography
          component="div"
          sx={{
            fontWeight: 'bold',
            mt: '4rem',
            mb: '1.5rem',
            color: 'rgba(0, 0, 0, 0.4)',
          }}
          fontSize={{md: '2.2rem', lg: '2.3rem'}}
        >
          Recent orders
        </Typography>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingX: '1rem',
            my: '1rem',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
            width: '100%',
          }}
        >
          <Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <CardContent sx={{flex: '1 0 auto'}}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '1rem',
                    alignItems: 'center',
                    paddingBottom: '.2rem',
                  }}
                >
                  <Chip
                    sx={{
                      fontSize: {md: '.7rem'},
                      color: 'white',
                      backgroundColor: 'black',
                    }}
                    size="small"
                    label="order_M1m6RTTJ9mqpVY"
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '.3rem',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      component="div"
                      fontSize={{md: '.8rem', lg: '1rem'}}
                      fontWeight="bold"
                    >
                      By
                    </Typography>
                    <Typography
                      component="div"
                      fontSize={{md: '.8rem', lg: '1rem'}}
                    >
                      Neyati
                    </Typography>
                  </Box>
                  <Typography
                    component="div"
                    fontSize={{md: '.7rem', lg: '.8rem'}}
                    fontWeight="bold"
                    color="rgba(0, 0, 0, 0.4)"
                  >
                    2 min ago
                  </Typography>
                </Box>
              </CardContent>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <CardContent sx={{flex: '1 0 auto'}}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: {lg: 'row', md: 'column'},
                    gap: '.8rem',
                    alignItems: {lg: 'center'},
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '.2rem',
                      alignItems: 'center',
                    }}
                  >
                    <Icon src={busIcon} alt="Bus Icon" />
                    <Typography
                      component="div"
                      fontSize={{md: '1rem', lg: '1.1rem'}}
                    >
                      Rewa Residency
                    </Typography>
                    <Icon src={arrowIcon} alt="Arrow Icon" />
                    <Typography
                      component="div"
                      fontSize={{md: '1rem', lg: '1.1rem'}}
                    >
                      Sadar
                    </Typography>
                  </Box>

                  <Typography
                    component="div"
                    mx={{md: '0rem', lg: '1rem'}}
                    fontWeight="bold"
                    color="rgba(0, 0, 0, 0.4)"
                    fontSize={{md: '0rem', lg: '1rem'}}
                  >
                    |
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '.2rem',
                      alignItems: 'center',
                    }}
                  >
                    <Icon src={scheduleIcon} alt="Schedule Icon" />
                    <Typography
                      component="div"
                      fontSize={{md: '1rem', lg: '1.1rem'}}
                    >
                      12 May, 3:00 Pm
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mr: '.8rem',
              ml: '0rem',
              rowGap: '1rem',
            }}
          >
            <Typography
              component="div"
              sx={{fontWeight: 'bold'}}
              fontSize={{md: '2.2rem', lg: '2.3rem'}}
            >
              &#x20B9; 75
            </Typography>
            <Chip
              label="View Details"
              size="small"
              variant="outlined"
              sx={{fontSize: '.8rem'}}
            />
          </Box>
        </Card>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingX: '1rem',
            my: '1rem',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
            width: '100%',
          }}
        >
          <Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <CardContent sx={{flex: '1 0 auto'}}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '1rem',
                    alignItems: 'center',
                    paddingBottom: '.2rem',
                  }}
                >
                  <Chip
                    sx={{
                      fontSize: {md: '.7rem'},
                      color: 'white',
                      backgroundColor: 'black',
                    }}
                    size="small"
                    label="order_M1m6RTTJ9mqpVY"
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '.3rem',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      component="div"
                      fontSize={{md: '.8rem', lg: '1rem'}}
                      fontWeight="bold"
                    >
                      By
                    </Typography>
                    <Typography
                      component="div"
                      fontSize={{md: '.8rem', lg: '1rem'}}
                    >
                      Neyati
                    </Typography>
                  </Box>
                  <Typography
                    component="div"
                    fontSize={{md: '.6rem', lg: '.8rem'}}
                    fontWeight="bold"
                    color="rgba(0, 0, 0, 0.4)"
                  >
                    2 min ago
                  </Typography>
                </Box>
              </CardContent>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <CardContent sx={{flex: '1 0 auto'}}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: {lg: 'row', md: 'column'},
                    gap: '.8rem',
                    alignItems: {lg: 'center'},
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '.2rem',
                      alignItems: 'center',
                    }}
                  >
                    <Icon src={busIcon} alt="Bus Icon" />
                    <Typography
                      component="div"
                      fontSize={{md: '1rem', lg: '1.1rem'}}
                    >
                      Rewa Residency
                    </Typography>
                    <Icon src={arrowIcon} alt="Arrow Icon" />
                    <Typography
                      component="div"
                      fontSize={{md: '1rem', lg: '1.1rem'}}
                    >
                      Sadar
                    </Typography>
                  </Box>

                  <Typography
                    component="div"
                    mx={{md: '0rem', lg: '1rem'}}
                    fontWeight="bold"
                    color="rgba(0, 0, 0, 0.4)"
                    fontSize={{md: '0rem', lg: '1rem'}}
                  >
                    |
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '.2rem',
                      alignItems: 'center',
                    }}
                  >
                    <Icon src={scheduleIcon} alt="Schedule Icon" />
                    <Typography
                      component="div"
                      fontSize={{md: '1rem', lg: '1.1rem'}}
                    >
                      12 May, 3:00 Pm
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mr: '.8rem',
              ml: '0rem',
              rowGap: '1rem',
            }}
          >
            <Typography
              component="div"
              sx={{fontWeight: 'bold'}}
              fontSize={{md: '2.2rem', lg: '2.3rem'}}
            >
              &#x20B9; 75
            </Typography>
            <Chip
              label="View Details"
              size="small"
              variant="outlined"
              sx={{fontSize: '.8rem'}}
            />
          </Box>
        </Card>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingX: '1rem',
            my: '1rem',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
            width: '100%',
          }}
        >
          <Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <CardContent sx={{flex: '1 0 auto'}}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '1rem',
                    alignItems: 'center',
                    paddingBottom: '.2rem',
                  }}
                >
                  <Chip
                    sx={{
                      fontSize: {md: '.7rem'},
                      color: 'white',
                      backgroundColor: 'black',
                    }}
                    size="small"
                    label="order_M1m6RTTJ9mqpVY"
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '.3rem',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      component="div"
                      fontSize={{md: '.8rem', lg: '1rem'}}
                      fontWeight="bold"
                    >
                      By
                    </Typography>
                    <Typography
                      component="div"
                      fontSize={{md: '.8rem', lg: '1rem'}}
                    >
                      Neyati
                    </Typography>
                  </Box>
                  <Typography
                    component="div"
                    fontSize={{md: '.6rem', lg: '.8rem'}}
                    fontWeight="bold"
                    color="rgba(0, 0, 0, 0.4)"
                  >
                    2 min ago
                  </Typography>
                </Box>
              </CardContent>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <CardContent sx={{flex: '1 0 auto'}}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: {lg: 'row', md: 'column'},
                    gap: '.8rem',
                    alignItems: {lg: 'center'},
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '.2rem',
                      alignItems: 'center',
                    }}
                  >
                    <Icon src={busIcon} alt="Bus Icon" />
                    <Typography
                      component="div"
                      fontSize={{md: '1rem', lg: '1.1rem'}}
                    >
                      Rewa Residency
                    </Typography>
                    <Icon src={arrowIcon} alt="Arrow Icon" />
                    <Typography
                      component="div"
                      fontSize={{md: '1rem', lg: '1.1rem'}}
                    >
                      Sadar
                    </Typography>
                  </Box>

                  <Typography
                    component="div"
                    mx={{md: '0rem', lg: '1rem'}}
                    fontWeight="bold"
                    color="rgba(0, 0, 0, 0.4)"
                    fontSize={{md: '0rem', lg: '1rem'}}
                  >
                    |
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '.2rem',
                      alignItems: 'center',
                    }}
                  >
                    <Icon src={scheduleIcon} alt="Schedule Icon" />
                    <Typography
                      component="div"
                      fontSize={{md: '1rem', lg: '1.1rem'}}
                    >
                      12 May, 3:00 Pm
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mr: '.8rem',
              ml: '0rem',
              rowGap: '1rem',
            }}
          >
            <Typography
              component="div"
              sx={{fontWeight: 'bold'}}
              fontSize={{md: '2.2rem', lg: '2.3rem'}}
            >
              &#x20B9; 75
            </Typography>
            <Chip
              label="View Details"
              size="small"
              variant="outlined"
              sx={{fontSize: '.8rem'}}
            />
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
