import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ScheduleIcon from '@mui/icons-material/WatchLater';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BusIcon from '@mui/icons-material/DepartureBoard';
// import {useState} from 'react';
import useStore from '../../../store/tabStore';
import {Link, useNavigate} from 'react-router-dom';
import {useTheme, styled} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/ArrowCircleLeft';

export default function SideBar() {
  const theme = useTheme();
  const navigate = useNavigate();

  const closeSidebar = () => {
    if (document.getElementById('drawer')) {
      (document.getElementById('drawer') as HTMLElement).style.display = 'none';
    }
  };

  const OpenDashBoard = () => {
    navigate('/admin/dashboard');
  };
  const OpenSchedule = () => {
    navigate('/admin/schedule');
  };

  const LinkContainer = styled(Link)`
    text-decoration: none;
    color: inherit;
  `;

  const ListButton = styled(ListItemButton)`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    &:hover {
      background-color: #fdedcf;
    }
  `;

  const Item = styled(ListItem)`
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
  `;

  const active = useStore(state => state.activeTab);
  const setActive = useStore(state => state.setActiveTab);
  const handleClick = (props: number) => {
    setActive(props);
  };

  return (
    <Box id="drawer" display={{xs: 'none', sm: 'flex'}}>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: '10rem',
          flexShrink: 1,

          '& .MuiDrawer-paper': {
            width: '13rem',
            boxSizing: 'border-box',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            overflow: 'hidden',
          },
        }}
      >
        <IconButton
          size="large"
          onClick={closeSidebar}
          sx={{
            display: {sm: 'none'},
            position: 'absolute',
            left: '10rem',
            top: '.1rem',
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>

        <Toolbar>
          <Typography
            variant="h1"
            color={theme.palette.primary.main}
            fontSize={{xs: '1.25rem', md: '2.5rem'}}
            marginBottom={'4rem'}
            marginTop={'.7rem'}
          >
            <LinkContainer
              to="/"
              style={{textDecoration: 'none', color: 'inherit'}}
            >
              BUSIFY
            </LinkContainer>
          </Typography>
        </Toolbar>

        <List>
          <Item>
            <ListButton
              onClick={() => {
                OpenDashBoard();
                handleClick(0);
              }}
              style={{backgroundColor: active === 0 ? '#FBBC05' : 'initial'}}
            >
              <ListItemIcon>
                <DashboardIcon
                  style={{color: active === 0 ? 'black' : '#757575'}}
                />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    fontSize={'1rem'}
                    style={{
                      fontWeight: 'bold',
                      color: active === 0 ? 'black' : '#757575',
                    }}
                  >
                    DASHBOARD
                  </Typography>
                }
              />
            </ListButton>
          </Item>
          <Item>
            <ListButton
              onClick={() => {
                OpenSchedule();
                handleClick(1);
              }}
              style={{backgroundColor: active === 1 ? '#FBBC05' : 'initial'}}
            >
              <ListItemIcon>
                <ScheduleIcon
                  style={{color: active === 1 ? 'black' : '#757575'}}
                />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    fontSize={'1rem'}
                    style={{
                      fontWeight: 'bold',
                      color: active === 1 ? 'black' : '#757575',
                    }}
                  >
                    SCHEDULE
                  </Typography>
                }
              />
            </ListButton>
          </Item>
          <Item>
            <ListButton
              onClick={() => {
                OpenDashBoard();
                handleClick(2);
              }}
              style={{
                backgroundColor: active === 2 ? '#FBBC05' : 'initial',
                fontSize: '30rem',
              }}
            >
              <ListItemIcon>
                <AnalyticsIcon
                  style={{color: active === 2 ? 'black' : '#757575'}}
                />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    fontSize={'1rem'}
                    style={{
                      fontWeight: 'bold',
                      color: active === 2 ? 'black' : '#757575',
                    }}
                  >
                    ANALYTICS
                  </Typography>
                }
              />
            </ListButton>
          </Item>
          <Item>
            <ListButton
              onClick={() => {
                OpenDashBoard();
                handleClick(3);
              }}
              style={{backgroundColor: active === 3 ? '#FBBC05' : 'initial'}}
            >
              <ListItemIcon>
                <BusIcon style={{color: active === 3 ? 'black' : '#757575'}} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    fontSize={'1rem'}
                    style={{
                      fontWeight: 'bold',
                      color: active === 3 ? 'black' : '#757575',
                    }}
                  >
                    BUSES
                  </Typography>
                }
              />
            </ListButton>
          </Item>
        </List>
      </Drawer>
    </Box>
  );
}
