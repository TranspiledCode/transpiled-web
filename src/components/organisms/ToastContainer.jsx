// ToastContainer.jsx
import React from 'react';
import styled from '@emotion/styled';
import Toast from 'molecules/Toast';
import PropTypes from 'prop-types';

// Utility function to get position styles
const getPositionStyles = (position) => {
  // Desktop positions (1024px and up)
  const desktopPositions = {
    'top-left': { top: '80px', left: '80px' },
    'top-right': { top: '80px', right: '80px' },
    'bottom-left': { bottom: '40px', left: '80px' },
    'bottom-right': { bottom: '40px', right: '80px' },
  };

  return {
    // Mobile styles (default)
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',

    // Desktop styles
    '@media (min-width: 1024px)': {
      transform: 'none',
      ...desktopPositions[position],
    },
  };
};

// Styled component for the toast container
const ToastContainerWrapper = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndices.toast};
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;

  // Mobile styles (default)
  width: calc(
    100% - 32px
  ); // Full viewport width minus 16px margin on each side
  margin-bottom: 16px;
  align-items: center;

  // Desktop styles
  @media (min-width: 1024px) {
    width: auto;
    min-width: 400px;
    max-width: 560px;
    gap: 16px;
    margin-bottom: 0;
    align-items: stretch;
    ${({ position }) => getPositionStyles(position)};
  }
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
