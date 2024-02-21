import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Slider = styled.input`
  cursor: pointer;
`;

const VolumeControl = ({ initialVolume = 0.5, videoRef }) => {
  const [volume, setVolume] = useState(initialVolume);
  const [isMuted, setIsMuted] = useState(false);
  const video = videoRef.current;

  const toggleMute = () => {
    const newVolume = isMuted ? volume : 0;
    video.volume = newVolume;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  return (
    <Container>
      <Icon onClick={toggleMute}>{isMuted ? '🔇' : '🔊'}</Icon>
      <Slider
        type='range'
        min='0'
        max='1'
        step='0.01'
        value={isMuted ? 0 : volume}
        onChange={handleVolumeChange}
      />
    </Container>
  );
};

VolumeControl.propTypes = {
  initialVolume: PropTypes.number,
  videoRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

VolumeControl.defaultProps = {
  initialVolume: 0.5,
};

export default VolumeControl;
