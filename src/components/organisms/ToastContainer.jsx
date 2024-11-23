// ToastContainer.jsx
import React from 'react';
import styled from '@emotion/styled';
import Toast from 'molecules/Toast';
import PropTypes from 'prop-types';

// Utility function to get position styles
const getPositionStyles = (position) => {
  const positions = {
    'top-left': { top: '20px', left: '20px' },
    'top-right': { top: '20px', right: '20px' },
    'bottom-left': { bottom: '20px', left: '20px' },
    'bottom-right': { bottom: '20px', right: '20px' },
  };
  return positions[position] || positions['top-right'];
};

// Styled component for the toast container
const ToastContainerWrapper = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndices.toast};
  display: flex;
  flex-direction: column;
  ${({ position }) => getPositionStyles(position)};
`;

const ToastContainer = React.memo(({ toasts, position = 'top-right' }) => (
  <ToastContainerWrapper position={position}>
    {toasts.map((toast) => (
      <Toast
        key={toast.id}
        id={toast.id}
        message={toast.message}
        variant={toast.variant}
      />
    ))}
  </ToastContainerWrapper>
));

// Add display name for easier debugging
ToastContainer.displayName = 'ToastContainer';

ToastContainer.propTypes = {
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
    }),
  ).isRequired,
  position: PropTypes.oneOf([
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ]),
};

export default ToastContainer;
