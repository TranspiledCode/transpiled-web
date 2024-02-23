import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledSpeedController = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SpeedSelect = styled.select`
  padding: 5px;
  margin: 5px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.transparent};
  border: 1px solid ${(props) => props.theme.transparent};
  font-size: 1.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const SpeedController = ({ videoRef, togglePlayPause }) => {
  const [wasPlaying, setWasPlaying] = useState(false);

  const changePlaybackSpeed = (event) => {
    const video = videoRef.current;
    const speed = event.target.value;
    if (video && video.playbackRate) {
      video.playbackRate = speed;
    }
    if (wasPlaying) {
      togglePlayPause();
      setWasPlaying(false);
    }
  };

  const handleDropdownFocus = () => {
    const video = videoRef.current;
    if (video && !video.paused) {
      setWasPlaying(true);
      togglePlayPause();
    }
  };

  return (
    <StyledSpeedController>
      <SpeedSelect onChange={changePlaybackSpeed} onFocus={handleDropdownFocus}>
        <option value='0.5'>0.5x</option>
        <option value='1'>1x</option>
        <option value='1.5'>1.5x</option>
        <option value='2'>2x</option>
      </SpeedSelect>
    </StyledSpeedController>
  );
};

SpeedController.propTypes = {
  videoRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  togglePlayPause: PropTypes.func.isRequired,
};

export default SpeedController;
