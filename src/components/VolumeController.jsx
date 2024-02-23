import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Icon from './Icon';

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  gap: 30px;
`;

const SliderTrack = styled.div`
  width: 100px;
  height: 4px;
  background-color: ${({ theme }) => theme.white};
  position: relative;
  border-radius: 2px;
`;

const SliderThumb = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  top: -6px;
`;

const Volume = styled.p`
  font-size: 1.5rem;
  display: block;
  opacity: ${({ isDragging }) => (isDragging ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  color: ${({ theme }) => theme.white};
  margin-left: 10px;
  width: 30px;
`;

const MuteButton = styled.div`
  width: 30px;
`;

const CustomSlider = ({ initialVolume = 50, videoRef }) => {
  const [volume, setVolume] = useState(initialVolume);
  const [isDragging, setIsDragging] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const trackRef = useRef(null);
  const video = videoRef.current;

  const setVideoVolume = (newVolume) => {
    if (video) {
      video.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (video && isMuted) {
      setMuted(false);
      video.muted = false;
    } else if (video) {
      setMuted(true);
      video.muted = true;
    }
  };

  const updateVolume = (e) => {
    const track = trackRef.current;
    const trackRect = track.getBoundingClientRect();
    const newVolume = ((e.clientX - trackRect.left) / trackRect.width) * 100;
    const volumeToSet =
      Math.round(Math.min(Math.max(newVolume, 0), 100) / 1) * 1;
    setVolume(volumeToSet);
    setVideoVolume(volumeToSet / 100);
  };

  const handleMouseMove = (e) => {
    updateVolume(e);
    setIsDragging(true);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const VolumeHigh = (
    <Icon
      iconName='volumeHigh'
      size='2x'
      iconType='solid'
      onClick={toggleMute}
    />
  );
  const VolumeMute = (
    <Icon
      iconName='volumeXmark'
      size='2x'
      iconType='solid'
      onClick={toggleMute}
    />
  );

  return (
    <SliderContainer onMouseDown={handleMouseDown}>
      <MuteButton>{isMuted ? VolumeMute : VolumeHigh}</MuteButton>
      <SliderTrack ref={trackRef}>
        <SliderThumb style={{ left: `${volume}%`, marginLeft: '-8px' }} />
      </SliderTrack>
      <Volume isDragging={isDragging}>{volume}%</Volume>
    </SliderContainer>
  );
};

CustomSlider.propTypes = {
  initialVolume: PropTypes.number,
  videoRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

CustomSlider.defaultProps = {
  initialVolume: 50,
};

export default CustomSlider;
