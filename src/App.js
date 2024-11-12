// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import theme from './style/theme';

import ContextProvider from './context/GlobalProvider';
import { ToastProvider } from './context/ToastContext';

import Home from './pages/Home';
import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider position="bottom-left">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </ToastProvider>
        </ThemeProvider>
      </ContextProvider>
    </Router>
  );
};

export default App;
