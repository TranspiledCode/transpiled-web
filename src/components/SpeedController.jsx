import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Styled component for the select dropdown
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

const SpeedController = ({ videoRef }) => {
  const changePlaybackSpeed = (event) => {
    const video = videoRef.current;
    const speed = event.target.value;
    if (video.playbackRate) {
      video.playbackRate = speed;
    }
  };

  return (
    <SpeedSelect onChange={changePlaybackSpeed}>
      <option value='0.5'>0.5x</option>
      <option value='1'>1x</option>
      <option value='1.5'>1.5x</option>
      <option value='2'>2x</option>
    </SpeedSelect>
  );
};

SpeedController.propTypes = {
  videoRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

export default SpeedController;
