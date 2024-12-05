import React from 'react';
import PropTypes from 'prop-types';
import { GlobalProvider } from './GlobalContext';
import { ContactFormProvider } from './ContactForm'; // Existing ContactFormProvider
import { ToastProvider } from './ToastContext'; // Existing ToastProvider
import { AuthProvider } from './AuthContext'; // New AuthProvider

const ContextProvider = ({ children }) => {
  return (
    <GlobalProvider>
      <ToastProvider>
        <ContactFormProvider>
          <AuthProvider>{children}</AuthProvider>
        </ContactFormProvider>
      </ToastProvider>
    </GlobalProvider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
