// Define types for the frontend here
import {TooltipProps} from '@mui/material/Tooltip';

export interface CustomButtonProps extends Omit<TooltipProps, 'children'> {
  label: string;
  title?: string;
  loading?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  icon?: React.ReactNode;
  disabled?: boolean;
  color?: 'primary' | 'success' | 'info' | 'warning' | 'error' | 'inherit';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
}

type BusTicketType = {
  id: string;
  busNumber: string;
  checkpoints: string[];
  from: string;
  to: string;
  departureTime: string;
  days: string[];
  ticketPrice: number;
};

type BusDetailsType = {
  disabled?: boolean;
  time?: string;
  from?: string;
  to?: string;
};

type BusTicketData = {
  checkpoints: string[];
  time: string;
  price: number;
  seatsLeft: number;
  disabled?: boolean;
  from?: string;
  to?: string;
  scheduleId: string;
};
