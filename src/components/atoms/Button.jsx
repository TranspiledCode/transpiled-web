// Button.js
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const getButtonStyles = ({ variant, theme, size, fullWidth }) => ({
  backgroundColor: theme.buttons.variants[variant].bgColor || 'transparent',
  color: theme.buttons.variants[variant].textColor,
  padding: theme.buttons.sizes[size].padding,
  fontSize: theme.buttons.sizes[size].fontSize,
  width: fullWidth ? '100%' : 'auto',
  border: theme.buttons.variants[variant].borderColor
    ? `2px solid ${theme.buttons.variants[variant].borderColor}`
    : 'none',
});

const getHoverStyles = ({ variant, theme }) => ({
  backgroundColor:
    theme.buttons.variants[variant].hoverBgColor ||
    theme.buttons.variants[variant].hoverColor ||
    theme.buttons.variants[variant].bgColor,
  color:
    theme.buttons.variants[variant].hoverTextColor ||
    theme.buttons.variants[variant].textColor,
});

const StyledButton = styled.button(({ variant, theme, size, fullWidth }) => ({
  ...getButtonStyles({ variant, theme, size, fullWidth }),
  borderRadius: '0px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: theme.fonts.manrope,
  fontWeight: '500',

  '&:disabled': {
    backgroundColor: theme.colors.gray,
    cursor: 'not-allowed',
  },

  '@media (min-width: 768px)': {
    '&:hover': {
      ...getHoverStyles({ variant, theme }),
    },
  },
}));

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  fullWidth = false,
  onClick,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      type={type}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'ghost',
    'outline',
    'outlineGray',
  ]),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
