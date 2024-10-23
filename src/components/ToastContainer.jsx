// ToastContainer.js
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Toast from './Toast';

const ToastContainerWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

const ToastContainer = ({ toasts }) => {
  return (
    <ToastContainerWrapper>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          variant={toast.variant}
          onClose={() => toast.removeToast(toast.id)}
        />
      ))}
    </ToastContainerWrapper>
  );
};

ToastContainer.propTypes = {
  toasts: PropTypes.array.isRequired,
};

export default ToastContainer;
