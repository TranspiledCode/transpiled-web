// Button.js
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${({ variant, theme }) =>
    theme.buttons.variants[variant].bgColor || 'transparent'};
  color: ${({ variant, theme }) => theme.buttons.variants[variant].textColor};
  padding: ${({ size, theme }) => theme.buttons.sizes[size].padding};
  font-size: ${({ size, theme }) => theme.buttons.sizes[size].fontSize};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border: ${({ variant, theme }) =>
    theme.buttons.variants[variant].borderColor
      ? `2px solid ${theme.buttons.variants[variant].borderColor}`
      : 'none'};
  border-radius: 0px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ variant, theme }) =>
      theme.buttons.variants[variant].hoverBgColor ||
      theme.buttons.variants[variant].hoverColor ||
      theme.buttons.variants[variant].bgColor};
    color: ${({ variant, theme }) =>
      theme.buttons.variants[variant].hoverTextColor ||
      theme.buttons.variants[variant].textColor};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;

// Wrapper for the icon to add spacing
const IconWrapper = styled.span`
  display: inline-flex;
  margin-left: 8px; /* Adjust spacing as needed */
`;

const Button = ({
  children,
  icon, // New prop for icon
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      type={type}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {children}
      {icon && <IconWrapper>{icon}</IconWrapper>}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.element, // New prop type for icon
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'ghost',
    'outline',
  ]),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default Button;
