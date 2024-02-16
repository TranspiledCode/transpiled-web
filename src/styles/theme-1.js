const baseColors = {
  black: '#090909',
  blue: '#25B0D3',
  darkBlue: '#034C70',
  darkGray: '#757575',
  error: '#dc3545',
  gray: '#afafaf',
  green: '#64DDBB',
  info: '#17a2b8',
  lightBlue: '#99D0E9',
  lightGray: '#f5f5f5',
  orange: '#FF9215',
  pink: '#FF6B6B',
  separator: '#eaeaea',
  shark: '#212529',
  success: '#28a745',
  transparent: 'transparent',
  warning: '#ffc107',
  white: '#ffffff',
};

const baseTheme = {
  colors: baseColors,
};

// Define button colors for dark theme
const darkButtonColors = {
  default: {
    background: baseColors.darkGray,
    hoverBackground: baseColors.gray,
    hoverText: baseColors.lightGray,
    text: baseColors.lightGray,
  },
  ghost: {
    background: baseColors.transparent,
    hoverBackground: baseColors.gray,
    hoverText: baseColors.white,
    text: baseColors.lightGray,
  },
  primary: {
    background: baseColors.blue,
    hoverBackground: baseColors.darkBlue,
    hoverText: baseColors.white,
    text: baseColors.white,
  },
  secondary: {
    background: baseColors.orange,
    hoverBackground: baseColors.darkGray,
    hoverText: baseColors.white,
    text: baseColors.white,
  },
};

// Define button colors for light theme
const lightButtonColors = {
  default: {
    background: baseColors.gray,
    hoverBackground: baseColors.darkGray,
    hoverText: baseColors.black,
    text: baseColors.black,
  },
  ghost: {
    background: baseColors.transparent,
    hoverBackground: baseColors.lightGray,
    hoverText: baseColors.darkGray,
    text: baseColors.gray,
  },
  primary: {
    background: baseColors.blue,
    hoverBackground: baseColors.lightBlue,
    hoverText: baseColors.darkBlue,
    text: baseColors.white,
  },
  secondary: {
    background: baseColors.orange,
    hoverBackground: baseColors.lightGray,
    hoverText: baseColors.darkGray,
    text: baseColors.white,
  },
};

// Define notification colors for dark theme
const darkNotificationColors = {
  error: {
    background: baseColors.error,
    foreground: baseColors.lightGray, // Adjusted for better readability in dark theme
  },
  info: {
    background: baseColors.info,
    foreground: baseColors.lightGray, // Adjusted for consistency and readability
  },
  success: {
    background: baseColors.success,
    foreground: baseColors.lightGray, // Ensures contrast and readability
  },
  warning: {
    background: baseColors.warning,
    foreground: baseColors.darkGray, // Adjusted for visibility against warning color
  },
};

// Define notification colors for light theme
const lightNotificationColors = {
  error: {
    background: baseColors.error,
    foreground: baseColors.white, // Maintained for optimal contrast
  },
  info: {
    background: baseColors.info,
    foreground: baseColors.white, // Clear and consistent with light theme design
  },
  success: {
    background: baseColors.success,
    foreground: baseColors.white, // Ensures readability on light backgrounds
  },
  warning: {
    background: baseColors.warning,
    foreground: baseColors.shark, // Adjusted for contrast on light theme
  },
};

const transpiledTheme = {
  dark: {
    ...baseTheme,
    accent: baseColors.orange,
    altBackground: baseColors.lightGray,
    altText: baseColors.black,
    background: baseColors.black,
    bar: baseColors.black,
    buttonColors: darkButtonColors, // Use dark theme button colors
    highlight: baseColors.lightBlue,
    knob: baseColors.blue,
    neutral: baseColors.darkGray,
    notificationColors: lightNotificationColors,
    primary: baseColors.blue,
    secondary: baseColors.orange,
    text: baseColors.lightGray,
  },
  light: {
    ...baseTheme,
    accent: baseColors.darkBlue,
    altBackground: baseColors.black,
    altText: baseColors.lightGray,
    background: baseColors.white,
    bar: baseColors.lightGray,
    buttonColors: lightButtonColors, // Use light theme button colors
    highlight: baseColors.lightBlue,
    knob: baseColors.blue,
    neutral: baseColors.gray,
    notificationColors: darkNotificationColors,
    primary: baseColors.blue,
    secondary: baseColors.orange,
    text: baseColors.black,
  },
};

export default transpiledTheme;
