import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import Loading from '../components/Loading';
import ByteCard from '../components/ByteCard';
import { flexCenter } from '../utils/css';

import { siteImages } from '../config';

const { bytesBackground } = siteImages;

// query videos
const VIDEO_QUERY = gql`
  {
    videos {
      _id
      title
      imageURL
      videoURL
      summary
      author {
        name
        imageURL
      }
    }
  }
`;

const Bytes = () => {
  const { loading, error, data } = useQuery(VIDEO_QUERY);

  if (loading) {
    return (
      <BytesSection id='bytes'>
        <Loading />
      </BytesSection>
    );
  }

  if (error || !data.videos || data.videos.length === 0) {
    // TODO: Implement error handling and feedback mechanism for bytes
    return null;
  }

  return (
    <BytesSection id='bytes'>
      <HeadingWrapper>
        <BytesHeading>Transpiled Bytes</BytesHeading>
        <Tagline>A collection of byte-sized tutorials for developers.</Tagline>
      </HeadingWrapper>
      <ByteCardWrapper>
        {data.videos.map((video) => {
          const { _id } = video;
          return <ByteCard key={_id} video={video} />;
        })}
      </ByteCardWrapper>
    </BytesSection>
  );
};
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
