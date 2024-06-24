import {Box, Button, Typography, styled} from '@mui/material';
import AdminLayout from '../../components/AdminPanel/AdminLayout';
import AddIcon from '@mui/icons-material/Add';
import QueueIcon from '@mui/icons-material/Queue';
import {useEffect, useState} from 'react';
import ConductorCards from '../../components/DetailsCards/ConductorCards';
import BusCards from '../../components/DetailsCards/BusCards';
import useStore from '../../store/tabStore';
import EditBusDetailsModal from '../../components/AdminPanel/EditBusDetailsModal';

const AdminSchedule = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const setActive = useStore(state => state.setActiveTab);
  useEffect(() => {
    setActive(1);
  });

  const FilterButton = styled(Button)`
    background: #f9f9f9;
    border: 1px solid #e6e6e6;
    border-radius: 20px;
    color: #c6c6c6;
    text-transform: capitalize;
  `;

  return (
    <>
      <AdminLayout>
        <EditBusDetailsModal open={open} handleClose={handleClose} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => {
                setCount(0);
              }}
            >
              <Typography
                sx={{
                  color: count === 0 ? '#fbbc05' : '#1A1A1A',
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                Bus Details
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => {
                setCount(1);
              }}
            >
              <Typography
                sx={{
                  color: count === 1 ? '#fbbc05' : '#1A1A1A',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  ml: '2rem',
                }}
              >
                Conductor Details
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: '5px',
              backgroundColor: '#fbbc05',
              maxWidth: count === 1 ? '212px' : '132px',
              transition: '0.3s ease-out',
              transform: count === 1 ? 'translateX(165px)' : 'translateX(0px)',
            }}
          ></Box>
          <Box
            sx={{
              height: '2px',
              borderRadius: '4px',
              backgroundColor: '#1a1a1a',
            }}
          ></Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              mt: '2rem',
            }}
          >
            <FilterButton
              sx={{
                mr: '1rem',
              }}
              onClick={handleOpen}
            >
              <AddIcon />
              <Typography>Add New</Typography>
            </FilterButton>
            <FilterButton>
              <Typography>Select</Typography>
            </FilterButton>
          </Box>
          {count === 0 ? (
            <Box
              display="flex"
              width="100%"
              sx={{
                mt: '1rem',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr',
                    md: '1fr',
                    lg: '1fr 1fr',
                  },
                  gap: '40px',
                  pl: '1rem',
                }}
              >
                <BusCards />
                <BusCards />
                <BusCards />
                <Box
                  sx={{
                    maxWidth: '435px',
                    borderRadius: '32px',
                    border: '4px dashed #E6E6E6',
                    background: '#F9F9F9',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <QueueIcon
                    sx={{
                      width: '80px',
                      height: '80px',
                      color: '#e6e6e6',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          ) : (
            <Box
              display="flex"
              width="100%"
              sx={{
                mt: '1rem',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr',
                    md: '1fr 1fr',
                    lg: '1fr 1fr 1fr 1fr',
                  },
                  gap: '40px',
                  pl: '1rem',
                }}
              >
                <ConductorCards />
                <ConductorCards />
                <Box
                  sx={{
                    maxWidth: '260px',
                    borderRadius: '22px',
                    border: '4px dashed #E6E6E6',
                    background: '#F9F9F9',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <QueueIcon
                    sx={{
                      width: '80px',
                      height: '80px',
                      color: '#e6e6e6',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </AdminLayout>
    </>
  );
};

export default AdminSchedule;
