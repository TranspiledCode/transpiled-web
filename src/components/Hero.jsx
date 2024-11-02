import styled from '@emotion/styled';
import config from '../config/home';
import Button from 'components/Button';
import AnimatedSection from 'components/AnimatedSection';

const HeroWrapper = styled.section`
  min-height: 100vh;
  background: linear-gradient(to bottom, #214eea, #15b5fa);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: clamp(80px, 10vw, 10vh);

  @media (min-width: 768px) {
    padding-left: 60px;
    align-items: flex-start;
  }
`;

const TitleWrapper = styled.div`
  text-align: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 5rem;
  line-height: 1.2;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 9.6rem;
  }
`;

const SubtitleText = styled.div`
  font-family: 'Manrope', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  font-size: 2.6rem;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
`;

const Word = styled.span`
  color: ${({ color, theme }) =>
    theme.colors[color] || color || theme.colors.white};
  margin-right: 0.5rem;

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`;

const LearnMoreText = styled.div`
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  margin: 10rem 0 3rem 0;
  max-width: 25rem;
`;

const CustomButton = styled(Button)`
  font-size: 5rem;
`;

const Hero = () => {
  const subtitleWords = config.hero.subtitle.split(' ');
  const getWordColor = (index) => {
    return index === 2 || index === 4 || index === 5 ? 'green' : 'white';
  };

  return (
    <HeroWrapper>
      <TitleWrapper>
        <Title>{config.hero.title}</Title>
        <SubtitleText>
          {subtitleWords.map((word, index) => (
            <Word key={index} color={getWordColor(index)}>
              {word}
            </Word>
          ))}
        </SubtitleText>
        <LearnMoreText>{config.hero.learnMore}</LearnMoreText>
        <AnimatedSection>
          <CustomButton icon="FaArrowDown" variant="outline" size="medium">
            {config.hero.buttonText}
          </CustomButton>
        </AnimatedSection>
      </TitleWrapper>
    </HeroWrapper>
  );
};

export default Hero;
