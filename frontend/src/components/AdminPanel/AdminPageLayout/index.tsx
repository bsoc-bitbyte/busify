import SideBar from '../AdminSideBar';
import {Typography, Box} from '@mui/material';
import {useScreen} from '../../../customHooks/useScreen';
import Footer from '../../Footer';
import IconButton from '@mui/material/IconButton';
import OpenIcon from '@mui/icons-material/MoreHoriz';

export default function AdminPageLayout({children}: any) {
  const currentScreen = useScreen();
  const openSidebar = () => {
    if (document.getElementById('drawer')) {
      (document.getElementById('drawer') as HTMLElement).style.display =
        'block';
    }
  };

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
                ></Box>
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
                Saturday, 1 January 2023
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
