// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import theme from './style/theme';

import ContextProvider from './context/GlobalProvider';
import { ToastProvider } from './context/ToastContext';

import RouteToTop from './utils/RouteToTop';
import ScrollToHash from './utils/ScrollToHash';

import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <RouteToTop />
      <ScrollToHash />
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <ToastProvider position="bottom-left">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
          </ToastProvider>
        </ContextProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
