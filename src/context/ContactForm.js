// FormContext.js
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const FormContext = createContext({
  formData: {},
  updateFormData: () => {},
  resetFormData: () => {},
});

export const ContactFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
};

ContactFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormContext;
