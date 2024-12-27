// HomeHero.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from 'atoms/Button';
import RevealWrapper from 'molecules/RevealWrapper';
import useContent from 'hooks/useContent';

const HeroWrapper = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.lightBlue}
  );
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;

const HeroContent = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  padding: 4rem 0;
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

const HomeHero = () => {
  const { data, loading, error } = useContent('home'); // Fetch 'home' document

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading hero section: {error}</div>;

  const { hero } = data;
  const subtitleWords = hero.subtitle.split(' ');

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
          <Title>{hero.title}</Title>
          <SubtitleText>
            {subtitleWords.map((word, index) => (
              <Word key={index} color={getWordColor(index)}>
                {word}
              </Word>
            ))}
          </SubtitleText>
        </TitleWrapper>
        <RevealWrapper>
          <Link to="/learn-more">
            <StyledButton>{hero.buttonText}</StyledButton>
          </Link>
          <LearnMoreText>{hero.learnMore}</LearnMoreText>
        </RevealWrapper>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HomeHero;
