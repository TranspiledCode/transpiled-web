import React from 'react';
import styled from '@emotion/styled';
import config from '../config';

// Container for the Hero section
const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 10rem 1rem;
  box-sizing: border-box;
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
`;

// Styled title with responsive font size
const StyledTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  max-width: 47.5rem;
`;

// Styled subtitle
const StyledSubtitle = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StyleTitleWords = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: 5rem;
`;

const Hero = () => (
  <StyledHero>
    <StyleMessageWrapper>
      <StyledTitle>
        {config.heroSection.title.map((word, index) => (
          <StyleTitleWords id={index}>{word}</StyleTitleWords>
        ))}
      </StyledTitle>
      <StyledSubtitle>{config.heroSection.subtitle}</StyledSubtitle>
    </StyleMessageWrapper>
  </StyledHero>
);

export default Hero;
