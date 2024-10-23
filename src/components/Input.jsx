// Input.jsx
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FaTimes } from 'react-icons/fa';

import FormContext from 'context/ContactForm';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 0.8rem 2.5rem 0.8rem 0;
  font-size: 1.6rem;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0;

  caret-color: ${({ theme }) => theme.colors.orange};

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: 600px) {
    padding: 0.8rem 3rem 0.8rem 0;
    font-size: 2rem;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 0;
  bottom: ${({ isFocusedOrFilled }) => (isFocusedOrFilled ? '3rem' : '0.8rem')};
  font-size: ${({ isFocusedOrFilled }) =>
    isFocusedOrFilled ? '1.2rem' : '1.6rem'};
  color: ${({ theme, isFocusedOrFilled }) =>
    isFocusedOrFilled ? theme.colors.orange : theme.colors.white};
  pointer-events: none;
  transition: all 0.2s ease;

  @media (max-width: 600px) {
    font-size: ${({ isFocusedOrFilled }) =>
      isFocusedOrFilled ? '1.4rem' : '2rem'};
    bottom: ${({ isFocusedOrFilled }) =>
      isFocusedOrFilled ? '3.5rem' : '1rem'};
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.orange};
    border-radius: 50%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    padding: 0.6rem;
  }
`;

const Input = ({ name, label, type, showClearButton = true }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [isFocused, setIsFocused] = useState(false);

  const value = formData[name] || '';

  const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => {
    updateFormData(name, e.target.value);
  };

  const handleClear = () => updateFormData(name, '');

  return (
    <InputContainer>
      <StyledInput
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-labelledby={`${inputId}-label`}
        autoCapitalize="none"
        autoCorrect="off"
      />
      <StyledLabel
        id={`${inputId}-label`}
        htmlFor={inputId}
        isFocusedOrFilled={isFocused || value}
      >
        {label}
      </StyledLabel>
      {showClearButton && value && (
        <ClearButton
          type="button"
          onClick={handleClear}
          aria-label={`Clear ${label}`}
        >
          <FaTimes aria-hidden="true" />
        </ClearButton>
      )}
    </InputContainer>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  showClearButton: PropTypes.bool,
};

export default Input;
