import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import config from '../config/home';
import Button from 'components/Button';
import AnimatedSection from 'components/AnimatedSection';

const HeroWrapper = styled.section`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.lightBlue}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(2rem, 5vw, 4rem);
  padding-top: max(clamp(8rem, 10vw, 10vh), 80px);

  ${({ theme }) => theme.mediaQueries.md} {
    padding: clamp(4rem, 8vw, 6rem);
    align-items: flex-start;
  }
`;

const TitleWrapper = styled.div`
  max-width: min(100%, 120rem);
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: clamp(3.2rem, 8vw, 5rem);
  line-height: 1.2;
  margin-bottom: clamp(1.6rem, 4vw, 2rem);

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: clamp(5rem, 10vw, 9.6rem);
    margin-bottom: 1rem;
  }
`;

const SubtitleText = styled.div`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: clamp(2rem, 5vw, 2.6rem);
  max-width: min(100%, 60rem);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: clamp(3rem, 8vw, 6rem);
  line-height: 1.2;
  max-width: 40rem;

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 60rem;

    font-size: clamp(2.6rem, 6vw, 3.6rem);
    gap: 1rem;
  }
`;

const Word = styled.span`
  color: ${({ color, theme }) =>
    theme.colors[color] || color || theme.colors.white};
`;

const LearnMoreText = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 500;
  font-size: clamp(1.4rem, 3vw, 1.6rem);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  margin: clamp(4rem, 10vw, 10rem) 0 clamp(2rem, 5vw, 3rem) 0;
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
          <StyledButton icon="FaArrowDown" variant="outline" size="medium">
            {config.hero.buttonText}
          </StyledButton>
        </AnimatedSection>
      </TitleWrapper>
    </HeroWrapper>
  );
};

Hero.propTypes = {
  config: PropTypes.shape({
    hero: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      learnMore: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Hero;
