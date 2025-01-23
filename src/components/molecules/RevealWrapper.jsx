// components/RevealWrapper.jsx
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import getTransformValues from 'utils/getTransformValues';

const Section = styled.section`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible, initialTransform, finalTransform }) =>
    isVisible ? finalTransform : initialTransform};
  transition: ${({ transition }) => transition};
`;

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
