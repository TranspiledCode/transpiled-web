// ByteCard.js
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import VideoPlayer from './VideoPlayer';
import { flexCenter } from '../utils/css';
import profile from '../assets/images/profile.jpg';

const ByteCard = ({ video }) => {
  const videoURL =
    'https://transpiled.s3.us-west-2.amazonaws.com/assets/video/nvmMacFish.mp4';
  return (
    <Card>
      <VideoWrapper>
        <VideoPlayer src={videoURL} />
      </VideoWrapper>
      <ByteWrapper>
        <ByteTitle>{video.title}</ByteTitle>
        <Author>
          <Avatar src={profile} alt='profile' />
          <AuthorName>{`Host: ${video.author}`}</AuthorName>
        </Author>
        <Description>{video.description}</Description>
      </ByteWrapper>
      <ViewMore>View More</ViewMore>
    </Card>
  );
};

// Styled Components for ByteCard
const Card = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 320px;
  min-height: 300px;
  position: relative;
`;

const VideoWrapper = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ByteWrapper = styled.div`
  ${flexCenter('column')}
  gap: 2rem;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const ByteTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
`;

const Author = styled.div`
  ${flexCenter('row')}
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
  font-weight: 300;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 500;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.2;
`;

const ViewMore = styled.button`
  ${flexCenter()}
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primaryButton};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  @media (min-width: 1024px) {
    display: none;
  }
`;

// PropTypes
ByteCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ByteCard;
