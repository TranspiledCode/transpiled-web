import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Icon from './Icon';

const StyledPlayPauseButton = styled.button`
  color: ${(props) => props.theme.white};

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const PlayPauseButton = ({ isPlaying, togglePlayPause }) => (
  <StyledPlayPauseButton
    onClick={togglePlayPause}
    aria-label={isPlaying ? 'Pause' : 'Play'}
  >
    <Icon iconName={isPlaying ? 'pause' : 'play'} size='3x' iconType='solid' />
  </StyledPlayPauseButton>
);

PlayPauseButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  togglePlayPause: PropTypes.func.isRequired,
};

export default PlayPauseButton;
