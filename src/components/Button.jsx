import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const variants = {
  default: {
    background: 'neutral',
    hover: 'background',
    text: 'text',
  },
  primary: {
    background: 'primary',
    hover: 'neutral',
    text: 'text',
  },
  secondary: {
    background: 'secondary',
    hover: 'neutral',
    text: 'text',
  },
  ghost: {
    background: 'transparent',
    hover: 'neutral',
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

const ButtonLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  background-color: ${(props) => props.theme[props.colors.background]};
  color: ${(props) => props.theme[props.colors.text]};
  border: none;
  border-radius: 5px;
  padding: ${(props) => sizes[props.size].padding};
  font-size: ${(props) => sizes[props.size].fontSize};
  cursor: pointer;
  display: ${(props) => (props.fit ? 'block' : 'inline-block')};
  width: ${(props) => (props.fit ? '100%' : 'auto')};
  text-align: ${(props) => props.aligntext};

  &:hover {
    text-decoration: none;
    background-color: ${(props) => props.theme[props.colors.hover]};
  }
`;

const StyledButtonComponent = styled.button`
  background-color: ${(props) => props.theme[props.colors.background]};
  color: ${(props) => props.theme[props.colors.text]};
  border: none;
  border-radius: 5px;
  padding: ${(props) => sizes[props.size].padding};
  font-size: ${(props) => sizes[props.size].fontSize};
  cursor: pointer;
  display: ${(props) => (props.fit ? 'block' : 'inline-block')};
  width: ${(props) => (props.fit ? '100%' : 'auto')};
  text-align: ${(props) => props.aligntext};

  &:hover {
    background-color: ${(props) => props.theme[props.colors.hover]};
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
  aligntext = 'center',
  onClick,
  ariaLabel,
  role,
  fit = false,
  disabled = false,
  to,
}) => {
  const buttonVariant = variants[variant] || variants.default;
  const isLink = !!to;

  const ButtonComponent = isLink ? ButtonLink : StyledButtonComponent;

  return (
    <ButtonComponent
      to={to || undefined}
      colors={buttonVariant}
      size={size}
      aligntext={aligntext}
      onClick={onClick}
      aria-label={ariaLabel}
      role={role}
      fit={fit ? 'true' : undefined}
      disabled={disabled}
    >
      {children}
    </ButtonComponent>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['icon', 'small', 'medium', 'large']),
  aligntext: PropTypes.oneOf(['left', 'center', 'right']),
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired,
  role: PropTypes.string,
  fit: PropTypes.bool,
  disabled: PropTypes.bool,
  to: PropTypes.string,
};

Button.defaultProps = {
  variant: 'default',
  size: 'medium',
  aligntext: 'center',
  onClick: undefined,
  role: 'button',
  fit: false,
  disabled: false,
  to: null,
};

export default Button;
