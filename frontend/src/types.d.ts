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
