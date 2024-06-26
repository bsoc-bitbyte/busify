import {Typography, styled, Box, useTheme} from '@mui/material';
import {Clear} from '@mui/icons-material';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip/Chip';
import busIcon from '../../../assets/bus-icon.svg';
import arrowIcon from '../../../assets/arrowIcon.svg';
import scheduleIcon from '../../../assets/schedule-icon.svg';
import {RecentOrdersProps} from '../../../pages/AdminDashBoard';

interface RecentOrderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean;
  showModal: () => void;
  details: RecentOrdersProps;
}

const Icon = styled('img')`
  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
  @media (min-width: 300px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default function OrderDetailsCard({
  active,
  details,
  showModal,
}: RecentOrderCardProps) {
  const theme = useTheme();
  return (
    <Box
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      zIndex={100}
      display={active ? 'flex' : 'none'}
      sx={{backdropFilter: 'blur(8px)'}}
    >
      <Card
        sx={{
          width: '95%',
          maxWidth: '550px',
          padding: '2rem',
          borderRadius: '16px',
        }}
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="end"
          marginBottom="1.5rem"
        >
          <Clear
            htmlColor={theme.palette.primary.main}
            sx={{
              fontSize: '1.2rem',
              backgroundColor: '#FFF1C7',
              borderRadius: '100%',
            }}
            style={{cursor: 'pointer'}}
            onClick={showModal}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom=".5rem"
        >
          <Typography
            component="div"
            fontSize={{xs: '1rem', sm: '1.2rem', md: '1.5rem'}}
            fontWeight="bold"
          >
            Order Details
          </Typography>
          <Chip
            sx={{
              fontSize: {xs: '.6rem', sm: '.7em'},
              color: 'white',
              backgroundColor: 'black',
            }}
            size="small"
            label={details.orderId}
          />
        </Box>
        <Box
          sx={{display: 'flex', flexDirection: 'column'}}
          marginBottom="1.5rem"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: {sm: 'row', xs: 'column'},
              gap: '.2rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                gap: '.2rem',
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap=".5rem"
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '.2rem',
                  }}
                >
                  <Icon src={busIcon} alt="Bus Icon" />
                  <Typography
                    component="div"
                    fontSize={{xs: '.5rem', sm: '.7rem', lg: '1rem'}}
                  >
                    {details.from}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '.2rem',
                  }}
                >
                  <Icon src={arrowIcon} alt="Arrow Icon" />
                  <Typography
                    component="div"
                    fontSize={{xs: '.5rem', sm: '.7rem', lg: '1rem'}}
                  >
                    {details.to}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Typography
              component="div"
              fontWeight="bold"
              color="rgba(0, 0, 0, 0.4)"
              fontSize={{sm: '1rem', xs: '0rem'}}
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
                fontSize={{xs: '.5rem', sm: '.7rem', lg: '1rem'}}
              >
                {details.time}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.2rem',
                alignItems: 'center',
              }}
            >
              <Typography
                component="div"
                fontSize={{xs: '.3rem', sm: '.5rem', lg: '.7rem'}}
              >
                2min ago
              </Typography>
              <Typography
                component="div"
                fontSize={{xs: '.5rem', sm: '.5rem', lg: '.7rem'}}
                fontWeight={600}
              >
                By {details.buyer}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box marginBottom="1.5rem">
          <Typography
            component="div"
            fontSize={{xs: '.5rem', sm: '.7rem', lg: '1rem'}}
            fontWeight={600}
            marginBottom=".5rem"
          >
            Passenger details
          </Typography>
          {details.passengers.map((passenger, index) => (
            <Typography
              key={index}
              component="div"
              fontSize={{xs: '.5rem', sm: '.5rem', lg: '.8rem'}}
              fontWeight={500}
              marginBottom=".3rem"
            >
              {index + 1}. {passenger}
            </Typography>
          ))}
        </Box>
        <Box>
          <Typography
            component="div"
            fontSize={{xs: '.5rem', sm: '.7rem', lg: '1rem'}}
            fontWeight={600}
            marginBottom="1rem"
          >
            Payment details
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography
              component="div"
              fontSize={{xs: '.5rem', sm: '.5rem', lg: '.8rem'}}
              fontWeight={500}
              marginBottom=".3rem"
            >
              Payment ID
            </Typography>
            <Typography
              component="div"
              fontSize={{xs: '.5rem', sm: '.5rem', lg: '.8rem'}}
              fontWeight={500}
              marginBottom=".3rem"
            >
              {details.receipt}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              component="div"
              fontSize={{xs: '.5rem', sm: '.5rem', lg: '.8rem'}}
              fontWeight={500}
              marginBottom=".3rem"
            >
              Ammount paid
            </Typography>
            <Typography
              component="div"
              fontSize={{xs: '.5rem', sm: '.5rem', lg: '.8rem'}}
              fontWeight={500}
              marginBottom=".3rem"
            >
              ₹{details.ammount}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              component="div"
              fontSize={{xs: '.5rem', sm: '.5rem', lg: '.8rem'}}
              fontWeight={500}
              marginBottom=".3rem"
            >
              Email id
            </Typography>
            <Typography
              component="div"
              fontSize={{xs: '.5rem', sm: '.5rem', lg: '.8rem'}}
              fontWeight={500}
              marginBottom=".3rem"
            >
              {details.email}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
