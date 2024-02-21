import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import VideoControls from './VideoControls';
import { formatTime } from '../utils/time';

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [videoPlayerWidth, setVideoPlayerWidth] = useState(0);

  useEffect(() => {
    const updateVideoPlayerWidth = () => {
      if (containerRef.current) {
        setVideoPlayerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', updateVideoPlayerWidth);
    updateVideoPlayerWidth();

    return () => window.removeEventListener('resize', updateVideoPlayerWidth);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const updateProgress = () => {
      const progressValue = (video.currentTime / video.duration) * 100;
      setProgress(progressValue);
    };

    video.addEventListener('timeupdate', updateProgress);

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

    console.log('newTime:', newTime);
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
    <StyledVideoContainer ref={containerRef}>
      <StyledVideoWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StyledVideo
          ref={videoRef}
          src={src}
          onClick={togglePlayPause}
          poster={poster}
        />
        <VideoControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          videoRef={videoRef}
          handleAdjustTimeClick={handleAdjustTimeClick}
          showControls={isHovered}
          videoPlayerWidth={videoPlayerWidth}
        />
        <ProgressContainer showControls={isHovered}>
          <ProgressBarWrapper videoPlayerWidth={videoPlayerWidth}>
            <ProgressBar
              id='progress-bar'
              progress={progress}
              aria-label='Video progress'
              onClick={handleProgressBarClick}
              videoRef={videoRef}
              togglePlayPause={togglePlayPause}
            />
          </ProgressBarWrapper>
          <TimeWrapper>
            {videoRef.current && videoRef.current.currentTime
              ? formatTime(videoRef.current.currentTime)
              : '0:00'}
            {' / '}
            {videoRef.current && videoRef.current.duration
              ? formatTime(videoRef.current.duration)
              : '0:00'}
          </TimeWrapper>
        </ProgressContainer>
      </StyledVideoWrapper>
    </StyledVideoContainer>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

VideoPlayer.defaultProps = {
  poster: null,
};

const StyledVideoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const StyledVideoWrapper = styled.div`
  position: relative;
  width: 100%;
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

const ProgressContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${(props) => props.theme.white};
  visibility: ${({ showControls }) => (showControls ? 'visible' : 'hidden')};
  opacity: ${({ showControls }) => (showControls ? 1 : 0)};
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
const ProgressBarWrapper = styled.div`
  // StyledVideoContainer width  is less than 640px than the width should be 60%
  // StyledVideoContainer width is greater than 640px than the width should be 80%
  width: ${({ videoPlayerWidth }) => (videoPlayerWidth < 640 ? '60%' : '80%')};
`;

const TimeWrapper = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.accent};
`;

export default VideoPlayer;
