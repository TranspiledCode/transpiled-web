import { useState, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const clickTransitionTime = '0.2s';

const ProgressBarContainer = styled.div`
  height: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  border-radius: 2px;
  margin: 10px 0;
  position: relative;
  cursor: pointer;
`;

const ProgressBarFiller = styled.div`
  height: 100%;
  width: ${({ width }) => `${width}%`};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2px;
  transition: width ${clickTransitionTime} ease-out;
`;

const Playhead = styled.div`
  width: 1rem;
  height: 1.8rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 2px;
  position: absolute;
  top: -4px;
  left: ${({ width }) => `calc(${width}% - 2px)`};
  transition: left ${clickTransitionTime} ease-out;
  cursor: grab;
`;

const ProgressBar = ({ initialProgress = 0, onClick }) => {
  const [progress, setProgress] = useState(initialProgress);
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef(null);

  const updateProgress = (e) => {
    const progressBar = progressBarRef.current;
    const { left, width } = progressBar.getBoundingClientRect();
    const clickX = e.clientX - left;
    const newProgress = Math.max(0, Math.min(100, (clickX / width) * 100));
    console.log('updateProgress:', newProgress);
    setProgress(newProgress);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateProgress(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateProgress(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <ProgressBarContainer
      ref={progressBarRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseUp} // To stop dragging when mouse leaves the element
      onMouseUp={handleMouseUp}
      onClick={onClick}
    >
      <ProgressBarFiller width={progress} />
      <Playhead width={progress} />
    </ProgressBarContainer>
  );
};

ProgressBar.propTypes = {
  // progress: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  initialProgress: PropTypes.number,
};

ProgressBar.defaultProps = {
  onClick: null,
  initialProgress: 0,
};

export default ProgressBar;
