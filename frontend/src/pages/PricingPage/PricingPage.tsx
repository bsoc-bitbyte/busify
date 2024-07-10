import React from 'react';
import {Container, Grid, Typography} from '@mui/material';
import PricingCard from './PricingCards';

const plans = [
  {
    title: 'Basic Plan',
    price: 'Free',
    features: [
      'Basic Route Information',
      'Schedule Information',
      'Push Notifications',
    ],
  },
  {
    title: 'Premium Plan',
    price: '₹100',
    features: ['Priority Customer Support', 'Quick Access', 'Exclusive Offers'],
  },
  {
    title: 'Standard Plan',
    price: '₹50',
    features: ['Advanced Route Information', 'Quick Access', 'Schedule Alerts'],
  },
];

const PricingPage = () => {
  return (
    <Container sx={{py: 8}}>
      <Typography variant="h2" align="center" gutterBottom>
        Busify Pricing Plans
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Choose the plan that best suits your needs.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={3}
            style={{
              transform:
                index === Math.floor(plans.length / 2) ? 'scale(1.1)' : 'none',
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <PricingCard
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PricingPage;
