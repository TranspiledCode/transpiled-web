// src/App.js
import Home from './pages/home.jsx';
import { ThemeProvider } from '@emotion/react';
import theme from 'style/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
