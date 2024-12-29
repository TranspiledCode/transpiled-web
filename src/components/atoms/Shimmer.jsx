import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import PropTypes from 'prop-types';

const shimmerAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const ShimmerLineWrapper = styled.div`
  position: relative;
  background: #f0f0f027;
  border-radius: 4px;
  overflow: hidden;

  width: ${({ $width }) => {
    if ($width === 'full') return '100%';
    if (typeof $width === 'number') return `${$width}px`;
    return $width || '100%';
  }};

  height: ${({ $height }) => {
    if ($height === 'full') return '100%';
    if (typeof $height === 'number') return `${$height}px`;
    return $height || '20px';
  }};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: translateX(-100%);
    animation: ${shimmerAnimation} 1s infinite;
  }
`;

const ShimmerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => {
    if (typeof $gap === 'number') return `${$gap}px`;
    return $gap || '8px';
  }};
`;

const ShimmerLine = ({ width, height }) => (
  <ShimmerLineWrapper $width={width} $height={height} />
);

const Shimmer = ({ lines = 1, width, height, gap }) => {
  return (
    <ShimmerContainer $gap={gap}>
      {Array.from({ length: lines }, (_, index) => (
        <ShimmerLine
          key={index}
          width={Array.isArray(width) ? width[index] : width}
          height={Array.isArray(height) ? height[index] : height}
        />
      ))}
    </ShimmerContainer>
  );
};

ShimmerLine.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Shimmer.propTypes = {
  lines: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Shimmer;
