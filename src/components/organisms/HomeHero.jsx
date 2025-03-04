import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useState, useEffect, useRef } from 'react';
import content from 'data/home';
import Button from 'atoms/Button';
import RevealWrapper from 'molecules/RevealWrapper';
import { MoveDownRight } from 'lucide-react';
import HeroBackground from 'molecules/HeroBackground';
import Typewriter from 'molecules/Typewriter';

const HeroWrapper = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
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
  position: relative;
  z-index: 2;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const Title = styled.span`
  ${({ theme }) => theme.mixins.textH1};
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2rem, 6.6vw, 4rem);
  margin: 0;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    font-size: clamp(7rem, 11vw, 5rem);
  }
`;

const LineOne = styled.span`
  display: flex;
  flex-direction: row;
  word-spacing: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    word-spacing: 1rem;
  }
`;

const LineTwo = styled.span`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  word-spacing: 0.5rem;
  width: 100%;

  @media (min-width: 1024px) {
    gap: 2rem;
    word-spacing: 1rem;
  }
`;

const TitleCode = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.green};
  font-family: 'DM Mono', monospace;
  text-transform: lowercase;
  display: ${(props) => (props.hidden ? 'none' : 'inline')};
  width: 100%;
`;

const TitleSecondary = styled.span`
  color: ${({ theme }) => theme.colors.white};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const TitleContainer = styled.span`
  display: flex;
  position: relative;
  width: 100%;
`;

const TransitionWord = styled.span`
  transition: all 0.5s ease-in-out;
`;

const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: clamp(2rem, 5vw, 5rem);
`;

const SubtitleText = styled.div`
  ${({ theme }) => theme.mixins.textSubtitle};
  color: ${({ theme }) => theme.colors.white};
  max-width: 80rem;
  font-size: clamp(2rem, 3.5vw, 2.6rem);
`;

const LearnMoreWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;

const LearnMoreText = styled.div`
  ${({ theme }) => theme.mixins.textMono};
  color: ${({ theme }) => theme.colors.white};
  max-width: 50rem;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  animation-delay: 0.9s;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    .icon-wrapper {
      transform: translateX(5px);
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  transition: transform 0.3s ease;
`;

const Green = styled.span`
  color: ${({ theme }) => theme.colors.green};
`;

const HomeHero = () => {
  const {
    hero: { subtitle1, subtitle2, learnMore1, learnMore2, buttonText },
  } = content;

  const [showScratch, setShowScratch] = useState(true);
  const [showYou, setShowYou] = useState(false);
  const typewriterRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const typewriterDuration = 10 * 100 + 2000;
    timeoutRef.current = setTimeout(() => {
      setShowScratch(false);
      setShowYou(true);
    }, typewriterDuration);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <HeroWrapper>
      <HeroBackground speed={1.5} />
      <HeroContent>
        <ContentContainer>
          <Title>
            <LineOne>
              Designed for You<Green>.</Green>
            </LineOne>
            <LineTwo>
              Built
              <TransitionWord>{showScratch ? 'from' : 'for'}</TransitionWord>
              <TitleContainer>
                {showScratch && (
                  <TitleCode ref={typewriterRef}>
                    <Typewriter text={' <scratch/>'} speed={100} cursor />
                  </TitleCode>
                )}
                {showYou && (
                  <TitleSecondary visible={showYou}>
                    you<Green>!</Green>
                  </TitleSecondary>
                )}
              </TitleContainer>
            </LineTwo>
          </Title>
          <SubTitleWrapper>
            <SubtitleText>{subtitle1}</SubtitleText>
            <SubtitleText>{subtitle2}</SubtitleText>
          </SubTitleWrapper>
          <LearnMoreWrapper>
            <LearnMoreText>{learnMore1}</LearnMoreText>
            <LearnMoreText>{learnMore2}</LearnMoreText>
          </LearnMoreWrapper>
          <ButtonWrapper>
            <RevealWrapper direction="right">
              <Link to="#services" aria-label="Contact Us">
                <StyledButton variant="outline" size="small">
                  {buttonText}
                  <IconWrapper className="icon-wrapper">
                    <MoveDownRight />
                  </IconWrapper>
                </StyledButton>
              </Link>
            </RevealWrapper>
          </ButtonWrapper>
        </ContentContainer>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HomeHero;
