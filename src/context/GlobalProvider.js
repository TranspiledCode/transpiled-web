import React from 'react';
import PropTypes from 'prop-types';
import { ContactFormProvider } from './ContactForm'; // Correct import

const ContextProvider = ({ children }) => {
  return (
    <ContactFormProvider>
      {/* Add other providers here */}
      {children}
    </ContactFormProvider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
