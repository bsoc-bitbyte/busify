import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Divider,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({title, price, features}) => {
  return (
    <Card variant="outlined" sx={{maxWidth: 345, margin: 'auto', mt: 4}}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {price}
        </Typography>
        <Divider sx={{my: 2}} />
        <Box>
          {features.map((feature, index) => (
            <Box key={index} display="flex" alignItems="center" mb={1}>
              <CheckIcon sx={{color: 'green', mr: 1}} />
              <Typography variant="body2">{feature}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" fullWidth>
          Choose Plan
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
