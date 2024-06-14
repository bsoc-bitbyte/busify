import {Box, Button, Typography, styled} from '@mui/material';
import AdminLayout from '../../components/AdminPanel/AdminLayout';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react';
import ConductorCards from '../../components/DetailsCards/ConductorCards';
import BusCards from '../../components/DetailsCards/BusCards';

const AdminSchedule = () => {
  const [count, setCount] = useState(0);

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
                height: '55px',
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
                height: '55px',
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
              height: '4px',
              backgroundColor: '#fbbc05',
              width: count === 1 ? '212px' : '132px',
              transition: '0.3s ease-out',
              transform: count === 1 ? 'translateX(165px)' : 'translateX(0px)',
            }}
          ></Box>
          <Box
            sx={{
              height: '3px',
              borderRadius: '4px',
              backgroundColor: '#c6c6c6',
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
              overflow="auto"
              sx={{
                mt: '1rem',
              }}
            >
              <BusCards />
            </Box>
          ) : (
            <Box
              display="flex"
              width="100%"
              overflow="auto"
              sx={{
                mt: '1rem',
              }}
            >
              <ConductorCards />
            </Box>
          )}
        </Box>
      </AdminLayout>
    </>
  );
};

export default AdminSchedule;
