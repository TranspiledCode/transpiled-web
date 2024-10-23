// Textarea.jsx
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FaTimes } from 'react-icons/fa';

import FormContext from 'context/ContactForm'; // Adjust the import path accordingly

const TextareaContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 0.8rem 2.5rem 2.5rem 0; /* Adjusted padding-bottom to make space for character count */
  font-size: 1.6rem;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  resize: none;
  height: 100px;
  border-radius: 0;

  caret-color: ${({ theme }) => theme.colors.orange};

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: 600px) {
    padding: 0.8rem 3rem 2.5rem 0; /* Adjusted padding-bottom */
    font-size: 2rem;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 0;
  bottom: ${({ isFocusedOrFilled }) =>
    isFocusedOrFilled ? '12rem' : '0.8rem'};
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
      isFocusedOrFilled ? '12.5rem' : '1rem'};
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 0;
  top: ${({ isFocusedOrFilled }) => (isFocusedOrFilled ? '1rem' : '50%')};
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
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

const CharacterCount = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 0.5rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Textarea = ({ name, label, showClearButton = true, maxLength = 200 }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [isFocused, setIsFocused] = useState(false);

  const value = formData[name] || '';

  const textareaId = `textarea-${label.replace(/\s+/g, '-').toLowerCase()}`;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => {
    updateFormData(name, e.target.value);
  };

  const handleClear = () => updateFormData(name, '');

  return (
    <TextareaContainer>
      <StyledTextarea
        id={textareaId}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-labelledby={`${textareaId}-label`}
        maxLength={maxLength}
      />
      <StyledLabel
        id={`${textareaId}-label`}
        htmlFor={textareaId}
        isFocusedOrFilled={isFocused || value}
      >
        {label}
      </StyledLabel>
      {showClearButton && value && (
        <ClearButton
          type="button"
          onClick={handleClear}
          aria-label={`Clear ${label}`}
          isFocusedOrFilled={isFocused || value}
        >
          <FaTimes aria-hidden="true" />
        </ClearButton>
      )}
      <CharacterCount>{`${value.length}/${maxLength}`}</CharacterCount>
    </TextareaContainer>
  );
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  showClearButton: PropTypes.bool,
  maxLength: PropTypes.number,
};

export default Textarea;
