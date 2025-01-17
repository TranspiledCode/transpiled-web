import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: ${({ theme }) => theme.zIndices.fullscreenOverlay};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FullScreenOverlay = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};

FullScreenOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullScreenOverlay;
