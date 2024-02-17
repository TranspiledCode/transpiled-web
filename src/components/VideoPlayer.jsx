import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledVideoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 640px;
  margin: auto;

  // for testing
  border: 1px solid red;
`;

const StyledVideoWrapper = styled.div`
  position: relative;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const StyledControlsContainer = styled.div`
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;

  ${StyledVideoContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledProgressBar = styled.progress`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

const StyledPlayPauseButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.2s ease;

  &:hover,
  &:focus {
    background-color: #0056b3;
  }
`;

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

  return (
    <StyledVideoContainer>
      <StyledVideoWrapper>
        <StyledVideo ref={videoRef} src={src} onClick={togglePlayPause} />
        <StyledControlsContainer>
          <StyledPlayPauseButton
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </StyledPlayPauseButton>
        </StyledControlsContainer>
      </StyledVideoWrapper>
      <StyledProgressBar
        value={progress}
        max='100'
        aria-label='Video progress'
      />
    </StyledVideoContainer>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VideoPlayer;
