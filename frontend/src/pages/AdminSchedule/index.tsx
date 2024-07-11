import {Box, Button, Typography, styled} from '@mui/material';
import AdminLayout from '../../components/AdminPanel/AdminLayout';
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState} from 'react';
import ConductorCards from '../../components/DetailsCards/ConductorCards';
import BusCards from '../../components/DetailsCards/BusCards';
import useStore from '../../store/tabStore';
import EditBusDetailsModal from '../../components/AdminPanel/EditBusDetailsModal';
import EmptyModal from '../../components/Custom Empty Modal';
import NotFound from '../../assets/NotFound.svg';
import {ScheduleType} from '../../types';
import axios from 'axios';

const AdminSchedule = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [schedule, setSchedule] = useState<ScheduleType[]>([]);

  useEffect(() => {
    const getRecentSchedule = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/bus/schedule`,
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          setSchedule(res.data.schedule as ScheduleType[]);
        }
      } catch (error) {
        setSchedule([]);
      }
    };
    getRecentSchedule();
  }, []);

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
            <>
              {schedule.length === 0 ? (
                <EmptyModal
                  img={NotFound}
                  title="No Bus Details found!"
                  description="Hey! You cannot see any bus details as there are no buses added. Please add new details to see the expected."
                />
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
                        md: '1fr',
                        lg: '1fr 1fr',
                      },
                      gap: '40px',
                      pl: '1rem',
                    }}
                  >
                    {schedule.map(s => (
                      <BusCards key={s.id} schedule={s} />
                    ))}
                  </Box>
                </Box>
              )}
            </>
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
              </Box>
            </Box>
          )}
        </Box>
      </AdminLayout>
    </>
  );
};

export default AdminSchedule;
