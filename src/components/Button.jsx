// Button.js
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const variants = {
  primary: {
    bgColor: '#6200ee',
    hoverColor: '#3700b3',
    textColor: '#ffffff',
  },
  secondary: {
    bgColor: '#03dac6',
    hoverColor: '#018786',
    textColor: '#000000',
  },
};

const sizes = {
  small: {
    padding: '8px 16px',
    fontSize: '14px',
  },
  medium: {
    padding: '12px 24px',
    fontSize: '16px',
  },
  large: {
    padding: '16px 32px',
    fontSize: '18px',
  },
};

const StyledButton = styled.button`
  background-color: ${(props) => variants[props.variant]?.bgColor || '#6200ee'};
  color: ${(props) => variants[props.variant]?.textColor || '#ffffff'};
  padding: ${(props) => sizes[props.size]?.padding || '12px 24px'};
  font-size: ${(props) => sizes[props.size]?.fontSize || '16px'};
  border: none;
  border-radius: ${(props) => props.borderRadius || '4px'};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      variants[props.variant]?.hoverColor || '#3700b3'};
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
}) => {
  return (
    <StyledButton variant={variant} size={size} type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
