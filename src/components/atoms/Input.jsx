import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FaTimes } from 'react-icons/fa';

import FormContext from 'context/ContactForm';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1.5px solid ${({ theme, color }) => theme.colors[color]};
  padding: 0.8rem 2.5rem 0.8rem 0;
  font-size: 1.6rem;
  outline: none;
  background: transparent;
  color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 0;

  caret-color: ${({ theme }) => theme.colors.green};

  &:focus {
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.green};
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
  color: ${({ theme, isFocusedOrFilled, color }) =>
    isFocusedOrFilled ? theme.colors.green : theme.colors[color]};
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
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: 1.2rem;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.green};
    border-radius: 50%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    padding: 0.6rem;
  }
`;

const Input = ({
  name,
  label,
  type,
  value: propValue,
  onChange: propOnChange,
  showClearButton = true,
  color = 'darkGray',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const formContext = useContext(FormContext);

  // Determine if we're using context or props
  const isUsingContext = formContext && !propValue && !propOnChange;

  const value = isUsingContext
    ? formContext.formData[name] || ''
    : propValue || '';

  const handleChange = (e) => {
    if (isUsingContext) {
      formContext.updateFormData(name, e.target.value);
    } else {
      propOnChange?.(e);
    }
  };

  const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleClear = () => {
    if (isUsingContext) {
      formContext.updateFormData(name, '');
    } else {
      propOnChange?.({ target: { value: '', name } });
    }
  };

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
        color={color}
      />
      <StyledLabel
        id={`${inputId}-label`}
        htmlFor={inputId}
        isFocusedOrFilled={isFocused || value}
        color={color}
      >
        {label}
      </StyledLabel>
      {showClearButton && value && (
        <ClearButton
          type="button"
          onClick={handleClear}
          aria-label={`Clear ${label}`}
          color={color}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  showClearButton: PropTypes.bool,
  color: PropTypes.oneOf(['darkGray', 'white']),
};

export default Input;
