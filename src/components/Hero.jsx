import styled from '@emotion/styled';

const HeroWrapper = styled.section`
  ${({ theme }) => theme.mixins.flexColCenter};
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;

const TitleWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColCenter};
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 4.8rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Subtitle = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <TitleWrapper>
        <Title>Transpiled</Title>
        <Subtitle>Transpiling Tech Complexity Into Simplicity</Subtitle>
      </TitleWrapper>
    </HeroWrapper>
  );
};

export default Hero;
