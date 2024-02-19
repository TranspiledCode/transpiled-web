import styled from '@emotion/styled';
import VideoPlayer from '../components/VideoPlayer';

const StyledTutorialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: auto;
`;

const TutorialPage = () => {
  const videoURL =
    'https://transpiled.s3.us-west-2.amazonaws.com/assets/video/nvmMacFish.mp4';
  return (
    <StyledTutorialContainer>
      <StyledVideoWrapper>
        <VideoPlayer src={videoURL} />
      </StyledVideoWrapper>
    </StyledTutorialContainer>
  );
};

export default TutorialPage;
