// Button.js
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${({ variant, theme }) =>
    variant === 'ghost'
      ? 'transparent'
      : theme.buttons.variants[variant].bgColor};
  color: ${({ variant, theme }) =>
    variant === 'ghost'
      ? theme.buttons.variants[variant].textColor
      : theme.buttons.variants[variant].textColor};
  padding: ${({ size, theme }) => theme.buttons.sizes[size].padding};
  font-size: ${({ size, theme }) => theme.buttons.sizes[size].fontSize};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border: ${({ variant, theme }) =>
    variant === 'ghost'
      ? `2px solid ${theme.buttons.variants[variant].borderColor}`
      : 'none'};
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === 'ghost'
        ? theme.buttons.variants[variant].hoverBgColor
        : theme.buttons.variants[variant].hoverColor};
    color: ${({ variant, theme }) =>
      variant === 'ghost'
        ? theme.buttons.variants[variant].hoverTextColor
        : theme.buttons.variants[variant].hoverTextColor};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  fullWidth = false, // New prop for full width
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      type={type}
      disabled={disabled}
      fullWidth={fullWidth} // Pass fullWidth prop to styled button
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
  ]),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']), // Added 'tiny' size
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool, // New prop for full width
};

export default Button;
