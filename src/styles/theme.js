import baseColors from './baseColors';

// Function to generate theme-specific variations (e.g., for buttons, notifications)
const generateThemeVariants = (mode) => {
  const isDark = mode === 'dark';
  return {
    background: isDark ? baseColors.black : baseColors.white,
    altBackground: isDark ? baseColors.white : baseColors.black,
    text: isDark ? baseColors.white : baseColors.black,
    altText: isDark ? baseColors.black : baseColors.white,
    border: isDark ? baseColors.darkGray : baseColors.lightGray,
    altBorder: isDark ? baseColors.lightGray : baseColors.darkGray,
    primary: isDark ? baseColors.orange : baseColors.blue,
    secondary: isDark ? baseColors.blue : baseColors.orange,
    accent: isDark ? baseColors.blue : baseColors.orange,
    neutral: isDark ? baseColors.lightGray : baseColors.darkGray,
    shadowColor: isDark ? baseColors.darkGray : baseColors.lightGray,
    separator: isDark ? baseColors.darkGray : baseColors.lightGray,

    // base colors
    white: baseColors.white,
    black: baseColors.black,
    darkBlue: baseColors.darkBlue,
    transparent: baseColors.transparent,

    // Input colors
    inputBorderColor: baseColors.white,
    inputBorderFocusColor: baseColors.blue,
    inputFontColor: baseColors.white,
    inputLabelColor: baseColors.white,
    inputLabelFocusColor: baseColors.blue,
    inputPlaceholderColor: baseColors.white,
    inputBackgroundColor: baseColors.transparent,
    inputClearIconColor: baseColors.white,

    switch: {
      bar: isDark ? baseColors.blue : baseColors.orange,
      knob: isDark ? baseColors.orange : baseColors.blue,
    },
    button: {
      default: {
        background: isDark ? baseColors.darkGray : baseColors.gray,
        text: isDark ? baseColors.lightGray : baseColors.black,
        hoverBackground: isDark ? baseColors.gray : baseColors.darkGray,
        hoverText: isDark ? baseColors.lightGray : baseColors.white,
        disabledBackground: isDark ? baseColors.gray : baseColors.darkGray,
        disabledText: isDark ? baseColors.lightGray : baseColors.white,
      },
      ghost: {
        background: baseColors.transparent,
        text: isDark ? baseColors.lightGray : baseColors.black,
        hoverBackground: isDark ? baseColors.gray : baseColors.darkGray,
        hoverText: isDark ? baseColors.lightGray : baseColors.white,
        disabledBackground: isDark ? baseColors.gray : baseColors.darkGray,
        disabledText: isDark ? baseColors.lightGray : baseColors.white,
      },
      primary: {
        background: isDark ? baseColors.blue : baseColors.darkBlue,
        text: isDark ? baseColors.white : baseColors.white,
        hoverBackground: isDark ? baseColors.darkBlue : baseColors.blue,
        hoverText: isDark ? baseColors.white : baseColors.white,
        disabledBackground: isDark ? baseColors.darkBlue : baseColors.blue,
        disabledText: isDark ? baseColors.white : baseColors.white,
      },
      secondary: {
        background: isDark ? baseColors.darkGray : baseColors.orange,
        text: isDark ? baseColors.white : baseColors.white,
        hoverBackground: isDark ? baseColors.orange : baseColors.darkGray,
        hoverText: isDark ? baseColors.white : baseColors.white,
        disabledBackground: isDark ? baseColors.darkGray : baseColors.orange,
        disabledText: isDark ? baseColors.white : baseColors.white,
      },
    },
    notification: {
      error: {
        background: isDark ? baseColors.shark : baseColors.error,
        text: baseColors.white,
        hoverBackground: isDark ? baseColors.error : baseColors.shark,
        hoverText: baseColors.white,
      },
      success: {
        background: isDark ? baseColors.shark : baseColors.success,
        text: baseColors.white,
        hoverBackground: isDark ? baseColors.success : baseColors.shark,
        hoverText: baseColors.white,
      },
      warning: {
        background: isDark ? baseColors.shark : baseColors.warning,
        text: baseColors.black,
        hoverBackground: isDark ? baseColors.warning : baseColors.shark,
        hoverText: baseColors.black,
      },
      info: {
        background: isDark ? baseColors.shark : baseColors.info,
        text: baseColors.white,
        hoverBackground: isDark ? baseColors.info : baseColors.shark,
        hoverText: baseColors.white,
      },
      default: {
        background: isDark ? baseColors.darkGray : baseColors.gray,
        text: isDark ? baseColors.lightGray : baseColors.black,
        hoverBackground: isDark ? baseColors.gray : baseColors.darkGray,
        hoverText: isDark ? baseColors.lightGray : baseColors.white,
      },
    },
    link: {
      text: isDark ? baseColors.lightGray : baseColors.black,
      hoverText: isDark ? baseColors.lightGray : baseColors.black,
    },
  };
};

// Defining the dark and light themes using the base colors and variations
const transpiledTheme = {
  dark: generateThemeVariants('dark'),
  light: generateThemeVariants('light'),
};

export default transpiledTheme;
