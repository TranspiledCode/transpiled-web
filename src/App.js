// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import theme from './style/theme';

import ContextProvider from './context/GlobalProvider';
import { ToastProvider } from './context/ToastContext';

import RouteToTop from './utils/RouteToTop';
import ScrollToHash from './utils/ScrollToHash';
import ProtectedRoute from './utils/ProtectedRoute';

import Layout from 'components/templates/PageLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import NotFound from './pages/404';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import ContactPage from './pages/Contact';

const App = () => {
  return (
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
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </ToastProvider>
        </ContextProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
