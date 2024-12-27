// ContextProvider.js
import React from 'react';
import PropTypes from 'prop-types';
import { GlobalProvider } from './GlobalContext';
import { ContactFormProvider } from './ContactForm';
import { ToastProvider } from './ToastContext';
import { AuthProvider } from './AuthContext';
import { FirestoreProvider } from './FirestoreContext'; // Import FirestoreProvider

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <ContactFormProvider>
          <ToastProvider>
            <FirestoreProvider>{children}</FirestoreProvider>
          </ToastProvider>
        </ContactFormProvider>
      </GlobalProvider>
    </AuthProvider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
