// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import theme from './style/theme';

import ContextProvider from './context/GlobalProvider';
import { ToastProvider } from './context/ToastContext';

import RouteToTop from './utils/RouteToTop';
import ScrollToHash from './utils/ScrollToHash';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <RouteToTop />
      <ScrollToHash />
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider position="bottom-left">
            <ScrollToTop />
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
