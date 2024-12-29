import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const shimmerAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;

const shimmerStyles = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    animation: ${shimmerAnimation} 1.2s linear infinite;
  }
`;

const StyledContent = styled.div`
  position: relative;
  overflow: hidden;
  min-height: ${(props) => (props.isEmpty ? '1em' : 'auto')};
  min-width: ${(props) => (props.isEmpty ? '100px' : 'auto')};
  background: ${(props) =>
    props.isEmpty ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  border-radius: 4px;

  ${(props) => props.isEmpty && shimmerStyles}
`;

const Content = ({ type = 'div', children, customStyles, ...props }) => {
  // Check if content is empty/loading
  const isEmpty =
    children === undefined || children === null || children === '';

  // Create styled component dynamically based on type prop
  const Component = styled(StyledContent.withComponent(type))`
    ${customStyles}
  `;

  return (
    <Component isEmpty={isEmpty} {...props}>
      {children}
    </Component>
  );
};

Content.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  customStyles: PropTypes.string,
};

export default Content;
