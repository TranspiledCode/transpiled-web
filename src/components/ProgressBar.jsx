import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { formatTime } from '../utils/time';

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
`;

const Playhead = styled.div`
  width: 1rem;
  height: 1.8rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 2px;
  position: absolute;
  top: -4px;
  left: ${({ width }) => `calc(${width}% - 2px)`};

  ::after {
    visibility: ${({ isDragging }) => (isDragging ? 'visible' : 'hidden')};
    content: attr(data-progress);
    position: absolute;
    top: -10px;
    left: 50%;
    color: ${({ theme }) => theme.white};
    font-size: 1.2rem;
    transform: translate(-50%, -50%);
  }
`;
const ProgressBar = ({ initialProgress = 0, onClick, progress, videoRef }) => {
  const [barProgress, setProgress] = useState(initialProgress);
  const [isDragging, setIsDragging] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const progressBarRef = useRef(null);

  const calculateVideoTime = (percentage) => {
    if (!videoRef.current) return 0;
    // return formatted time based on the percentage using the formatTime function
    return formatTime((videoRef.current.duration / 100) * percentage);
  };

  // Track the playPaused state so we can return the video
  // to the previous state on mouse up after dragging.
  // if the video was playing on mouse down, pause it and return to playing
  // if the video was paused on mousedown then leave it paused on mouse up.

  const updateProgress = (e) => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return;

    const { left, width } = progressBar.getBoundingClientRect();
    const clickX = e.clientX - left;
    const newProgress = Math.max(0, Math.min(100, (clickX / width) * 100));

    setVideoTime(calculateVideoTime(newProgress));

    setProgress(newProgress);
  };

  const handleMouseMove = (e) => {
    updateProgress(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateProgress(e);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    if (isDragging) return;
    setProgress(progress);
    setVideoTime(calculateVideoTime(progress));
  }, [progress]);

  useEffect(
    () => () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    },
    []
  );

  return (
    <ProgressBarContainer
      ref={progressBarRef}
      onMouseDown={handleMouseDown}
      onClick={onClick}
    >
      <ProgressBarFiller width={barProgress} />
      <Playhead
        width={barProgress}
        data-progress={videoTime}
        isDragging={isDragging}
      />
    </ProgressBarContainer>
  );
};

ProgressBar.propTypes = {
  initialProgress: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  videoRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

ProgressBar.defaultProps = {
  initialProgress: 0,
};

export default ProgressBar;
