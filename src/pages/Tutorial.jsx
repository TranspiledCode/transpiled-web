import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Loading from '../components/Loading';
import VideoPlayer from '../components/VideoPlayer';

const GET_VIDEO = gql`
  query GetVideoById($id: ID!) {
    getVideoById(_id: $id) {
      title
      videoURL
      summary
    }
  }
`;

const StyledTutorialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
`;

const VideoTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 3em;
`;

const VideoSummary = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.5em;
`;

const TutorialPage = () => {
  const { id } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_VIDEO, {
    variables: { id },
  });

  useEffect(() => {
    refetch({ id });
  }, [id, refetch]);

  if (loading) {
    return (
      <StyledTutorialContainer>
        <Loading />
      </StyledTutorialContainer>
    );
  }
  // TODO: Implement error handling and feedback mechanism for videos
  if (error || !data.getVideoById || !data.getVideoById.videoURL)
    return <p>Error: {error.message}</p>;

  const { videoURL, title, summary } = data.getVideoById;

  return (
    <StyledTutorialContainer>
      <VideoTitle>{title}</VideoTitle>
      <VideoSummary>{summary}</VideoSummary>
      <StyledVideoWrapper>
        <VideoPlayer src={videoURL} />
      </StyledVideoWrapper>
    </StyledTutorialContainer>
  );
};

export default TutorialPage;
