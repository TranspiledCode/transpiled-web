import React from 'react';
import styled from '@emotion/styled';
import ByteCard from '../components/ByteCard';
import { flexCenter } from '../utils/css';

import bytesBackground from '../assets/images/bytesBackground.png';
import { videos } from '../config';

const Bytes = () => (
  <BytesSection id='bytes'>
    <HeadingWrapper>
      <BytesHeading>Transpiled Bytes</BytesHeading>
      <Tagline>A collection of byte-sized tutorials for developers.</Tagline>
    </HeadingWrapper>
    <ByteCardWrapper>
      {videos.map((video) => (
        <ByteCard key={video.id} video={video} />
      ))}
    </ByteCardWrapper>
  </BytesSection>
);

// Styled Components
const BytesSection = styled.section`
  ${flexCenter('column')}
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.black};
  background-image: url(${bytesBackground});
  gap: 5rem;
  padding: 80px 0;
  position: relative;
`;
const HeadingWrapper = styled.div`
  ${flexCenter('column')}
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: relative;
`;
const BytesHeading = styled.h2`
  color: ${({ theme }) => theme.white};
  font-size: 6rem;
  font-weight: 500;
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
`;

const Tagline = styled.h3`
  color: ${({ theme }) => theme.white};
  font-size: 2rem;
  font-weight: 400;
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
`;

const ByteCardWrapper = styled.div`
  ${flexCenter()}
  flex-wrap: wrap;
  position: relative;

  @media (min-width: 768px) {
    gap: 5rem;
  }
`;

export default Bytes;
