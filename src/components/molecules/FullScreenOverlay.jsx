// src/components/FullScreenOverlay.js
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullScreenOverlay = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};

FullScreenOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullScreenOverlay;
