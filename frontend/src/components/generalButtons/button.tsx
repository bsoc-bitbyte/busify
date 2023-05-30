import PropTypes from 'prop-types';
import {Button, IconButton, Tooltip} from '@mui/material';
import {CustomButtonProps} from '../../types';

const CustomButton: React.FC<CustomButtonProps> = props => {
  const renderIcon = () => {
    return props.icon && <IconButton>props.icon</IconButton>;
  };

  const renderBtnContent = () => {
    return (
      <>
        {props.label}
        {renderIcon()}
      </>
    );
  };
  const button_component = (
    <Button
      variant={props.variant}
      color={props.color}
      size={props.size}
      disabled={props.disabled}
      href={props.href ? props.href : '#'}
      onClick={props.onClick}
    >
      {renderBtnContent()}
    </Button>
  );
  return (
    <>
      {props.title ? (
        <Tooltip title={props.title} placement={props.placement}>
          {button_component}
        </Tooltip>
      ) : (
        {button_component}
      )}
    </>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'success',
    'info',
    'warning',
    'error',
    'inherit',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  href: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  disabled: false,
  variant: 'contained',
  size: 'medium',
};

export default CustomButton;
