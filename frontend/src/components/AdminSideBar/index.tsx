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
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useTheme, styled} from '@mui/material';

export default function SideBar() {
  const theme = useTheme();

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

  const [active, setActive] = useState(0);
  const handleClick = (props: number) => {
    setActive(props);
  };

  return (
    <Box>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: '16rem',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '16rem',
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
