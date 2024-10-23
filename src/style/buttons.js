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
      borderColor: colors.blue,
      textColor: colors.blue,
      hoverBgColor: colors.lightBlue,
      hoverTextColor: colors.white,
    },
  },
  sizes: {
    tiny: {
      padding: '4px 8px',
      fontSize: '12px',
    },
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
  },
};

export default buttons;
