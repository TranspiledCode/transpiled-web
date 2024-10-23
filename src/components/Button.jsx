// Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FaSpinner } from 'react-icons/fa';

// Styled button with dynamic styles based on props
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) =>
    size === 'small'
      ? '0.5rem 1rem'
      : size === 'large'
        ? '1rem 2rem'
        : '0.75rem 1.5rem'};
  font-size: ${({ size }) =>
    size === 'small' ? '1.4rem' : size === 'large' ? '2rem' : '1.6rem'};
  font-weight: 600;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  position: relative;

  /* Variant styles */
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.orange;
      case 'secondary':
        return theme.colors.gray;
      case 'danger':
        return theme.colors.red;
      case 'link':
        return 'transparent';
      default:
        return theme.colors.orange;
    }
  }};
  color: ${({ variant, theme }) =>
    variant === 'link' ? theme.colors.orange : theme.colors.white};

  /* Hover effects */
  &:hover {
    background-color: ${({ variant, theme }) => {
      switch (variant) {
        case 'primary':
          return theme.colors.darkOrange;
        case 'secondary':
          return theme.colors.darkGray;
        case 'danger':
          return theme.colors.darkRed;
        case 'link':
          return 'transparent';
        default:
          return theme.colors.darkOrange;
      }
    }};
    color: ${({ variant, theme }) =>
      variant === 'link' ? theme.colors.darkOrange : theme.colors.white};
  }

  /* Disabled state */
  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }

  /* Responsive adjustments */
  @media (max-width: 600px) {
    padding: ${({ size }) =>
      size === 'small'
        ? '0.4rem 0.8rem'
        : size === 'large'
          ? '0.8rem 1.6rem'
          : '0.6rem 1.2rem'};
    font-size: ${({ size }) =>
      size === 'small' ? '1.2rem' : size === 'large' ? '1.8rem' : '1.4rem'};
  }

  /* Icon spacing */
  svg {
    margin: ${({ iconPosition }) =>
      iconPosition === 'left' ? '0 0.5rem 0 0' : '0 0 0 0.5rem'};
  }
`;

// Spinner for loading state
const Spinner = styled(FaSpinner)`
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// The Button component
const Button = ({
  children,
  variant,
  size,
  onClick,
  disabled,
  type,
  icon,
  iconPosition,
  isLoading,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
      iconPosition={iconPosition}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Spinner aria-hidden="true" />}
      {!isLoading && icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && <span>{icon}</span>}
    </StyledButton>
  );
};

// Prop types for validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'link']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  isLoading: PropTypes.bool,
};

// Default props
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  onClick: () => {},
  disabled: false,
  type: 'button',
  icon: null,
  iconPosition: 'left',
  isLoading: false,
};

export default Button;
