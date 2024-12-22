// ContextProvider.js
import React from 'react';
import PropTypes from 'prop-types';
import { GlobalProvider } from './GlobalContext';
import { ContactFormProvider } from './ContactForm';
import { ToastProvider } from './ToastContext';
import { AuthProvider } from './AuthContext';

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <ToastProvider>
          <ContactFormProvider>{children}</ContactFormProvider>
        </ToastProvider>
      </GlobalProvider>
    </AuthProvider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
