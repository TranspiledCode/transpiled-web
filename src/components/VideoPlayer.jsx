import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Icon from './Icon';
import ProgressBar from './ProgressBar';

const StyledVideoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 640px;
  margin: auto;
`;

const StyledVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: auto;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${StyledVideoWrapper}:hover & {
    filter: brightness(0.5);
    transition: filter 0.5s ease-in-out;
  }
`;

const StyledControlsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.5s linear;
  visibility: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${StyledVideoWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

// Styled progress Section
const ProgressContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  visibility: hidden;
  color: ${(props) => props.theme.white};

  ${StyledVideoWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
const ProgressBarWrapper = styled.div`
  width: 70%;
`;

const TimeWrapper = styled.div`
  color: ${(props) => props.theme.accent};
`;

// Styled buttons
const StyledPlayPauseButton = styled.button`
  color: ${(props) => props.theme.white};

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const SkipAheadButton = styled.button`
  color: ${(props) => props.theme.white};
  transform: scaleX(-1);

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const SkipBackButton = styled.button`
  color: ${(props) => props.theme.white};

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
  }`;
};

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const updateProgress = () => {
      const progressValue = (video.currentTime / video.duration) * 100;
      setProgress(progressValue);
    };

    video.addEventListener('timeupdate', updateProgress);

    // Cleanup function
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  const handleProgressBarClick = (e) => {
    console.log('barClicked');
    // const progressBar = e.target;
    // const bounds = progressBar.getBoundingClientRect();
    // const clickPosition = e.clientX - bounds.left;
    // const progressBarWidth = bounds.width;
    // const clickRatio = clickPosition / progressBarWidth;
    // const newTime = clickRatio * videoRef.current.duration;
    // videoRef.current.currentTime = newTime;
  };

  const togglePlayPause = async () => {
    // Use async function for better error handling
    const video = videoRef.current;
    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        console.error('Error attempting to play the video:', err);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleAdjustTimeClick = (direction, time) => {
    if (direction === 'forward') {
      videoRef.current.currentTime += time;
    } else if (direction === 'backward') {
      videoRef.current.currentTime -= time;
    }
  };

  const playButton = <Icon iconName='play' size='3x' iconType='solid' />;
  const pauseButton = <Icon iconName='pause' size='3x' iconType='solid' />;

  return (
    <StyledVideoContainer>
      <StyledVideoWrapper>
        <StyledVideo ref={videoRef} src={src} onClick={togglePlayPause} />
        <StyledControlsContainer>
          <SkipBackButton>
            <Icon
              iconName='clockRotateLeft'
              size='3x'
              iconType='solid'
              onClick={() => handleAdjustTimeClick('backward', 15)}
            />
          </SkipBackButton>
          <StyledPlayPauseButton
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? pauseButton : playButton}
          </StyledPlayPauseButton>
          <SkipAheadButton>
            <Icon
              iconName='clockRotateLeft'
              size='3x'
              iconType='solid'
              onClick={() => handleAdjustTimeClick('forward', 15)}
            />
          </SkipAheadButton>
        </StyledControlsContainer>
        <ProgressContainer>
          <ProgressBarWrapper>
            <ProgressBar
              progress={progress}
              aria-label='Video progress'
              onClick={handleProgressBarClick}
            />
          </ProgressBarWrapper>
          <TimeWrapper>
            {videoRef.current
              ? formatTime(videoRef.current.currentTime)
              : '0:00'}
            {' / '}
            {videoRef.current ? formatTime(videoRef.current.duration) : '0:00'}
          </TimeWrapper>
        </ProgressContainer>
      </StyledVideoWrapper>
    </StyledVideoContainer>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VideoPlayer;
