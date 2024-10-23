// Toast.js
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme, variant }) =>
    theme.buttons.variants[variant]?.bgColor || theme.colors.gray};
  color: ${({ theme, variant }) =>
    theme.buttons.variants[variant]?.textColor || theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  width: 300px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, variant }) =>
      theme.buttons.variants[variant]?.hoverColor || theme.colors.darkGray};
  }
`;

const ToastMessage = styled.div`
  flex-grow: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  margin-left: 12px;
`;

const Toast = ({ message, variant, onClose }) => {
  return (
    <ToastWrapper variant={variant} onClick={onClose}>
      <ToastMessage>{message}</ToastMessage>
      <CloseButton onClick={onClose}>×</CloseButton>
    </ToastWrapper>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
