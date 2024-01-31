import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const variants = {
  default: {
    background: 'neutral',
    text: 'text',
  },
  primary: {
    background: 'primaryColor',
    text: 'text',
  },
  secondary: {
    background: 'secondaryColor',
    text: 'text',
  },
  ghost: {
    background: 'transparent',
    text: 'text',
  },
};

const sizes = {
  icon: {
    padding: '0px',
    fontSize: 'inherit',
  },
  small: {
    padding: '8px 10px',
    fontSize: '14px',
  },
  medium: {
    padding: '10px 20px',
    fontSize: '16px',
  },
  large: {
    padding: '15px 30px',
    fontSize: '20px',
  },
};

const StyledButton = styled.button`
  background-color: ${(props) => props.theme[props.colors.background]};
  color: ${(props) => props.theme[props.colors.text]};
  border: none;
  border-radius: 5px;
  padding: ${(props) => sizes[props.size].padding};
  font-size: ${(props) => sizes[props.size].fontSize};
  cursor: pointer;
  display: ${(props) => (props.fit ? 'block' : 'inline-block')};
  width: ${(props) => (props.fit ? '100%' : 'auto')};
  text-align: ${(props) => props.alignText};

  &:hover {
    background-color: ${(props) => props.theme[props.colors.background]};
  }

  &:disabled {
    background-color: ${(props) => props.theme.neutral};
    color: ${(props) => props.theme.text};
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  variant = 'default',
  size = 'medium',
  alignText = 'center',
  onClick,
  ariaLabel,
  role,
  fit = false,
  disabled = false,
}) => {
  const buttonVariant = variants[variant] || variants.default;

  return (
    <StyledButton
      colors={buttonVariant}
      size={size}
      alignText={alignText}
      onClick={onClick}
      aria-label={ariaLabel}
      role={role}
      fit={fit}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['icon', 'small', 'medium', 'large']),
  alignText: PropTypes.oneOf(['left', 'center', 'right']),
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired,
  role: PropTypes.string,
  fit: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'default',
  size: 'medium',
  alignText: 'center',
  onClick: undefined,
  role: 'button',
  fit: false,
  disabled: false,
};

export default Button;
