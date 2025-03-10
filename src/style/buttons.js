// buttons.js
import colors from './colors';

const buttons = {
  variants: {
    primary: {
      bgColor: colors.orange,
      hoverColor: colors.white,
      textColor: colors.white,
      hoverTextColor: colors.darkBlue,
    },
    secondary: {
      bgColor: colors.green,
      hoverColor: colors.white,
      textColor: colors.darkBlue,
      hoverTextColor: colors.white,
    },
    success: {
      bgColor: colors.success,
      hoverColor: colors.green,
      textColor: colors.white,
      hoverTextColor: colors.white,
    },
    warning: {
      bgColor: colors.warning,
      hoverColor: colors.orange,
      textColor: colors.black,
      hoverTextColor: colors.black,
    },
    danger: {
      bgColor: colors.error,
      hoverColor: colors.darkGray,
      textColor: colors.white,
      hoverTextColor: colors.white,
    },
    ghost: {
      borderColor: colors.lightBlue,
      textColor: colors.lightBlue,
      hoverBgColor: colors.lightBlue,
      hoverTextColor: colors.white,
    },
    outline: {
      bgColor: 'transparent',
      hoverBgColor: 'transparent',
      borderColor: colors.white,
      textColor: colors.white,
      hoverColor: colors.white,
      hoverTextColor: colors.green,
    },
    outlineGray: {
      bgColor: 'transparent',
      hoverBgColor: 'transparent',
      borderColor: colors.darkGray,
      textColor: colors.darkGray,
      hoverColor: colors.green,
      hoverTextColor: colors.green,
    },
  },
  sizes: {
    tiny: {
      padding: '4px 8px',
      fontSize: '12px',
      iconSize: '12px',
    },
    small: {
      padding: '8px 16px',
      fontSize: '14px',
      iconSize: '14px',
    },
    medium: {
      padding: '12px 24px',
      fontSize: '26px',
      iconSize: '26px',
    },
    large: {
      padding: '6px 16px',
      fontSize: '36px',
      iconSize: '34px',
    },
  },
};

export default buttons;
