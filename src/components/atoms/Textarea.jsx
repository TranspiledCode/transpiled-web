// Textarea.jsx
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { X } from 'lucide-react';

import FormContext from 'context/ContactForm';

const TextareaContainer = styled.div`
  position: relative;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  margin-top: 1rem;
`;

const StyledTextarea = styled.textarea`
  outline: none;
  background: none;
  resize: none;

  font-family: inherit;
  font-weight: inherit;
  font-size: 1.6rem;

  height: 20rem;
  width: 100%;
  border: 1.5px solid ${({ theme, color }) => theme.colors[color]};
  border-radius: 0;
  color: ${({ theme, color }) => theme.colors[color]};
  caret-color: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
  padding: 0.2rem 0.8rem;
`;

const StyledLabel = styled.label`
  position: absolute;
  display: grid;
  place-content: center;

  height: 2.5rem;

  left: ${({ isFocusedOrFilled }) => (isFocusedOrFilled ? '0.8rem' : '0.8rem')};
  top: ${({ isFocusedOrFilled }) => (isFocusedOrFilled ? '17.6rem' : '0.2rem')};
  font-size: ${({ isFocusedOrFilled }) =>
    isFocusedOrFilled ? '1.2rem' : '1.6rem'};
  color: ${({ theme, isFocusedOrFilled, color, hoverColor }) =>
    isFocusedOrFilled ? theme.colors[hoverColor] : theme.colors[color]};

  pointer-events: none;
  transition: all 0.2s ease;

  @media (max-width: 600px) {
    font-size: ${({ isFocusedOrFilled }) =>
      isFocusedOrFilled ? '1.4rem' : '2rem'};
  }
`;

const ClearButton = styled.button`
  display: grid;
  place-content: center;
  position: absolute;
  right: 0rem;
  top: 0rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: 1.2rem;
  height: 2.5rem;
  width: 2.5rem;

  &:focus {
    outline: 2px solid ${({ theme, hoverColor }) => theme.colors[hoverColor]};
    border-radius: 50%;
  }

  &:hover {
    color: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    padding: 0.6rem;
  }
`;

const CharacterCount = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1.2rem;
  height: 2.5rem;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-right: 0.6rem;
`;

const Textarea = ({
  name,
  label,
  showClearButton = true,
  maxLength = 200,
  color = 'darkGray',
  hoverColor = 'green',
}) => {
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
        color={color}
        hoverColor={hoverColor}
      />
      <StyledLabel
        id={`${textareaId}-label`}
        htmlFor={textareaId}
        isFocusedOrFilled={isFocused || value}
        color={color}
        hoverColor={hoverColor}
      >
        {label}
      </StyledLabel>
      {showClearButton && value && (
        <ClearButton
          type="button"
          onClick={handleClear}
          aria-label={`Clear ${label}`}
          isFocusedOrFilled={isFocused || value}
          color={color}
          hoverColor={hoverColor}
        >
          <X />
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
  color: PropTypes.oneOf(['darkGray', 'white']),
  hoverColor: PropTypes.string,
};

export default Textarea;
