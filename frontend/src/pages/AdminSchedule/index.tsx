import {Box, Button, Typography, styled} from '@mui/material';
import AdminLayout from '../../components/AdminPanel/AdminLayout';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import QueueIcon from '@mui/icons-material/Queue';
import {useState} from 'react';

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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ml: {
                  xs: '2rem',
                  sm: '10rem',
                  md: '19.8rem',
                  lg: '34.5rem',
                  xl: '44rem',
                },
              }}
              onClick={() => {
                setCount(2);
              }}
            >
              <SearchIcon
                sx={{
                  height: '32px',
                  width: '32px',
                }}
              />
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
              pr: '2rem',
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
              sx={{
                mt: '1.5rem',
                height: '30rem',
              }}
            >
              <Box
                sx={{
                  width: '400px',
                  height: '269px',
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
          ) : (
            <Box
              sx={{
                mt: '1.5rem',
                height: '30rem',
              }}
            >
              <Box
                sx={{
                  width: '250px',
                  height: '304px',
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
          )}
        </Box>
      </AdminLayout>
    </>
  );
};

export default AdminSchedule;
