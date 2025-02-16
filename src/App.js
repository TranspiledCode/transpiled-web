// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from '@emotion/react';
import theme from './style/theme';

import ContextProvider from './context/GlobalProvider';
import { ToastProvider } from './context/ToastContext';

import RouteToTop from './utils/RouteToTop';
import ScrollToHash from './utils/ScrollToHash';
import ProtectedRoute from './utils/ProtectedRoute';

import Layout from 'components/templates/PageLayout';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import NotFound from './pages/404';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import ContactPage from './pages/Contact';
import PortfolioPage from './pages/Portfolio';
import About from './pages/About';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <RouteToTop />
        <ScrollToHash />
        <ThemeProvider theme={theme}>
          <ContextProvider>
            <ToastProvider position="bottom-left">
              <Routes>
                {/* Routes without Layout */}
                <Route path="/login" element={<LoginPage />} />

                {/* Routes with Layout */}
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <ProfilePage />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                </Route>
              </Routes>
            </ToastProvider>
          </ContextProvider>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
};

export default App;
