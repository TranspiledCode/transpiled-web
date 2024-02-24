import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Icon from './Icon';

const StyledSpeedController = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
`;

const DropdownButton = styled.button`
  padding: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => (props.isOpen ? props.theme.black : props.theme.white)};
  background-color: ${(props) =>
    props.isOpen ? props.theme.white : props.theme.transparent};
  border: none;
  width: 80px;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.isOpen
      ? '0px 8px 16px 0px rgba(0, 0, 0, 0.2)'
      : '0px 0px 0px 0px rgba(0, 0, 0, 0.0)'};

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  transition: display 0.5s ease-in-out;
  position: absolute;
  bottom: 100%;
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  z-index: 1;
  width: 80px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const DropdownItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
  }
`;

const SelectedItem = styled.div`
  background-color: ${(props) => props.theme.transparent};
  color: ${(props) => props.theme.secondary};
  min-width: 20px;
`;

const Speed = styled.div`
  font-size: 1.5rem;
  text-align: left;
  width: 100%;
`;

const SpeedController = ({ videoRef, togglePlayPause }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [wasPlaying, setWasPlaying] = useState(false);

  const video = videoRef.current;

  const handleWasPlaying = () => {
    if (wasPlaying) {
      togglePlayPause();
      setWasPlaying(false);
    }
  };

  const toggleDropdown = () => {
    if (isOpen && wasPlaying) {
      handleWasPlaying();
    }
    setIsOpen(!isOpen);
  };

  const changePlaybackSpeed = (speed) => {
    if (video && video.playbackRate) {
      video.playbackRate = speed;
    }
    handleWasPlaying();
    setIsOpen(!isOpen);
  };

  const handleDropdownFocus = () => {
    if (video && !video.paused) {
      setWasPlaying(true);
      togglePlayPause();
    }
  };

  const speedList = [0.5, 1.0, 1.5, 2.0];

  return (
    <StyledSpeedController>
      <DropdownButton
        onClick={toggleDropdown}
        onFocus={handleDropdownFocus}
        isOpen={isOpen}
      >
        {isOpen ? 'Close' : `${video?.playbackRate}x`}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownItemList>
          {speedList.map((speed) => (
            <DropdownItem
              type='button'
              key={speed}
              onClick={() => changePlaybackSpeed(speed)}
            >
              <SelectedItem>
                {video?.playbackRate === speed && (
                  <Icon
                    iconName='check'
                    iconType='solid'
                    ariaLabel='Selected Speed'
                    size='1x'
                  />
                )}
              </SelectedItem>
              <Speed>{speed}x</Speed>
            </DropdownItem>
          ))}
        </DropdownItemList>
      </DropdownContent>
    </StyledSpeedController>
  );
};

SpeedController.propTypes = {
  videoRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  togglePlayPause: PropTypes.func.isRequired,
};

export default SpeedController;
