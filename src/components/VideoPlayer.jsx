import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import VideoControls from './VideoControls';
import { formatTime } from '../utils/time';

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
  opacity: 0;
  color: ${(props) => props.theme.white};

  ${StyledVideoWrapper}:hover & {
    visibility: visible;
    opacity: 1;
    transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
`;
const ProgressBarWrapper = styled.div`
  width: 70%;
`;

const TimeWrapper = styled.div`
  color: ${(props) => props.theme.accent};
`;

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
    const progressBar = e.currentTarget;
    const progressWidth = progressBar.offsetWidth;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;

    if (!Number.isFinite(progressWidth) || progressWidth === 0) {
      console.error('Progress bar width is invalid or zero.');
      return;
    }

    const clickRatio = clickPosition / progressWidth;
    let newTime = clickRatio * videoRef.current.duration;

    // Ensure newTime is within valid range (0 to duration)
    newTime = Math.max(0, Math.min(newTime, videoRef.current.duration));

    videoRef.current.currentTime = newTime;
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

  return (
    <StyledVideoContainer>
      <StyledVideoWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StyledVideo ref={videoRef} src={src} onClick={togglePlayPause} />
        <VideoControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          videoRef={videoRef}
          handleAdjustTimeClick={handleAdjustTimeClick}
          showControls={isHovered}
        />
        <ProgressContainer>
          <ProgressBarWrapper>
            <ProgressBar
              id='progress-bar'
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
