// Button.js
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Icon from 'atoms/Icon';
import { useTheme } from '@emotion/react';

// Styled components
const IconWrapper = styled.span`
  display: inline-flex;
  margin-left: 2rem;
`;

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
  icon,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  fullWidth = false,
  onClick,
}) => {
  const theme = useTheme();
  const iconSize = Number(theme.buttons.sizes[size].iconSize);

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
      {icon && (
        <IconWrapper>
          <Icon name={icon} size={iconSize} color="white" />
        </IconWrapper>
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
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
  onClick: PropTypes.func,
};

export default Button;
