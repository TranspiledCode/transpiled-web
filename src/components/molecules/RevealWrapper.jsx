// src/components/RevealWrapper.jsx
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import getTransformValues from 'utils/getTransformValues';

/**
 * Styled Section component
 */
const Section = styled.section`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible, initialTransform, finalTransform }) =>
    isVisible ? finalTransform : initialTransform};
  transition: ${({ transition }) => transition};
`;

/**
 * RevealWrapper Component
 *
 * This component uses Intersection Observer to trigger animations
 * based on when the section enters the viewport. You can customize the
 * animation's transform properties, transition duration, direction, and the threshold
 * at which the animation triggers.
 *
 * @component
 * @example
 * // Usage Example:
 * <RevealWrapper
 *   direction="left"
 *   transition="opacity 0.8s ease-out, transform 0.8s ease-out"
 *   threshold={0.3}
 * >
 *   <h2>This section will animate from left to right!</h2>
 *   <p>Content that fades in and moves from left to right.</p>
 * </RevealWrapper>
 *
 * @param {object} props - Component props
 * @param {node} props.children - The content to be displayed inside the animated section.
 * @param {string} [props.direction] - The direction of the animation ('up', 'down', 'left', 'right').
 * @param {string} [props.initialTransform] - The initial transform value when the element is hidden.
 * @param {string} [props.finalTransform] - The final transform value when the element is visible.
 * @param {string} [props.transition] - The CSS transition string (default: 'opacity 0.6s ease-out, transform 0.6s ease-out').
 * @param {number} [props.threshold] - The Intersection Observer threshold value (default: 0.2).
 * @returns {JSX.Element} The animated section.
 */
const RevealWrapper = ({
  children,
  direction = 'up',
  initialTransform,
  finalTransform,
  transition = 'opacity 0.6s ease-out, transform 0.6s ease-out',
  threshold = 0.2,
}) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold });

  const {
    initialTransform: resolvedInitialTransform,
    finalTransform: resolvedFinalTransform,
  } = getTransformValues(direction, initialTransform, finalTransform);

  return (
    <Section
      ref={sectionRef}
      isVisible={isVisible}
      initialTransform={resolvedInitialTransform}
      finalTransform={resolvedFinalTransform}
      transition={transition}
    >
      {children}
    </Section>
  );
};

RevealWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  initialTransform: PropTypes.string,
  finalTransform: PropTypes.string,
  transition: PropTypes.string,
  threshold: PropTypes.number,
};

export default RevealWrapper;
