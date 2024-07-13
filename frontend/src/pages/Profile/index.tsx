import './animation.css';

import {useTheme, Typography, styled, Box, Button} from '@mui/material';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useState} from 'react';
import {useAuthStore} from '../../store/authStore';
import SchedulesByPassengerEmailClose from '../../components/TicketCardClose';
import SchedulesByPassengerEmail from '../../components/TicketCard';

const ContainerMain = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  @media (max-width: 799px) {
    align-items: center;
  }

  @media (min-width: 800px) {
    align-items: start;
    flex-direction: row;
  }
`;

const ProfileSection = styled(Box)`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-right: 2rem;

  @media (min-width: 800px) {
    max-width: 350px;
    border-right: 2px solid #ddd;
    padding: 1rem;
    flex: 1;
    margin-bottom: 0;
  }
`;

const ProfileImage = styled(Box)`
  display: grid;
  place-items: center;
  height: 150px;
  width: 150px;
  background: #f9f9f9;
  border: 2px solid #e6e6e6;
  border-radius: 100%;
  margin: auto;
  overflow: hidden;

  @media (min-width: 200px) {
    height: 170px;
    width: 170px;
  }

  @media (min-width: 400px) {
    height: 220px;
    width: 220px;
  }

  @media (min-width: 800px) {
    margin: 0;
    height: 250px;
    width: 250px;
  }
`;

const EventBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    width: calc(100% - 350px);
    margin: 0;
  }
`;

const FiltersBox = styled(Box)`
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  marginbottom: 1rem;
  gap: 5px;

  @media (min-width: 800px) {
    display: flex;
  }
`;

const FilterButton = styled(Button)`
  background: #f9f9f9;
  border: 1px solid #e6e6e6;
  color: #c6c6c6;
`;

const ProfilePage = () => {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState<1 | 2>(1);
  const {user} = useAuthStore();
  const [filter, setFilter] = useState<string>('all');
  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };
  const ActiveTabIndicator = styled(Box)`
    position: absolute;
    bottom: -3px;
    width: 7.5rem;
    height: 4px;
    border-radius: 2px;
    background: ${theme.palette.primary.main};
  `;

  return (
    <ContainerMain>
      <ProfileSection>
        <ProfileImage>
          <img
            src={user?.picture}
            alt="loading..."
            height="100%"
            width="100%"
            style={{objectFit: 'cover'}}
          />
        </ProfileImage>
        <Typography
          variant="h2"
          fontSize={{xs: '1rem', sm: '1.25rem', md: '1.5rem'}}
          fontWeight={600}
          marginTop="1.5rem"
          color={theme.palette.primary.main}
        >
          Profile Details
        </Typography>
        <Box>
          <Typography variant="caption" color="#c6c6c6" marginBottom="0">
            name
          </Typography>
          <Typography variant="h5" marginBottom="1rem" fontWeight={500}>
            {user?.name ?? 'No username...'}
          </Typography>
          <Typography variant="caption" color="#c6c6c6" marginBottom="0">
            email
          </Typography>
          <Typography variant="h5" marginBottom="1rem" fontWeight={500}>
            {user?.email ?? 'No email id!!'}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color={theme.palette.secondary.light}
          fontWeight={600}
        >
          Member Since, May 2022
        </Typography>
      </ProfileSection>
      <EventBox>
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          marginBottom="0.5rem"
          gap="2rem"
          borderBottom="2px solid #000"
          position="relative"
        >
          <ActiveTabIndicator
            className={
              currentTab === 2 ? 'animate-slide-right' : 'animate-slide-left'
            }
          />
          <Typography
            variant="h4"
            fontWeight={600}
            color={currentTab === 1 ? theme.palette.primary.main : '#000'}
            paddingBottom="0.5rem"
            onClick={() => {
              setCurrentTab(1);
            }}
            style={{cursor: 'pointer'}}
          >
            Upcoming
          </Typography>
          <Typography
            variant="h4"
            fontWeight={600}
            color={currentTab === 2 ? theme.palette.primary.main : '#000'}
            paddingBottom="0.5rem"
            onClick={() => {
              setCurrentTab(2);
            }}
            style={{cursor: 'pointer'}}
          >
            Completed
          </Typography>
          <Box margin="0 10px 0 auto">
            <SearchOutlinedIcon
              htmlColor="#000"
              sx={{fontSize: '2.5rem'}}
              style={{cursor: 'pointer'}}
            />
          </Box>
        </Box>
        <Box width="100%" height="100%">
          {currentTab === 1 ? (
            <Box>
              <Box
                display="flex"
                justifyContent="center"
                gap="10px"
                width="100%"
                overflow="auto"
              >
                <SchedulesByPassengerEmail email={user?.email || ''} />
              </Box>
            </Box>
          ) : (
            <Box>
              <FiltersBox
                display="flex"
                width="100%"
                justifyContent="space-between"
                marginBottom="1rem"
              >
                <Box display="flex" gap="5px" flexWrap="wrap">
                  <FilterButton onClick={() => handleFilterChange('Last week')}>
                    Last week
                  </FilterButton>
                  <FilterButton
                    onClick={() => handleFilterChange('Last month')}
                  >
                    Last month
                  </FilterButton>
                  <FilterButton
                    onClick={() => handleFilterChange('Last 3 months')}
                  >
                    Last 3 months
                  </FilterButton>
                  <FilterButton
                    onClick={() => handleFilterChange('Last 6 months')}
                  >
                    Last 6 months
                  </FilterButton>
                </Box>
                <Box>
                  <FilterButton>
                    <TuneOutlinedIcon sx={{fontSize: '1.5rem'}} />
                  </FilterButton>
                </Box>
              </FiltersBox>
              <Box
                display="flex"
                justifyContent="center"
                gap="10px"
                width="100%"
                overflow="auto"
              >
                <SchedulesByPassengerEmailClose
                  email={user?.email || ''}
                  filter={filter}
                />
              </Box>
            </Box>
          )}
        </Box>
      </EventBox>
    </ContainerMain>
  );
};

export default ProfilePage;
