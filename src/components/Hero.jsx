import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import config from '../config/home';
import Button from 'components/Button';
import AnimatedSection from 'components/AnimatedSection';

const HeroWrapper = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.lightBlue}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 6rem;
  }
`;

const HeroContent = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 2rem;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: clamp(4.8rem, 10vw, 9.6rem);
  line-height: clamp(4.8rem, 10vw, 8.6rem);
`;

const SubtitleText = styled.div`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: clamp(1.8rem, 4vw, 3.6rem);
  line-height: clamp(1.8rem, 4vw, 3.6rem);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 80%;
  margin-bottom: clamp(2rem, 8vw, 8rem);

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 1rem;
    max-width: 60rem;
  }
`;

const Word = styled.span`
  color: ${({ color, theme }) =>
    theme.colors[color] || color || theme.colors.white};
`;

const LearnMoreText = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  max-width: 25rem;
`;

const StyledButton = styled(Button)`
  font-size: clamp(2rem, 4vw, 5rem);
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
`;

/**
 * Hero component for the landing page.
 * Responsive landing section with gradient background, animated title,
 * subtitle with highlighted words, and call-to-action button.
 *
 * @component
 * @example
 * ```jsx
 * // Requires config object with hero section content:
 * const config = {
 *   hero: {
 *     title: "Welcome",
 *     subtitle: "Build something amazing with us",
 *     learnMore: "Discover more",
 *     buttonText: "Get Started"
 *   }
 * };
 *
 * <Hero />
 * ```
 */
const Hero = () => {
  const subtitleWords = config.hero.subtitle.split(' ');

  const getWordColor = (index) => {
    switch (index) {
      case 2:
      case 4:
      case 5:
        return 'green';
      default:
        return 'white';
    }
  };

  return (
    <HeroWrapper>
      <HeroContent>
        <TitleWrapper>
          <Title>{config.hero.title}</Title>
          <SubtitleText>
            {subtitleWords.map((word, index) => (
              <Word key={`${word}-${index}`} color={getWordColor(index)}>
                {word}
              </Word>
            ))}
          </SubtitleText>
          <LearnMoreText>{config.hero.learnMore}</LearnMoreText>
          <AnimatedSection>
            <Link to="#contact">
              <StyledButton icon="FaArrowDown" variant="outline" size="medium">
                {config.hero.buttonText}
              </StyledButton>
            </Link>
          </AnimatedSection>
        </TitleWrapper>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
