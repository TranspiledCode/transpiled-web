const theme = {
  colors: {
    // Standard Colors
    blue: '#25B0D3',
    lightBlue: '#99D0E9',
    darkBlue: '#034C70',
    blueAccent: '#197F9A',
    green: '#64DDBB',
    orange: '#FF9215',
    pink: '#FF6B6B',

    // Neutral Colors
    black: '#090909',
    white: '#ffffff',
    gray: '#afafaf',
    lightGray: '#f5f5f5',
    darkGray: '#757575',

    // Functional Colors
    success: '#28a745',
    error: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
  },
  layout: {
    maxWidth: '1200px',
  },
  mixins: {
    flexColCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flexRowCenter: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};

export default theme;
