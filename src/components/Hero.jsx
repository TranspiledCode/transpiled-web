import React from 'react';
import styled from '@emotion/styled';
import config from '../config';

// Define specific colors
const COLORS = {
  blue: '#007BFF', // Bootstrap Primary Blue
  orange: '#FFA500', // Standard Orange
  black: '#000',
};

// Container for the entire Hero section
const HeroContainer = styled.section`
  background-color: #fff; /* Dark background for contrast */
  padding: 2rem 1rem; /* Mobile padding */

  @media (min-width: 768px) {
    padding: 4rem 2rem; /* Increased padding for larger screens */
  }
`;

// Wrapper that contains both the text and image
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stack vertically on mobile */
  align-items: center;
  text-align: center; /* Center text on mobile */

  @media (min-width: 768px) {
    flex-direction: row; /* Side by side on larger screens */
    align-items: flex-start;
    text-align: left; /* Align text to the left on larger screens */
    justify-content: space-between;
  }
`;

// Wrapper for the text section
const TextWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin-bottom: 2rem; /* Space below text on mobile */

  @media (min-width: 768px) {
    width: 60%; /* 60% width on larger screens */
    margin-bottom: 0; /* Remove bottom margin on larger screens */
    padding-right: 2rem; /* Space between text and image */
  }
`;

// Wrapper for the image section
const ImageWrapper = styled.div`
  width: 100%;
  max-width: 100%;

  @media (min-width: 768px) {
    width: 40%; /* 40% width on larger screens */
  }
`;

// Styled component for the title
const HeroTitle = styled.h1`
  font-size: 2rem;
  color: ${COLORS.black};
  margin-bottom: 1rem;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  span {
    display: inline; /* Keep words inline */
    /* Optional: Add margin or padding if needed */
  }
`;

// Styled component for the subtitle
const HeroSubtitle = styled.p`
  font-size: 1rem;
  color: ${COLORS.black};
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Styled component for the image
const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto; /* Center the image on mobile */

  @media (min-width: 768px) {
    margin: 0; /* Remove auto margin on larger screens */
  }
`;

// Helper function to get color based on word index
const getColorByIndex = (index) => {
  switch (index) {
    case 0:
      return COLORS.blue; // "Web" is blue
    case 1:
      return COLORS.black; // "and" is black
    case 2:
      return COLORS.orange; // "Mobile App" is orange
    case 3:
      return COLORS.black; // "Development" is black
    default:
      return COLORS.black;
  }
};

const Hero = () => (
  <HeroContainer>
    <ContentWrapper>
      <TextWrapper>
        <HeroTitle>
          {config.heroSection.title.map((word, index) => (
            <span key={index} style={{ color: getColorByIndex(index) }}>
              {word}{' '}
            </span>
          ))}
        </HeroTitle>
        <HeroSubtitle>{config.heroSection.subtitle}</HeroSubtitle>
      </TextWrapper>
      <ImageWrapper>
        <HeroImage
          src={config.siteImages.logoSquares}
          alt='Company Logo'
          loading='lazy'
        />
      </ImageWrapper>
    </ContentWrapper>
  </HeroContainer>
);

export default Hero;
