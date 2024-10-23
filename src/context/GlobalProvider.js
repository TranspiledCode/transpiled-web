// ContextProvider.js
import React from 'react';
import PropTypes from 'prop-types';
import { ContactFormProvider } from './ContactForm'; // Existing ContactFormProvider
import { ToastProvider } from './ToastContext'; // Import ToastProvider

const ContextProvider = ({ children }) => {
  return (
    <ToastProvider>
      <ContactFormProvider>
        {/* Add other providers here */}
        {children}
      </ContactFormProvider>
    </ToastProvider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
