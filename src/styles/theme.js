// Define a base theme to reduce repetition and enhance maintainability
const baseTheme = {
  colors: {
    blue: '#25B0D3',
    darkBlue: '#034C70',
    lightBlue: '#99D0E9',
    gray: '#afafaf',
    lightGray: '#f5f5f5',
    darkGray: '#757575',
    orange: '#FF9215',
    pink: '#FF6B6B',
    green: '#64DDBB',
    transparent: 'transparent',
    separator: '#eaeaea',
    white: '#ffffff',
    black: '#090909',
    shark: '#212529',
    // Notification colors
    info: '#17a2b8',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
  },
};

const notificationColors = {
  info: {
    background: baseTheme.colors.info,
    foreground: baseTheme.colors.white,
  },
  success: {
    background: baseTheme.colors.success,
    foreground: baseTheme.colors.white,
  },
  warning: {
    background: baseTheme.colors.warning,
    foreground: baseTheme.colors.shark,
  },
  error: {
    background: baseTheme.colors.error,
    foreground: baseTheme.colors.white,
  },
};

const transpiledTheme = {
  light: {
    ...baseTheme,
    primary: baseTheme.colors.blue,
    secondary: baseTheme.colors.orange,
    background: baseTheme.colors.lightGray,
    altBackground: baseTheme.colors.almostBlack,
    text: baseTheme.colors.almostBlack,
    altText: baseTheme.colors.lightGray,
    accent: baseTheme.colors.darkBlue,
    neutral: baseTheme.colors.gray,
    highlight: baseTheme.colors.lightBlue,
    white: baseTheme.colors.lightGray,
    black: baseTheme.colors.almostBlack,
    knob: baseTheme.colors.blue,
    bar: baseTheme.colors.lightGray,
    primaryButton: baseTheme.colors.darkBlue,
    info: baseTheme.colors.info,
    success: baseTheme.colors.success,
    warning: baseTheme.colors.warning,
    error: baseTheme.colors.error,
  },
  dark: {
    ...baseTheme,
    primary: baseTheme.colors.blue,
    secondary: baseTheme.colors.orange,
    background: baseTheme.colors.almostBlack,
    altBackground: baseTheme.colors.lightGray,
    text: baseTheme.colors.lightGray,
    altText: baseTheme.colors.almostBlack,
    accent: baseTheme.colors.orange,
    neutral: baseTheme.colors.darkGray,
    highlight: baseTheme.colors.lightBlue,
    white: baseTheme.colors.lightGray,
    black: baseTheme.colors.almostBlack,
    bar: baseTheme.colors.almostBlack,
    primaryButton: baseTheme.colors.darkBlue,
    info: baseTheme.colors.info,
    success: baseTheme.colors.success,
    warning: baseTheme.colors.warning,
    error: baseTheme.colors.error,
  },
  colors: {
    ...baseTheme.colors,
    ...notificationColors,
  },
};

export default transpiledTheme;
