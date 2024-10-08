// Hero.js
import React from 'react';
import styled from '@emotion/styled';
import config from '../config';

// Define an array of color keys from the theme corresponding to each index
const titleColors = ['blue', 'white', 'orange', 'white']; // Ensure these keys exist in your theme

// Container for the Hero section
const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 1rem 2rem;
  box-sizing: border-box;
  background-image: url(${config.siteImages.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (min-width: 768px) {
    padding: 1rem 3rem;
  }
`;

// Wrapper for the message content
const StyleMessageWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: 5px;
  overflow: hidden;
  margin-top: 15rem;

  @media (min-width: 768px) {
    width: 90%;
    max-width: 1400px;
  }

  @media (min-width: 1024px) {
    margin-top: 20rem;
  }
`;

// Styled title with responsive font size
const StyledTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  max-width: 47.5rem;

  @media (min-width: 768px) {
    max-width: 45rem;
  }

  @media (min-width: 1024px) {
    max-width: 50rem;
  }
`;

// Modified StyleTitleWords to accept color based on index and use theme colors
const StyleTitleWords = styled.h1`
  color: ${({ id, theme }) =>
    theme.colors[titleColors[id]] || theme.colors.white};
  font-weight: 700;
  font-size: 5rem;

  @media (min-width: 768px) {
    font-size: 6rem;
  }

  @media (min-width: 1024px) {
    font-size: 7rem;
  }
`;

// Styled subtitle
const StyledSubtitle = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  max-width: 35rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    max-width: 45rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    max-width: 55rem;
  }
`;

const Hero = () => (
  <StyledHero>
    <StyleMessageWrapper>
      <StyledTitle>
        {config.heroSection.title.map((word, index) => (
          <StyleTitleWords key={word} id={index}>
            {word}
          </StyleTitleWords>
        ))}
      </StyledTitle>
      <StyledSubtitle>{config.heroSection.subtitle}</StyledSubtitle>
    </StyleMessageWrapper>
  </StyledHero>
);

export default Hero;
