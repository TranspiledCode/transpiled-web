// App.js
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './style/theme';
import ContextProvider from './context/GlobalProvider';
import Home from './pages/Home';
import { ToastProvider } from './context/ToastContext';

const App = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider position="bottom-left">
          <Home />
        </ToastProvider>
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
