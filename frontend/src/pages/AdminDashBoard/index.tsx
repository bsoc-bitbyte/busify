import {Box, Typography, useTheme} from '@mui/material';
import AdminLayout from '../../components/AdminPanel/AdminLayout';
import RecentOrderCard from '../../components/AdminPanel/RecentOrderCard';
import {useEffect, useState} from 'react';
import axios from 'axios';
import EmptyModal from '../../components/Custom Empty Modal';
import NotFound from '../../assets/NotFound.svg';

export type RecentOrdersProps = {
  orderId: string;
  ammount: number;
  receipt: string;
  buyer: string;
  from: string;
  to: string;
  time: string;
  passengers: string[];
  email: string;
  createdAt: Date;
};

const Admin = () => {
  const [orders, setOrders] = useState<RecentOrdersProps[]>([]);
  const theme = useTheme();

  useEffect(() => {
    const getRecentOrders = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/orders/recent`,
          {
            withCredentials: true,
          }
        );
        if (res.status === 200 && res.data) {
          setOrders(res.data as RecentOrdersProps[]);
        }
      } catch (error) {
        setOrders([]);
      }
    };
    getRecentOrders();
  }, []);
  return (
    <>
      <AdminLayout>
        <Box
          display="flex"
          padding=".7rem"
          borderRadius="16px"
          gap="1.5rem"
          sx={{
            backgroundColor: '#FFF2CB',
            maxWidth: '250px',
            border: '3px solid #FBBC05',
          }}
          alignItems="center"
          justifyContent="space-around"
          marginBottom="1.5rem"
        >
          <Typography
            component="div"
            fontSize={{xs: '.5rem', sm: '1rem', md: '1.2rem'}}
            fontWeight="bold"
            color={theme.palette.primary.main}
            textAlign="center"
          >
            Tickets <br /> Ordered Today
          </Typography>
          <Typography
            component="div"
            fontSize={{xs: '1.2rem', sm: '1.5rem', md: '2rem'}}
            fontWeight="bold"
            color={theme.palette.primary.main}
          >
            {orders?.length}
          </Typography>
        </Box>
        {orders.length !== 0 ? (
          <Typography
            component="div"
            fontSize={{xs: '1rem', sm: '1.2rem', md: '1.5rem'}}
            fontWeight="bold"
            color={theme.palette.secondary.light}
          >
            Recent Orders
          </Typography>
        ) : (
          <>
            <Typography
              component="div"
              fontSize={{xs: '1rem', sm: '1.2rem', md: '1.5rem'}}
              fontWeight="bold"
              color={theme.palette.secondary.light}
            >
              Recent Orders
            </Typography>
            <EmptyModal
              img={NotFound}
              title="No recent orders found!"
              description="Hey! You cannot see any recent orders as there are no recent orders you have done yet. Book tickets to see the expected."
            />
          </>
        )}
        {orders?.map(order => (
          <RecentOrderCard key={order.orderId} details={order} />
        ))}
      </AdminLayout>
    </>
  );
};

export default Admin;
