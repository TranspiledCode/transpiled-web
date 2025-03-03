import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import content from 'data/home';
import Button from 'atoms/Button';
import RevealWrapper from 'molecules/RevealWrapper';

import { MoveDownRight } from 'lucide-react';

const Icon = styled(MoveDownRight)`
  margin-left: 2rem;
`;

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
  gap: 1em;
`;

const Title = styled.h1`
  ${({ theme }) => theme.mixins.textH1};
  color: ${({ theme }) => theme.colors.white};
`;

const SubtitleText = styled.div`
  ${({ theme }) => theme.mixins.textSubtitle};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  gap: 0.2em;
  width: clamp(28rem, 20vw, 50rem);
  margin-bottom: clamp(2rem, 8vw, 8rem);
  line-height: 1em;
`;

const Word = styled.span`
  color: ${({ color, theme }) =>
    theme.colors[color] || color || theme.colors.white};
`;

const LearnMoreText = styled.div`
  ${({ theme }) => theme.mixins.textMono};
  color: ${({ theme }) => theme.colors.white};
  max-width: 28rem;
`;

const StyledButton = styled(Button)`
  font-size: clamp(2rem, 4vw, 5rem);
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
`;

const HomeHero = () => {
  const {
    hero: { title, subtitle, learnMore, buttonText },
  } = content;

  const subtitleWords = subtitle.split(' ');

  const greenIndices = useMemo(() => new Set([2, 4, 5]), []);
  const getWordColor = (index) => (greenIndices.has(index) ? 'green' : 'white');

  return (
    <HeroWrapper>
      <HeroContent>
        <TitleWrapper>
          <Title>{title}</Title>
          <SubtitleText>
            {subtitleWords.map((word, index) => (
              <Word key={`${word}-${index}`} color={getWordColor(index)}>
                {word}
              </Word>
            ))}
          </SubtitleText>
          <LearnMoreText>{learnMore}</LearnMoreText>
          <RevealWrapper>
            <Link to="#services" aria-label="Contact Us">
              <StyledButton variant="outline" size="medium">
                {buttonText} <Icon />
              </StyledButton>
            </Link>
          </RevealWrapper>
        </TitleWrapper>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HomeHero;
