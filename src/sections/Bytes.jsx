import React from 'react';
import styled from '@emotion/styled';
import { flexCenter } from '../utils/css';

import profile from '../assets/images/profile.jpg';
import bytesBackground from '../assets/images/bytesBackground.png';

const BytesSection = styled.section`
  ${flexCenter()}
  flex-wrap: wrap;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.black};
  background-image: url(${bytesBackground});
  gap: 2rem;
  padding: 80px 0;
`;
const HeadingWrapper = styled.div`
  ${flexCenter('column')}
  gap: 2rem;
  width: 100%;
  padding: 2rem;
`;
const BytesHeading = styled.h2`
  color: ${({ theme }) => theme.white};
  font-size: 6rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
`;

const Tagline = styled.h3`
  color: ${({ theme }) => theme.white};
  font-size: 2rem;
  font-weight: 400;
  width: 100%;
  text-align: center;
`;

const ByteCard = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  ${flexCenter('column')}
  justify-content: space-between;
  gap: 2rem;
  width: 320px;
  min-height: 300px;
  position: relative;
`;

const VideoWrapper = styled.div`
  border-radius: 10px;
  ${flexCenter('')}
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
  font-weight: 500;
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
`;

const videos = [
  {
    id: 'ymCR4tIWZu8',
    title: 'NVM on Mac for Fish Shell',
    author: 'Joshua Crass',
    description:
      'Step-by-step guide to get nvm and Fish Shell to play nicely on your Mac.',
  },
  {
    id: 'ymCR4tIWZu8',
    title: 'NVM on Mac for Fish Shell',
    author: 'Joshua Crass',
    description:
      'Step-by-step guide to get nvm and Fish Shell to play nicely on your Mac.',
  },
  {
    id: 'ymCR4tIWZu8',
    title: 'NVM on Mac for Fish Shell',
    author: 'Joshua Crass',
    description:
      'Step-by-step guide to get nvm and Fish Shell to play nicely on your Mac.',
  },
];

const Bytes = () => (
  <BytesSection id='bytes'>
    <HeadingWrapper>
      <BytesHeading>Transpiled Bytes</BytesHeading>
      <Tagline>
        A collection of byte-sized tutorials and guides for developers.
      </Tagline>
    </HeadingWrapper>
    {videos.map((video) => (
      <ByteCard>
        <VideoWrapper>
          <iframe
            width='300'
            height='160'
            src={`https://www.youtube.com/embed/${video.id}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
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
      </ByteCard>
    ))}
  </BytesSection>
);

export default Bytes;
