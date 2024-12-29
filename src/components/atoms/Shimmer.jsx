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

/**
 * A component that renders a shimmer effect, typically used as a placeholder
 * for content that is being loaded.
 *
 * @param {object} props
 * @prop {number} [lines=1] - The number of shimmer lines to render.
 * @prop {string|number|Array<string|number>} [width] - The width of the shimmer
 * lines. Can be a number (px), string (e.g. '100%'), or an array of values for
 * each line.
 * @prop {string|number|Array<string|number>} [height] - The height of the shimmer
 * lines. Can be a number (px), string (e.g. '20px'), or an array of values for
 * each line.
 * @prop {string|number} [gap] - The gap between shimmer lines. Can be a number (px)
 * or a string (e.g. '8px').
 * @returns {ReactElement} - The shimmer component.
 *
 * @example
 * <Shimmer lines={3} width="100%" height="20px" gap="8px" />
 */
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
