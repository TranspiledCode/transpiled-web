import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledVideoContainer = styled.div`
  max-width: 640px;
  margin: auto;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`;

const StyledPlayPauseButton = styled.button`
  cursor: pointer;
`;

const StyledProgressBar = styled.progress`
  width: 100%;
`;

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progressValue = (video.currentTime / video.duration) * 100;
      setProgress(progressValue);
    };

    video.addEventListener('timeupdate', updateProgress);

    const cleanupFunction = () =>
      video.removeEventListener('timeupdate', updateProgress);
    cleanupFunction();
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <StyledVideoContainer>
      <StyledVideo ref={videoRef} src={src} onClick={togglePlayPause} />
      <StyledPlayPauseButton onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </StyledPlayPauseButton>
      <StyledProgressBar value={progress} max='100' />{' '}
      {/* Simplified progress handling */}
    </StyledVideoContainer>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VideoPlayer;
