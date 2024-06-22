import {Typography, Box} from '@mui/material';
import Card from '@mui/material/Card';
import RecentOrderCard from '../RecentOrderCard';
import AdminPageLayout from '../AdminPageLayout';

export default function AdminDashboard() {
  return (
    <Box>
      <AdminPageLayout>
        <Card
          sx={{
            backgroundColor: 'rgba(255, 226, 131, 1)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.3rem',
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
              fontSize={{xs: '1rem', md: '1.4rem', lg: '1.5rem'}}
            >
              Tickets booked today
            </Typography>
          </Box>
          <Typography
            component="div"
            sx={{fontWeight: 'bold'}}
            fontSize={{xs: '1.8rem', md: '2.2rem', lg: '2.3rem'}}
          >
            100
          </Typography>
        </Card>
        <Typography
          component="div"
          sx={{
            fontWeight: 'bold',
            mt: '3rem',
            mb: '1rem',
            color: 'rgba(0, 0, 0, 0.4)',
          }}
          fontSize={{xs: '1.6rem', md: '2.2rem', lg: '2.3rem'}}
        >
          Recent orders
        </Typography>
        <RecentOrderCard />
        <RecentOrderCard />
        <RecentOrderCard />
        <RecentOrderCard />
      </AdminPageLayout>
    </Box>
  );
}
