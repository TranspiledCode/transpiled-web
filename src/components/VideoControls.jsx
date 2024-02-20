import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import PlayPauseButton from './PlayPauseButton';
import Icon from './Icon';

const StyledControlsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: ${({ showControls }) => (showControls ? 'visible' : 'hidden')};
  opacity: ${({ showControls }) => (showControls ? 1 : 0)};
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const SkipAheadButton = styled.button`
  color: ${(props) => props.theme.white};
  transform: scaleX(-1);

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const SkipBackButton = styled.button`
  color: ${(props) => props.theme.white};

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const VideoControls = ({
  isPlaying,
  setIsPlaying,
  videoRef,
  handleAdjustTimeClick,
  showControls,
  videoPlayerWidth,
}) => {
  const iconSize = videoPlayerWidth < 500 ? '3x' : '4x';
  const playButton = <Icon iconName='play' size={iconSize} iconType='solid' />;
  const pauseButton = (
    <Icon iconName='pause' size={iconSize} iconType='solid' />
  );

  const togglePlayPause = async () => {
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
    <StyledControlsContainer showControls={showControls}>
      <SkipBackButton>
        <Icon
          iconName='clockRotateLeft'
          size={iconSize}
          iconType='solid'
          onClick={() => handleAdjustTimeClick('backward', 15)}
        />
      </SkipBackButton>
      <PlayPauseButton togglePlayPause={togglePlayPause} isPlaying={isPlaying}>
        {isPlaying ? pauseButton : playButton}
      </PlayPauseButton>
      <SkipAheadButton>
        <Icon
          iconName='clockRotateLeft'
          size={iconSize}
          iconType='solid'
          onClick={() => handleAdjustTimeClick('forward', 15)}
        />
      </SkipAheadButton>
    </StyledControlsContainer>
  );
};

VideoControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  handleAdjustTimeClick: PropTypes.func.isRequired,
  showControls: PropTypes.bool.isRequired,
  videoRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  videoPlayerWidth: PropTypes.number.isRequired,
};

export default VideoControls;
