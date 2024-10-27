import styled from '@emotion/styled';
import config from '../config/home';
import Button from 'components/Button';

const HeroWrapper = styled.section`
  height: 100vh;
  background: linear-gradient(to bottom, #214eea, #15b5fa);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;

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
  font-weight: 700;
  font-size: 9.6rem;
  color: ${({ theme }) => theme.colors.white};
`;

const SubtitleText = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 3.6rem;
  max-width: 600px;
  color: ${({ theme }) => theme.colors.white};
`;

const Word = styled.span`
  color: ${({ color, theme }) =>
    theme.colors[color] || color || theme.colors.white};
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

const Hero = () => {
  const subtitleWords = config.subtitle.split(' ');

  return (
    <HeroWrapper>
      <TitleWrapper>
        <Title>{config.title}</Title>
        <SubtitleText>
          {subtitleWords.map((word, index) => (
            <Word
              key={index}
              color={
                index === 2 || index === 4 || index === 5 ? 'green' : 'white'
              }
            >
              {word}{' '}
            </Word>
          ))}
        </SubtitleText>
        <LearnMoreText>{config.learnMore}</LearnMoreText>
        <Button variant="outline" size="large">
          {config.buttonText}
        </Button>
      </TitleWrapper>
    </HeroWrapper>
  );
};

export default Hero;
