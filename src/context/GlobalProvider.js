// ContextProvider.js
import React from 'react';
import PropTypes from 'prop-types';
import { GlobalProvider } from './GlobalContext';
import { ContactFormProvider } from './ContactForm'; // Existing ContactFormProvider
import { ToastProvider } from './ToastContext'; // Import ToastProvider

const ContextProvider = ({ children }) => {
  return (
    <GlobalProvider>
      <ToastProvider>
        <ContactFormProvider>
          {/* Add other providers here */}
          {children}
        </ContactFormProvider>
      </ToastProvider>
    </GlobalProvider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
